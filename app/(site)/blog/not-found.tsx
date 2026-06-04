import Link from "next/link";

export default function BlogNotFound() {
  return (
    <main className="mx-auto flex max-w-150 flex-col items-center px-3 py-24 text-center">
      <p className="text-5xl">🔍</p>
      <h1 className="mt-4 text-xl font-bold text-zinc-900">
        Post não encontrado
      </h1>
      <p className="mt-1 text-sm text-zinc-500">
        Esse artigo pode ter sido movido ou ainda não foi publicado.
      </p>
      <Link
        href="/blog"
        className="mt-6 rounded-lg bg-zinc-900 px-5 py-2 text-sm font-medium text-white"
      >
        Ver todos os posts
      </Link>
    </main>
  );
}
