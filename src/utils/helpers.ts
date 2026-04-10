import type { CollectionEntry } from 'astro:content';

// Función limpia para obtener el slug desde el ID en Astro v5
export function getSlug(entry: CollectionEntry<'projects'>) {
  // Quitamos la extensión .md o .mdx del ID para obtener la URL limpia
  return entry.id.replace(/\.(md|mdx)$/, '');
}