# Portfolio Isabel Abad

**Portfolio personal y web profesional de Isabel Abad. Frontend Developer especializada en producto, datos y marketing digital.**

## Estructura del Proyecto

```text
/
├── public/
│   ├── images/          # Imágenes optimizadas
│   ├── certificates/    # PDFs de certificados
│   └── favicon.png      # Favicon
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── content/
│   │   ├── projects/    # Proyectos en Markdown
│   │   └── config.ts    # Configuración de colecciones
│   ├── layouts/         # Plantillas principales
│   ├── pages/           # Rutas de la aplicación
│   │   ├── index.astro
│   │   ├── cv.astro
│   │   └── projects/
│   └── styles/          # Estilos globales
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Comandos

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor local en `localhost:4321`     |
| `npm run build`           | Genera el build de producción en `./dist/`       |
| `npm run preview`         | Previsualiza el build localmente                 |

## Tecnologías

- **Framework:** [Astro](https://astro.build)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Contenido:** Markdown + Content Collections
- **Envío de Emails:** [Resend](https://resend.com/)
- **Despliegue:** Vercel / Netlify

## Variables de Entorno

Para el formulario de contacto, crea un archivo `.env` con:

```text
RESEND_API_KEY=re_tu_clave_api
CONTACT_EMAIL=tu_email@ejemplo.com
```

## Licencia

Este proyecto está bajo la Licencia MIT.