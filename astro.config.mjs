import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server', // ⚠️ CAMBIO CLAVE: De 'static' a 'server' para que funcione el formulario
  site: 'https://www.isabelabad.es', // Tu URL de producción de Vercel
  integrations: [
    tailwind(),
    sitemap(),
  ],
  adapter: vercel(),
});