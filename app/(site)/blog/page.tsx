import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getPosts, resolveImage } from "@/lib/sanity/data";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre desenvolvimento full-stack, Next.js, automação e construção de produtos por Adriel Silva.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="mx-auto max-w-150 px-3 py-6">
      {/* Header estilo app */}
      <header className="mb-5 flex items-center gap-3">
        <Link
          href="/"
          aria-label="Voltar ao perfil"
          className="flex h-9 w-9 items-center justify-center rounded-full
          text-zinc-600 transition-colors hover:bg-zinc-100"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-zinc-900">
            Blog
          </h1>
          <p className="text-xs text-zinc-500">
            Bastidores, aprendizados e construção de produtos.
          </p>
        </div>
      </header>

      {posts.length === 0 && (
        <p className="py-20 text-center text-sm text-zinc-400">
          Ainda não há posts publicados. Em breve!
        </p>
      )}

      {/* Post em destaque */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mb-6 block overflow-hidden rounded-3xl border border-zinc-200/80
          bg-white shadow-sm transition-all hover:shadow-md"
        >
          {resolveImage(featured.coverImage, 1080) && (
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
              <Image
                src={resolveImage(featured.coverImage, 1080)!}
                alt={featured.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-[11px] font-semibold text-white shadow">
                Destaque
              </span>
            </div>
          )}
          <div className="p-4">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {featured.tags?.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600"
                >
                  {t}
                </span>
              ))}
            </div>
            <h2 className="text-lg font-bold leading-snug tracking-tight text-zinc-900">
              {featured.title}
            </h2>
            {featured.excerpt && (
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                {featured.excerpt}
              </p>
            )}
            <p className="mt-3 text-[11px] text-zinc-400">
              {formatDate(featured.publishedAt)}
            </p>
          </div>
        </Link>
      )}

      {/* Lista */}
      <div className="flex flex-col gap-3">
        {rest.map((post) => {
          const cover = resolveImage(post.coverImage, 400);
          return (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="group flex gap-3 rounded-2xl border border-zinc-200/70 bg-white p-2.5
              shadow-sm transition-all hover:shadow-md"
            >
              {cover && (
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
                  <Image
                    src={cover}
                    alt={post.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex min-w-0 flex-col justify-center">
                <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-zinc-900">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-500">
                    {post.excerpt}
                  </p>
                )}
                <p className="mt-1.5 text-[10px] text-zinc-400">
                  {formatDate(post.publishedAt)}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
