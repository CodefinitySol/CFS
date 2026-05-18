import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'noreply@codefinitysol.com';
const TO_EMAIL   = process.env.CONTACT_TO_EMAIL   ?? 'sales@codefinitysol.com';

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  source: string;
}

export async function POST(req: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { name, email, subject, message, source } = payload;

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 422 });
  }

  const emailHtml = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#191819;">
      <div style="background:#191819;padding:24px 32px;border-radius:12px 12px 0 0;">
        <p style="color:#e8ecf0;font-size:13px;margin:0;letter-spacing:0.06em;text-transform:uppercase;">
          New enquiry — Codefinity Solutions
        </p>
      </div>
      <div style="background:#f8f9fa;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e8ecf0;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;width:120px;">Source</td>
            <td style="padding:8px 0;font-size:14px;font-weight:600;">${source}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Name</td>
            <td style="padding:8px 0;font-size:14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Email</td>
            <td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}" style="color:#2B2A2B;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Subject</td>
            <td style="padding:8px 0;font-size:14px;">${subject}</td>
          </tr>
        </table>
        <hr style="border:none;border-top:1px solid #e8ecf0;margin:24px 0;" />
        <p style="font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 8px;">Message</p>
        <p style="font-size:14px;line-height:1.7;white-space:pre-wrap;margin:0;">${message}</p>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[${source}] New enquiry from ${name}`,
      html: emailHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact API] Resend error:', err);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 },
    );
  }
}
