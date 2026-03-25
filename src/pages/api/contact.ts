import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

// Accedemos a las variables de entorno
const resend = new Resend(import.meta.env.RESEND_API_KEY);

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const sanitizeInput = (input: string) => {
  return input.replace(/[<>]/g, '').trim();
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    let { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    if (!validateEmail(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), { status: 400 });
    }

    name = sanitizeInput(name);
    email = sanitizeInput(email);
    message = sanitizeInput(message);

    if (name.length > 100 || email.length > 100 || message.length > 5000) {
      return new Response(JSON.stringify({ error: "Input too long" }), { status: 413 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Cambia esto si tienes un dominio verificado
      to: import.meta.env.CONTACT_EMAIL, // Variable de entorno para tu email
      // CORRECCIÓN: Usar replyTo en lugar de reply_to
      replyTo: email, 
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <div style="font-family: sans-serif; background: #0a0a0a; color: #fff; padding: 20px;">
          <h1 style="color: #9eff00; border-bottom: 1px solid #333; padding-bottom: 10px;">Nuevo Contacto Portfolio</h1>
          <p><strong style="color: #6b7280;">Nombre:</strong> ${name}</p>
          <p><strong style="color: #6b7280;">Email:</strong> <a href="mailto:${email}" style="color: #9eff00;">${email}</a></p>
          <hr style="border-color: #333;" />
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      `
    });

    if (error) {
      console.error('Resend Error:', error);
      return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });

  } catch (error) {
    console.error('Server Error:', error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
};