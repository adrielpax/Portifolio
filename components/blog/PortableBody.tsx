import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { resolveImage } from "@/lib/sanity/data";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-[15px] leading-7 text-zinc-700 my-4">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-zinc-900 mt-10 mb-3 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-zinc-900 mt-8 mb-2 tracking-tight">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-amber-500 pl-4 my-6 italic text-zinc-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-zinc-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-amber-700">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <Link
        href={value?.href ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-600 underline underline-offset-2 hover:text-amber-700"
      >
        {children}
      </Link>
    ),
  },
  types: {
    image: ({ value }) => {
      const src = resolveImage(value, 1200);
      if (!src) return null;
      return (
        <span className="block relative my-6 w-full overflow-hidden rounded-2xl">
          <Image
            src={src}
            alt={value?.alt ?? ""}
            width={1200}
            height={800}
            unoptimized
            className="h-auto w-full object-cover"
          />
        </span>
      );
    },
  },
};

export default function PortableBody({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return <PortableText value={value} components={components} />;
}
