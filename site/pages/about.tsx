import React from "react";
import MarkdownRenderer from "@/src/components/MarkdownRenderer";

interface AboutPageProps {
  content: string;
  data?: Record<string, any> | null;
}

export default function AboutPage({ content, data }: AboutPageProps) {
  return (
    <main className="relative min-h-screen flex gap-4 justify-between px-4 font-mono">
      <div className="fixed -z-50 h-full w-full">
        <img src="/images/bg-two.png" width={"100%"} height={"100"} />
      </div>

      <div className="relative z-10 text-white w-full py-8">
        <div className="max-w-[875px] mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">
            <MarkdownRenderer content={content} data={data} />
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  try {
    const filePath = path.join(process.cwd(), "content", "sobre-mim", "index.md");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);

    return {
      props: {
        content,
        data: data || null,
      },
    };
  } catch (err) {
    console.error("Erro ao ler sobre-mim:", err);
    return {
      props: {
        content: "# Sobre Mim\n\nPágina não encontrada.",
        data: null,
      },
    };
  }
}
