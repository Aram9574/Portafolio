import fs from 'node:fs';
import path from 'node:path';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingTime: string;
  tags: string[];
  author: { name: string; url: string };
  source?: 'tsx' | 'markdown';
  markdownBody?: string;
};

const tsxPosts: BlogPost[] = [
  {
    source: 'tsx',
    slug: 'como-preparar-centro-sanitario-ehds',
    title: 'Cómo preparar un centro sanitario para el EHDS (Espacio Europeo de Datos Sanitarios)',
    description:
      'El EHDS entra plenamente en aplicación entre 2026 y 2029. La mayoría de los hospitales no tienen roadmap. Guía ejecutiva con los cuatro pilares y una checklist de 10 puntos para CIOs hospitalarios.',
    date: '2026-03-10',
    readingTime: '9 min',
    tags: ['EHDS', 'Salud Digital', 'Interoperabilidad', 'HL7 FHIR'],
    author: {
      name: 'Aram Zakzuk',
      url: 'https://alejandrozakzuk.com',
    },
  },
  {
    source: 'tsx',
    slug: 'eu-ai-act-clasificacion-cdss-5-pasos',
    title: 'EU AI Act: clasificación de tu CDSS en 5 pasos',
    description:
      'Casi todos los CDSS que los hospitales están comprando son High-Risk bajo EU AI Act. Pocos proveedores lo saben. Guía práctica para clasificar un sistema en 30 minutos con base legal citada.',
    date: '2026-02-18',
    readingTime: '11 min',
    tags: ['EU AI Act', 'CDSS', 'SaMD', 'MDR', 'Regulación'],
    author: {
      name: 'Aram Zakzuk',
      url: 'https://alejandrozakzuk.com',
    },
  },
  {
    source: 'tsx',
    slug: 'lo-que-consultoras-deben-preguntar-ia-clinica',
    title: 'Lo que las grandes consultoras deberían preguntar sobre IA clínica (y casi nunca preguntan)',
    description:
      'Las big four venden transformación digital sanitaria sin un médico en el comité. Las 7 preguntas que un advisor clínico haría antes de firmar cualquier propuesta de IA clínica.',
    date: '2026-01-25',
    readingTime: '10 min',
    tags: ['Clinical AI', 'Medical Affairs', 'Consultoría', 'CDSS'],
    author: {
      name: 'Aram Zakzuk',
      url: 'https://alejandrozakzuk.com',
    },
  },
];

function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const yaml = match[1];
  const body = match[2].trimStart();
  const data: Record<string, unknown> = {};
  let currentKey: string | null = null;
  let currentList: string[] | null = null;
  for (const line of yaml.split('\n')) {
    if (/^\s*-\s+/.test(line) && currentList) {
      currentList.push(line.replace(/^\s*-\s+/, '').replace(/^['"]|['"]$/g, '').trim());
      continue;
    }
    const kv = line.match(/^([a-zA-Z0-9_]+)\s*:\s*(.*)$/);
    if (kv) {
      currentKey = kv[1];
      const value = kv[2].trim();
      if (value === '' || value === '[]') {
        currentList = [];
        data[currentKey] = currentList;
      } else if (value.startsWith('[') && value.endsWith(']')) {
        data[currentKey] = value.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
        currentList = null;
      } else {
        data[currentKey] = value.replace(/^['"]|['"]$/g, '');
        currentList = null;
      }
    }
  }
  return { data, body };
}

function loadMarkdownPosts(): BlogPost[] {
  const dir = path.join(process.cwd(), 'content', 'blog');
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_'));
  const posts: BlogPost[] = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    const { data, body } = parseFrontmatter(raw);
    const slug = (data.slug as string) || file.replace(/\.md$/, '');
    const title = (data.title as string) || slug;
    const description = (data.description as string) || '';
    const date = (data.date as string) || new Date().toISOString().slice(0, 10);
    const readingTime = (data.readingTime as string) || `${Math.max(3, Math.round(body.split(/\s+/).length / 220))} min`;
    const tags = Array.isArray(data.tags) ? (data.tags as string[]) : [];
    posts.push({
      source: 'markdown',
      slug,
      title,
      description,
      date,
      readingTime,
      tags,
      author: {
        name: 'Aram Zakzuk',
        url: 'https://alejandrozakzuk.com',
      },
      markdownBody: body,
    });
  }
  return posts;
}

export const blogPosts: BlogPost[] = [...tsxPosts, ...loadMarkdownPosts()].sort(
  (a, b) => (a.date < b.date ? 1 : -1)
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
