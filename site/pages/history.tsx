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
  const matter = require("gray-matter");

  try {
    const contentDir = path.join(process.cwd(), "content");
    if (!fs.existsSync(contentDir)) {
      return { props: { items: [] } };
    }

    const files = fs.readdirSync(contentDir).filter((f: string) => f.endsWith('.md'));

    const items = files.map((fileName: string) => {
      const filePath = path.join(contentDir, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { content, data } = matter(fileContent);
      return {
        slug: fileName.replace(/\.md$/i, ''),
        title: data?.title || null,
        excerpt: data?.excerpt || null,
        order: typeof data?.order === 'number' ? data.order : null,
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
    console.error('Erro ao ler história:', err);
    return { props: { items: [] } };
  }
}
