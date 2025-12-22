import HistorySectionServer from "@/src/components/layout/HistorySectionServer";
// import Head from "next/head";

interface HistoryItem {
  slug: string;
  title?: string | null;
  excerpt?: string | null;
  order?: number | null;
  content: string;
}

interface PageProps {
  items: HistoryItem[];
}

function parseMarkdownWithFrontmatter(fileContent: string): {
  content: string;
  data: Record<string, any>;
} {
  if (!fileContent.startsWith("---")) {
    return { content: fileContent, data: {} };
  }

  const endIndex = fileContent.indexOf("\n---", 3);
  if (endIndex === -1) {
    return { content: fileContent, data: {} };
  }

  const rawFrontmatter = fileContent.slice(3, endIndex).trim();
  const body = fileContent.slice(endIndex + 4).replace(/^\s+/, "");

  const data: Record<string, any> = {};
  rawFrontmatter.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) return;
    let value = rest.join(":").trim();
    value = value.replace(/^['"]|['"]$/g, "");
    const num = Number(value);
    data[key.trim()] = Number.isNaN(num) ? value : num;
  });

  return { content: body, data };
}

export default function HistoryPage({ items }: PageProps) {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 font-mono">
      {/* <Head>
        <title>Minha História — Adriel Lucas</title>
      </Head> */}
      <div className="w-full max-w-[975px] py-12">
        <HistorySectionServer items={items} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");

  try {
    const contentDir = path.join(process.cwd(), "content");
    if (!fs.existsSync(contentDir)) {
      return { props: { items: [] } };
    }

    const files = fs
      .readdirSync(contentDir)
      .filter((f: string) => f.endsWith(".md"));

    const items = files.map((fileName: string) => {
      const filePath = path.join(contentDir, fileName);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { content, data } = parseMarkdownWithFrontmatter(fileContent);
      return {
        slug: fileName.replace(/\.md$/i, ""),
        title: data?.title || null,
        excerpt: data?.excerpt || null,
        order: typeof data?.order === "number" ? data.order : null,
        content,
      };
    });

    items.sort((a: any, b: any) => {
      if (a.order !== null && b.order !== null) return a.order - b.order;
      if (a.order !== null) return -1;
      if (b.order !== null) return 1;
      return a.slug.localeCompare(b.slug);
    });

    return { props: { items } };
  } catch (err) {
    console.error("Erro ao ler história:", err);
    return { props: { items: [] } };
  }
}
