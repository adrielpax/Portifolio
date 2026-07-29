import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/os/Reveal";
import { getPosts, resolveImage } from "@/lib/sanity/data";
import { formatDate } from "@/lib/format";
import type { Post } from "@/lib/sanity/types";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre desenvolvimento full-stack, Next.js, automação e IA aplicada por Adriel Silva.",
  alternates: { canonical: "/blog" },
};

function filterPosts(posts: Post[], q?: string) {
  if (!q) return posts;
  const t = q.toLowerCase();
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(t) ||
      p.excerpt?.toLowerCase().includes(t) ||
      p.tags?.some((tag) => tag.toLowerCase().includes(t)),
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const all = await getPosts();
  const posts = filterPosts(all, q);

  return (
    <div className="px-5 py-10 md:px-12 lg:px-16">
      <Reveal>
        <header className="mb-8">
          <span className="hud-label flex items-center gap-2">
            <span className="text-hud-accent">LOG</span>
            <span className="h-px w-8 bg-hud-line" /> Registro do sistema
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-hud-text md:text-4xl">
            Blog
          </h1>
          <p className="mt-1 max-w-xl text-sm text-hud-muted">
            {q ? (
              <>
                Resultados para <span className="text-hud-accent">“{q}”</span> ·{" "}
                {posts.length} {posts.length === 1 ? "post" : "posts"}
              </>
            ) : (
              "Bastidores, IA e construção de produtos."
            )}
          </p>
        </header>
      </Reveal>

      {posts.length === 0 ? (
        <p className="py-16 text-center text-sm text-hud-muted">
          Nada encontrado{q ? ` para “${q}”` : ""}.{" "}
          <Link href="/blog" className="text-hud-accent hover:underline">
            Ver tudo
          </Link>
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => {
            const cover = resolveImage(post.coverImage, 720);
            return (
              <Reveal key={post._id} delay={(i % 3) * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-glass group flex h-full flex-col overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-hud-surface-2">
                    {cover && (
                      <Image
                        src={cover}
                        alt={post.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    {post.featured && (
                      <span className="absolute left-3 top-3 rounded-md bg-hud-accent px-2 py-0.5 font-mono text-[10px] font-semibold text-hud-bg">
                        DESTAQUE
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {post.tags?.slice(0, 3).map((t) => (
                        <span key={t} className="rounded-md border border-hud-line px-1.5 py-0.5 font-mono text-[10px] text-hud-steel">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-display text-[15px] font-semibold leading-snug text-hud-text">
                      {post.title}
                    </h2>
                    <p className="mt-1 line-clamp-2 text-xs text-hud-muted">
                      {post.excerpt}
                    </p>
                    <span className="hud-label mt-3">
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      )}
    </div>
  );
}
