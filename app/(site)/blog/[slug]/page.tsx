import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getPost, getPostSlugs, resolveImage } from "@/lib/sanity/data";
import { formatDate } from "@/lib/format";
import PortableBody from "@/components/blog/PortableBody";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post não encontrado" };

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt || "";
  const cover = resolveImage(post.coverImage, 1200);

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: post.publishedAt,
      url: `/blog/${post.slug}`,
      images: cover ? [{ url: cover, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: cover ? [cover] : undefined,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const cover = resolveImage(post.coverImage, 1200);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adriel.dev";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    image: cover ? [cover] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Person", name: "Adriel Silva", url: siteUrl },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <main className="mx-auto max-w-150 px-3 py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/blog"
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-zinc-500
        transition-colors hover:text-zinc-900"
      >
        <ArrowLeft className="h-4 w-4" /> Blog
      </Link>

      <article>
        <header className="mb-5">
          <div className="mb-3 flex flex-wrap gap-1.5">
            {post.tags?.map((t) => (
              <span
                key={t}
                className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
            {post.title}
          </h1>
          <p className="mt-2 text-xs text-zinc-400">
            {formatDate(post.publishedAt)} · por Adriel Silva
          </p>
        </header>

        {cover && (
          <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-3xl bg-zinc-100">
            <Image
              src={cover}
              alt={post.title}
              fill
              priority
              unoptimized
              className="object-cover"
            />
          </div>
        )}

        {post.body && post.body.length > 0 ? (
          <PortableBody value={post.body} />
        ) : (
          <p className="text-sm text-zinc-500">{post.excerpt}</p>
        )}
      </article>

      {/* CTA de contato no fim do post */}
      <div className="mt-12 rounded-3xl border border-amber-200 bg-gradient-to-tr from-amber-50 to-white p-5 text-center">
        <p className="text-sm font-semibold text-zinc-900">
          Gostou do conteúdo?
        </p>
        <p className="mt-1 text-xs text-zinc-500">
          Vamos construir algo juntos.
        </p>
        <a
          href="https://typebot.co/my-typebot-75c4uvl"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-lg bg-gradient-to-tr from-amber-600 to-amber-500
          px-6 py-2 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-105"
        >
          Entrar em contato
        </a>
      </div>
    </main>
  );
}
