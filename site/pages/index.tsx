import BootSequence from "@/src/components/common/BootSequence";
import LoadingScreen from "@/src/components/common/LoadScreen";
import AboutSection from "@/src/components/layout/AboutSection";
import ContactSection from "@/src/components/layout/ContactSection";
import MainCard from "@/src/components/layout/MainCard";
import ProjectsSection from "@/src/components/layout/ProjectsSection";
import ContactModal from "@/src/components/common/ContactModal";
import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import { Box, Card, Inset, Strong,Text } from "@radix-ui/themes";
import MarkdownRenderer from "@/src/components/MarkdownRenderer";
import HistorySection from "@/src/components/layout/HistorySection";
import { HistoryItem } from "@/src/types";

interface HomeProps {
  markdownContent: string;
  frontmatter?: Record<string, any> | null;
  historyFiles: HistoryItem[];
}

export default function Home({ markdownContent, frontmatter, historyFiles }: HomeProps): ReactElement {
  const [bootDone, setBootDone] = useState<boolean>(false);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);
  const [showAdminPanel, setShowAdminPanel] = useState<boolean>(false);
  const [adminAccess, setAdminAccess] = useState<boolean>(false);

  // Admin key sequence detection
  useEffect(() => {
    let keySequence: string[] = [];

    const handleKeyPress = (e: KeyboardEvent): void => {
      keySequence.push(e.key);
      if (keySequence.length > 5) keySequence.shift();

      if (keySequence.join("").includes("admin")) {
        setAdminAccess(true);
        keySequence = [];
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  // Close modals on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setShowContactModal(false);
        setShowAdminPanel(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  if (!bootDone) {
    return <BootSequence onFinish={() => setBootDone(true)} />;
  }

  return (
    <>
      <Head>
        <div key={0}>
          <title key={1}>Adriel Lucas | Desenvolvedor Full Stack</title>
          <meta
            name="description"
            content="Portfólio pessoal de Adriel Lucas — Desenvolvedor Full Stack especializado em interfaces modernas, automação e soluções digitais."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </div>
      </Head>

      <main className="relative min-h-screen flex gap-4 justify-between px-4 font-mono">
        <div className="fixed -z-50 h-full w-full">
          <img src="/images/bg-two.png" width={"100%"} height={"100"} />
        </div>
        <LoadingScreen />

        <div className="relative z-10 text-white w-full">
          {/* Header simples */}
          <header className="w-full text-center py-8 my-6">
            <h1 className="w-full text-center py-4 text-sm text-gray-400"></h1>
          </header>

          {/* Grid */}
          <section className="flex flex-col items-center justify-center gap-4 max-w-[875px] mx-auto">
            <MainCard onOpenContact={() => setShowContactModal(true)} />
              <div className="flex gap-4 md:flex-row flex-col">

            <AboutSection />
            <ContactSection
              onOpenContact={() => setShowContactModal(true)}
              onOpenAdmin={() => setShowAdminPanel(true)}
              showAdminButton={adminAccess}
              />
              </div>
            <ProjectsSection />

            <HistorySection items={historyFiles} />
           </section>

     



          {/* Rodapé */}
          <footer className="w-full text-center py-6 my-6 text-sm text-zinc-500 h-12 my-12ac"></footer>
        </div>

        {/* Modals */}
        {showContactModal && (
          <ContactModal onClose={() => setShowContactModal(false)} />
        )}

      
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Ler todos os arquivos markdown em /content no build
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  try {
    const contentDir = path.join(process.cwd(), "content");
    const files = fs.readdirSync(contentDir).filter((f: string) => f.endsWith(".md"));

    const items = files.map((fileName: string) => {
      const filePath = path.join(contentDir, fileName);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { content, data } = matter(fileContent);

      return {
        slug: fileName.replace(/\.md$/i, ""),
        title: data?.title || null,
        excerpt: data?.excerpt || null,
        order: typeof data?.order === 'number' ? data.order : null,
        content,
      };
    });

    // Ordena por frontmatter.order se existir, senão por nome de arquivo
    items.sort((a: any, b: any) => {
      if (a.order !== null && b.order !== null) return a.order - b.order;
      if (a.order !== null) return -1;
      if (b.order !== null) return 1;
      return a.slug.localeCompare(b.slug);
    });

    return {
      props: {
        markdownContent: items[0]?.content || "",
        frontmatter: items[0]?.title ? { title: items[0].title } : null,
        historyFiles: items,
      },
    };
  } catch (err) {
    console.error("Erro ao ler markdowns:", err);
    return {
      props: {
        markdownContent: "",
        frontmatter: null,
        historyFiles: [],
      },
    };
  }
}
