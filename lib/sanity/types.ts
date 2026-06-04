import type { PortableTextBlock } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";

/** Imagem pode vir do Sanity (objeto) ou ser um caminho local (fallback). */
export type ImageRef = SanityImageSource | string;

export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: ImageRef;
  tags?: string[];
  publishedAt: string;
  featured?: boolean;
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface Project {
  _id: string;
  title: string;
  username?: string;
  description: string;
  image: ImageRef;
  link?: string;
}

export interface Certification {
  _id: string;
  title: string;
  issuer?: string;
  logo?: ImageRef;
  credentialUrl?: string;
  issuedAt?: string;
}

export interface ChampionProject {
  _id: string;
  title: string;
  image: ImageRef;
  description: string;
  protectionText?: string;
  link?: string;
}
