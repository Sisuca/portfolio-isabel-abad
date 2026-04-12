# Portfolio - Isabel Abad

🔗 **Demo:** [https://www.isabelabad.es](https://www.isabelabad.es)

Portfolio profesional orientado a producto, desarrollado con Astro y desplegado en Vercel, con foco en **seguridad frontend**, **SEO técnico** y **buenas prácticas de arquitectura**.

---

## Enfoque del proyecto

Este portfolio no se ha planteado solo como una web de presentación, sino como un entorno cercano a producción donde aplicar:

- Hardening de seguridad en frontend
- Decisiones arquitectónicas (SSR vs Hybrid)
- Optimización SEO técnica
- Buenas prácticas de tipado y mantenibilidad

---

## Resultados

- Mejora de seguridad: de configuración inicial a **B+ / A (Mozilla Observatory)**
- Eliminación de warnings de Astro v5 (content collections y tipado)
- Arquitectura preparada para entorno híbrido (SSR + estático)
- Base escalable para añadir nuevos proyectos sin tocar código de rutas

---

## Stack tecnológico

- **Framework:** Astro (SSR/Hybrid)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Contenido:** Markdown + Content Collections
- **Email:** Resend
- **Deploy:** Vercel

---

## Seguridad

El proyecto ha sido auditado obteniendo una calificación **A / B+** en análisis de seguridad estándar (Mozilla Observatory).

- Implementación de **Content Security Policy (CSP)** con modelo restrictivo (`default-src 'none'`), equilibrando seguridad y compatibilidad (uso controlado de `unsafe-inline` por limitaciones de Astro/Tailwind).
- Configuración de headers HTTP seguros en Vercel (`vercel.json`).
- Protección frente a XSS, Clickjacking y MIME sniffing.
- Restricción de orígenes y recursos externos.

---

## Decisiones de arquitectura

Decisiones clave tomadas durante el desarrollo para garantizar robustez y escalabilidad:

- **Arquitectura:** Uso de SSR/Hybrid en Astro para soportar funcionalidades dinámicas (formulario de contacto) manteniendo el resto de páginas estáticas.
- **Gestión de rutas:** Implementación de utilidad propia (`getSlug`) para adaptación a cambios en la API de Astro v5 (manejo de `id` vs `slug`).
- **Contenido:** Definición explícita de colecciones en `content.config.ts` (Astro v5) evitando la auto-generación deprecada.
- **SEO:** Creación manual de `sitemap.xml` para evitar conflictos con el adaptador de Vercel y asegurar la correcta indexación.

---

## Aprendizajes clave

- Adaptación a cambios de framework (Astro v5: eliminación de `slug`)
- Gestión de seguridad frontend en entorno real (CSP, headers HTTP)
- Toma de decisiones entre simplicidad vs robustez (SSR vs estático)
- Importancia del tipado estricto para evitar errores en runtime

---

## SEO técnico

- Implementación de `sitemap.xml` y `robots.txt`.
- Estructura semántica optimizada para rastreo e indexación.
- Meta etiquetas y URLs canónicas configuradas.

---

## Estructura del proyecto

```text
/
├── public/
│   ├── images/           # Imágenes optimizadas
│   ├── certificates/     # PDFs de certificados
│   ├── sitemap.xml       # SEO: Mapa del sitio
│   ├── robots.txt        # SEO: Control de indexación
│   └── favicon.svg       # Favicon
├── src/
│   ├── components/       # Componentes reutilizables (UI)
│   ├── content/
│   │   └── projects/     # Proyectos en Markdown
│   ├── content.config.ts # Definición de colecciones (Astro v5)
│   ├── layouts/          # Plantillas principales
│   ├── pages/            # Rutas de la aplicación
│   │   ├── index.astro
│   │   ├── cv.astro
│   │   └── projects/     # Rutas dinámicas ([slug])
│   ├── styles/           # Estilos globales
│   └── utils/            # Helpers (getSlug)
├── astro.config.mjs      # Configuración de Astro
├── tailwind.config.mjs   # Configuración de Tailwind
├── vercel.json           # Headers de seguridad HTTP
└── package.json
```

---

## Comandos

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm install`     | Instala dependencias                        |
| `npm run dev`     | Servidor local en `localhost:4321`          |
| `npm run build`   | Build de producción en `./dist/`            |
| `npm run preview` | Previsualiza el build localmente            |

---

## Variables de entorno

Para el correcto funcionamiento del formulario de contacto, crea un archivo `.env`:

```env
RESEND_API_KEY=re_tu_clave_api
CONTACT_EMAIL=tu_email@ejemplo.com
```

---

## Autor

Desarrollado por Isabel Abad — Frontend Developer orientada a producto, datos y marketing digital.

---

## Licencia

MIT