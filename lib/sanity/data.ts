import { hasSanity } from "@/sanity/env";
import { client } from "./client";
import { urlFor } from "./image";
import {
  postsQuery,
  postSlugsQuery,
  postBySlugQuery,
  projectsQuery,
  projectSlugsQuery,
  projectBySlugQuery,
  testimonialsQuery,
  certificationsQuery,
  championProjectsQuery,
} from "./queries";
import {
  fallbackPosts,
  fallbackProjects,
  fallbackCertifications,
  fallbackChampions,
} from "./fallback";
import type {
  Post,
  Project,
  Certification,
  ChampionProject,
  Testimonial,
  ImageRef,
} from "./types";

// Revalidação ISR: conteúdo atualiza sozinho a cada 60s sem rebuild.
const REVALIDATE = 60;

async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}) {
  return client.fetch<T>(query, params, {
    next: { revalidate: REVALIDATE },
  });
}

/**
 * Resolve uma imagem que pode ser:
 *  - caminho local (string) usado no fallback → retorna como está
 *  - objeto de imagem do Sanity → gera URL otimizada do CDN
 */
export function resolveImage(
  source: ImageRef | undefined,
  width = 1080,
): string | null {
  if (!source) return null;
  if (typeof source === "string") return source;
  try {
    return urlFor(source).width(width).auto("format").url();
  } catch {
    return null;
  }
}

export async function getPosts(): Promise<Post[]> {
  if (!hasSanity) return fallbackPosts;
  const posts = await sanityFetch<Post[]>(postsQuery);
  return posts?.length ? posts : fallbackPosts;
}

export async function getPostSlugs(): Promise<string[]> {
  if (!hasSanity) return fallbackPosts.map((p) => p.slug);
  return (await sanityFetch<string[]>(postSlugsQuery)) ?? [];
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!hasSanity) return fallbackPosts.find((p) => p.slug === slug) ?? null;
  const post = await sanityFetch<Post | null>(postBySlugQuery, { slug });
  return post ?? fallbackPosts.find((p) => p.slug === slug) ?? null;
}

export async function getProjects(): Promise<Project[]> {
  if (!hasSanity) return fallbackProjects;
  const data = await sanityFetch<Project[]>(projectsQuery);
  return data?.length ? data : fallbackProjects;
}

const fallbackSlugs = fallbackProjects
  .map((p) => p.slug)
  .filter((s): s is string => Boolean(s));

export async function getProjectSlugs(): Promise<string[]> {
  if (!hasSanity) return fallbackSlugs;
  const slugs = await sanityFetch<string[]>(projectSlugsQuery);
  return slugs?.length ? slugs : fallbackSlugs;
}

export async function getProject(slug: string): Promise<Project | null> {
  const local = fallbackProjects.find((p) => p.slug === slug) ?? null;
  if (!hasSanity) return local;
  const data = await sanityFetch<Project | null>(projectBySlugQuery, { slug });
  return data ?? local;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!hasSanity) return [];
  return (await sanityFetch<Testimonial[]>(testimonialsQuery)) ?? [];
}

export async function getCertifications(): Promise<Certification[]> {
  if (!hasSanity) return fallbackCertifications;
  const data = await sanityFetch<Certification[]>(certificationsQuery);
  // `?? ` não serve: uma lista vazia é "definida" e deixaria a página em branco.
  return data?.length ? data : fallbackCertifications;
}

export async function getChampionProjects(): Promise<ChampionProject[]> {
  if (!hasSanity) return fallbackChampions;
  const data = await sanityFetch<ChampionProject[]>(championProjectsQuery);
  return data?.length ? data : fallbackChampions;
}
