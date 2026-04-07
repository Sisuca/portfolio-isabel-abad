import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Función de seguridad anti-XSS
const escapeHTML = (str: string) =>
  str.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[c]!));

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Helper limpio para respuestas JSON
const json = (data: any, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });

export const POST: APIRoute = async ({ request }) => {
  let body;

  // 1. Validación de formato JSON
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Formato inválido' }, 400);
  }

  try {
    // 2. Normalización
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const message = String(body.message || '').trim();

    // 3. Validaciones
    if (!name || !email || !message) {
      return json({ error: 'Campos requeridos' }, 400);
    }

    if (!validateEmail(email)) {
      return json({ error: 'Email inválido' }, 400);
    }

    if (name.length > 100 || email.length > 100 || message.length > 5000) {
      return json({ error: 'Datos demasiado largos' }, 413);
    }

    // 4. Seguridad: Escapado para visualización
    const safeName = escapeHTML(name);
    const safeMessage = escapeHTML(message);
    const safeEmailLink = escapeHTML(email);

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: import.meta.env.CONTACT_EMAIL,
      replyTo: email, // Técnico: sin escapar
      subject: `Nuevo mensaje de ${safeName}`,
      html: `
        <div style="font-family: sans-serif; background: #0a0a0a; color: #fff; padding: 20px;">
          <h1 style="color: #9eff00; border-bottom: 1px solid #333; padding-bottom: 10px;">Nuevo Contacto Portfolio</h1>
          <p><strong style="color: #6b7280;">Nombre:</strong> ${safeName}</p>
          <p><strong style="color: #6b7280;">Email:</strong> <a href="mailto:${safeEmailLink}" style="color: #9eff00;">${safeEmailLink}</a></p>
          <hr style="border-color: #333;" />
          <p style="white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>
        </div>
      `
    });

    if (error) {
      console.error('Resend Error:', error);
      return json({ error: 'Error enviando email' }, 500);
    }

    return json({ success: true });

  } catch (err) {
    console.error('Server Error:', err);
    return json({ error: 'Error interno' }, 500);
  }
};