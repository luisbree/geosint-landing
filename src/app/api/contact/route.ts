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
      <div style="background-color: #FAFAFA; padding: 30px 15px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #424242; line-height: 1.5;">
        <div style="max-width: 580px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid #EEEEEE; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);">
          <!-- Header -->
          <div style="background-color: #004D40; padding: 30px 24px; text-align: center;">
            <span style="background-color: #E8F5E9; color: #4CAF50; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 6px 12px; border-radius: 9999px; display: inline-block; margin-bottom: 12px;">
              Nuevo Registro
            </span>
            <h1 style="color: #FFFFFF; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.01em;">
              Solicitud de Free Trial
            </h1>
            <p style="color: #E0F2F1; margin: 6px 0 0 0; font-size: 13px; font-weight: 300;">
              Plataforma GeoSint — Licencia de 7 días
            </p>
          </div>
          
          <!-- Content Body -->
          <div style="padding: 30px 24px;">
            <!-- Client info card -->
            <div style="background-color: #FAFAFA; border: 1px solid #EEEEEE; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #004D40; letter-spacing: 0.05em; width: 30%;">Solicitante</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #212121; font-weight: 500;">${name}</td>
                </tr>
                <tr style="border-top: 1px solid #EEEEEE;">
                  <td style="padding: 10px 0 6px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #004D40; letter-spacing: 0.05em;">Empresa</td>
                  <td style="padding: 10px 0 6px 0; font-size: 14px; color: #212121; font-weight: 500;">${company}</td>
                </tr>
                <tr style="border-top: 1px solid #EEEEEE;">
                  <td style="padding: 10px 0 6px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #004D40; letter-spacing: 0.05em;">Email</td>
                  <td style="padding: 10px 0 6px 0; font-size: 14px; color: #212121; font-weight: 500;">
                    <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none; font-weight: 600;">${email}</a>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Message block -->
            <div style="margin-bottom: 12px;">
              <h3 style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #004D40; letter-spacing: 0.05em; margin: 0 0 10px 0;">
                Detalles del Proyecto / Consulta
              </h3>
              <div style="font-size: 14px; line-height: 1.6; color: #424242; background-color: #FFFFFF; border-left: 3px solid #4CAF50; padding: 4px 16px; margin: 0;">
                ${message.replace(/\n/g, "<br />")}
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #FAFAFA; border-top: 1px solid #EEEEEE; padding: 20px 24px; text-align: center;">
            <p style="margin: 0; font-size: 11px; color: #9E9E9E; line-height: 1.4;">
              Este es un correo automático generado por el formulario de la Landing Page.<br />
              Para responder a esta solicitud, simplemente haz clic en <strong>Responder</strong> en tu cliente de correo.
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email using Resend
    // We display the client's name in 'from' but use the verified domain email to comply with SPF/DMARC.
    // Sent ONLY to contacto@geosint.com.ar so the webhook handles the forwarding to the personal account.
    const { error } = await resend.emails.send({
      from: `${name} <contacto@geosint.com.ar>`,
      to: ["contacto@geosint.com.ar"],
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
