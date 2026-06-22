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
    const originalFrom = emailData.from; // "Sender Name <sender@example.com>"
    const originalTo = emailData.to || [];
    const originalSubject = emailData.subject || "(No Subject)";
    const originalText = emailData.text || "";
    const originalHtml = emailData.html || "";

    const formattedFrom = typeof originalFrom === "string" ? originalFrom : JSON.stringify(originalFrom);
    const formattedTo = Array.isArray(originalTo) ? originalTo.join(", ") : String(originalTo);

    const forwardSubject = `[Reenviado] ${originalSubject}`;
    const forwardHtml = `
      <div style="font-family: sans-serif; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background-color: #f7f9fa; padding: 15px; border-radius: 6px; margin-bottom: 20px; font-size: 14px; line-height: 1.5;">
          <h2 style="margin-top: 0; color: #111; font-size: 18px; border-bottom: 1px solid #eaeaea; padding-bottom: 8px;">Correo Reenviado</h2>
          <strong>De:</strong> ${formattedFrom}<br />
          <strong>Para:</strong> ${formattedTo}<br />
          <strong>Asunto:</strong> ${originalSubject}<br />
        </div>
        <div style="line-height: 1.6; font-size: 15px;">
          ${originalHtml || `<pre style="white-space: pre-wrap; font-family: inherit;">${originalText}</pre>`}
        </div>
      </div>
    `;

    // Forwarding to target email
    const senderEmail = "contacto@geosint.com.ar";
    
    // Attempt to extract raw email address for Reply-To so that replies go to the original sender
    let replyToEmail = senderEmail;
    if (typeof originalFrom === "string") {
      const match = originalFrom.match(/<([^>]+)>/);
      if (match && match[1]) {
        replyToEmail = match[1];
      } else if (originalFrom.includes("@")) {
        replyToEmail = originalFrom.trim();
      }
    }

    const { error: sendError } = await resend.emails.send({
      from: senderEmail,
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
