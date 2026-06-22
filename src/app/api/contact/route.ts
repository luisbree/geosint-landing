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
    const body = await req.json();
    const { name, email, company, message } = body;

    // Basic fields validation
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos." },
        { status: 400 }
      );
    }

    const htmlContent = `
      <div style="font-family: sans-serif; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 0;">Nueva Solicitud de Trial - GeoSint</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569; width: 140px;">Nombre:</td>
            <td style="padding: 10px 0; color: #0f172a;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Empresa:</td>
            <td style="padding: 10px 0; color: #0f172a;">${company}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eaeaea;">
            <td style="padding: 10px 0; font-weight: bold; color: #475569;">Email:</td>
            <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
          </tr>
        </table>
        
        <div style="margin-top: 20px;">
          <h4 style="color: #475569; margin-bottom: 6px;">Mensaje / Detalles del Proyecto:</h4>
          <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 12px 15px; border-radius: 4px; font-style: italic; line-height: 1.5; color: #334155;">
            ${message.replace(/\n/g, "<br />")}
          </div>
        </div>
      </div>
    `;

    // Send email using Resend
    // We display the client's name in 'from' but use the verified domain email to comply with SPF/DMARC.
    // We send it to both luisbree@gmail.com and contacto@geosint.com.ar so they receive it immediately.
    const { error } = await resend.emails.send({
      from: `${name} <contacto@geosint.com.ar>`,
      to: ["luisbree@gmail.com", "contacto@geosint.com.ar"],
      replyTo: email,
      subject: `[Solicitud de Trial] ${name} (${company})`,
      html: htmlContent,
    });

    if (error) {
      console.error("Error sending contact email via Resend:", error);
      return NextResponse.json(
        { error: "Error al enviar el correo de contacto a través de Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Error interno del servidor.", details: error.message },
      { status: 500 }
    );
  }
}
