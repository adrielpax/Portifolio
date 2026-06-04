import { hasSanity } from "@/sanity/env";
import { client } from "./client";
import { urlFor } from "./image";
import {
  postsQuery,
  postSlugsQuery,
  postBySlugQuery,
  projectsQuery,
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

export async function getCertifications(): Promise<Certification[]> {
  if (!hasSanity) return fallbackCertifications;
  const data = await sanityFetch<Certification[]>(certificationsQuery);
  return data ?? fallbackCertifications;
}

export async function getChampionProjects(): Promise<ChampionProject[]> {
  if (!hasSanity) return fallbackChampions;
  const data = await sanityFetch<ChampionProject[]>(championProjectsQuery);
  return data?.length ? data : fallbackChampions;
}
