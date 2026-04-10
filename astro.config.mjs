import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', // Mantenemos esto para el formulario
  site: 'https://www.isabelabad.es', // Importante para canonical tags
  integrations: [
    tailwind(),
  ],
  adapter: vercel(),
});