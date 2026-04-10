import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Mantenemos 'server' para que tu formulario funcione correctamente
  output: 'server', 
  
  // URL necesaria para el sitemap y canonical tags
  site: 'https://www.isabelabad.es', 
  
  // Integraciones: Sitemap + Tailwind
  integrations: [
    tailwind(),
    sitemap(), 
  ],
  
  // Adaptador para desplegar en Vercel con funciones serverless
  adapter: vercel(),
});