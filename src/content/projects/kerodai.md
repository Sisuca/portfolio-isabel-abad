---
title: "Kerodai"
description: "Aplicación web para explorar, filtrar y ordenar colecciones de Discogs de forma ágil y visual. Incluye estadísticas, creación de listas y descarga en Excel o PDF con portadas incluidas."
image: "/images/kerodai.jpg"
priority: 1

technologies:
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - Supabase
  - PostgreSQL
  - Edge Functions
  - OAuth 1.0a
  - Zod
  - TanStack Table
  - react-pdf/renderer

liveUrl: "https://kerodai.com/"

problem: "Catalogar una colección en Discogs puede suponer años de trabajo, pero esa información queda vinculada a una plataforma externa, sujeta a cambios y pérdida de funcionalidades. Los coleccionistas necesitan una forma independiente de preservar su información, con una experiencia de consulta rápida y totalmente centrada en su colección."

solution: "Kerodai conecta y sincroniza colecciones de Discogs o importa sus datos mediante CSV, incluso con varios miles de discos. La información se consulta en vista de tabla o tarjetas, con búsqueda, filtros y ordenación de resultados. Incluye estadísticas de la colección, creación de listas y permite descargar en Excel o PDF la colección completa, los resultados con filtros aplicados y las listas creadas, con portadas incluidas. Como el CSV de Discogs no incluye imágenes, Kerodai genera portadas deterministas para dar identidad gráfica a cada disco, en la web y las descargas."

technicalArchitecture:
  - "Frontend en React + TypeScript con separación entre componentes, hooks, servicios, esquemas y utilidades"
  - "Modelo de dominio validado con Zod y capa DTO/Mapper que desacopla los datos de entrada de la lógica interna"
  - "Supabase + PostgreSQL + Edge Functions con OAuth 1.0a y sincronización paginada"
  - "Seguridad mediante RLS y cifrado de tokens, sin exponer credenciales de Discogs en el cliente"
  - "Gestión de varios miles de registros con TanStack Table: paginación, carga progresiva y persistencia local"
  - "Exportación de archivos client-side mediante ExcelJS y @react-pdf/renderer"
  - "Portadas generativas rasterizadas con html-to-image para las exportaciones"
  - "Creación y reordenación de listas con dnd-kit y persistencia local"

projectDemonstration:
  - "Transformación de una necesidad real en un producto digital completo"
  - "Diseño de arquitectura frontend/full-stack mantenible y modular"
  - "Integración segura con una API externa mediante OAuth"
  - "Modelado, validación y transformación de datos con capas de dominio"
  - "Sincronización de datos y persistencia cloud"
  - "Funcionalidades complejas para manipulación de datos"
  - "Desarrollo y despliegue de un producto real en producción"

features:
  - "Conexión directa con Discogs mediante OAuth 1.0a o importación por CSV"
  - "Sincronización paginada de colecciones de incluso varios miles de discos"
  - "Búsqueda, filtros, ordenación y vistas de tabla y tarjetas"
  - "Estadísticas de formatos, cantidades por décadas, estilos y sellos"
  - "Portadas reales o generativas deterministas, también en exportaciones"
  - "Creación de listas aleatorias, por filtros o de búsqueda por palabras"
  - "Reordenación de listas con drag & drop"
  - "Exportación a Excel y PDF de colecciones, resultados filtrados y listas"
  - "Persistencia local para colecciones cargadas con CSV y listas creadas"
  - "Sesión y persistencia cloud para colecciones conectadas con Discogs"

---