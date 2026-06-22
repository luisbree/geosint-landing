import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// Helper function to safely instantiate Resend client only when needed.
// This prevents Next.js from throwing build-time errors if RESEND_API_KEY is not defined.
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing from environment variables.");
  }
  return new Resend(apiKey);
};

export async function POST(req: NextRequest) {
  try {
    const resend = getResendClient();
    const payload = await req.text();

    // svix headers are required for verifying webhook signatures in Resend
    const svixId = req.headers.get("svix-id");
    const svixTimestamp = req.headers.get("svix-timestamp");
    const svixSignature = req.headers.get("svix-signature");

    if (!svixId || !svixTimestamp || !svixSignature) {
      return NextResponse.json(
        { error: "Missing verification headers" },
        { status: 400 }
      );
    }

    const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.warn("RESEND_WEBHOOK_SECRET is not configured. Webhook verification is skipped in development.");
    } else {
      try {
        resend.webhooks.verify({
          payload,
          headers: {
            id: svixId,
            timestamp: svixTimestamp,
            signature: svixSignature,
          },
          webhookSecret,
        });
      } catch (err: any) {
        console.error("Signature verification failed:", err);
        return NextResponse.json(
          { error: "Invalid webhook signature" },
          { status: 400 }
        );
      }
    }

    const body = JSON.parse(payload);

    // Make sure we only process email.received events
    if (body.type !== "email.received") {
      return NextResponse.json(
        { message: `Unhandled event type: ${body.type}` },
        { status: 200 }
      );
    }

    const emailData = body.data || {};
    const emailId = emailData.email_id;

    if (!emailId) {
      return NextResponse.json(
        { error: "Missing email_id in webhook data" },
        { status: 400 }
      );
    }

    // Since the webhook payload only contains metadata (no HTML/Text body), we must retrieve the full email details using the email_id
    const { data: fullEmail, error: fetchError } = await resend.emails.receiving.get(emailId);

    if (fetchError || !fullEmail) {
      console.error("Error fetching received email from Resend API:", fetchError);
      return NextResponse.json(
        { error: "Failed to fetch received email details", details: fetchError },
        { status: 500 }
      );
    }

    const originalFrom = fullEmail.from; // "Sender Name <sender@example.com>"
    const originalTo = fullEmail.to || [];
    const originalSubject = fullEmail.subject || "(No Subject)";
    const originalText = fullEmail.text || "";
    const originalHtml = fullEmail.html || "";

    const formattedFrom = typeof originalFrom === "string" ? originalFrom : JSON.stringify(originalFrom);
    const formattedTo = Array.isArray(originalTo) ? originalTo.join(", ") : String(originalTo);

    const forwardSubject = originalSubject;
    const forwardHtml = originalHtml || `<pre style="white-space: pre-wrap; font-family: sans-serif; font-size: 14px; line-height: 1.6; color: #424242; margin: 0;">${originalText}</pre>`;

    // Forwarding to target email
    const senderEmail = "contacto@geosint.com.ar";
    
    // Construct From header using original sender's display name if available to keep it recognizable
    let forwardFrom = senderEmail;
    if (typeof originalFrom === "string") {
      const nameMatch = originalFrom.match(/^([^<]+)/);
      if (nameMatch && nameMatch[1]) {
        const namePart = nameMatch[1].trim().replace(/^["']|["']$/g, '');
        if (namePart && namePart.toLowerCase() !== senderEmail.toLowerCase()) {
          forwardFrom = `${namePart} <${senderEmail}>`;
        }
      }
    }

    // Extract Reply-To email so that when replying to the forward, it goes directly to the original client
    let replyToEmail = senderEmail;
    if (Array.isArray(fullEmail.reply_to) && fullEmail.reply_to.length > 0) {
      replyToEmail = fullEmail.reply_to[0];
    } else if (typeof originalFrom === "string") {
      const match = originalFrom.match(/<([^>]+)>/);
      if (match && match[1]) {
        replyToEmail = match[1];
      } else if (originalFrom.includes("@")) {
        replyToEmail = originalFrom.trim();
      }
    }

    const { error: sendError } = await resend.emails.send({
      from: forwardFrom,
      to: ["luisbree@gmail.com"],
      replyTo: replyToEmail,
      subject: forwardSubject,
      html: forwardHtml,
    });

    if (sendError) {
      console.error("Error sending forwarded email via Resend:", sendError);
      return NextResponse.json(
        { error: "Failed to forward email", details: sendError },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email forwarded successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
