import BootSequence from "@/src/components/common/BootSequence";
import LoadingScreen from "@/src/components/common/LoadScreen";
import AboutSection from "@/src/components/layout/AboutSection";
import ContactSection from "@/src/components/layout/ContactSection";
import MainCard from "@/src/components/layout/Profile_Card";
import CTACards from "@/src/components/layout/CTACards";
import ProjectsSection from "@/src/components/layout/GitSection";
import ContactModal from "@/src/components/common/ContactModal";
import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import MarkdownRenderer from "@/src/components/MarkdownRenderer";
import HistorySectionServer from "@/src/components/layout/HistorySectionServer";
import { HistoryItem } from "@/src/types";
import Link from "next/link";
import Nav from "@/src/components/layout/Nav";
import ProjectCard from "@/src/components/layout/HabilityCards";
import GitSection from "@/src/components/layout/GitSection";
import GaleryProjects from "@/src/components/layout/GaleryProjects";

interface HomeProps {
  markdownContent: string;
  frontmatter?: Record<string, any> | null;
  historyFiles: HistoryItem[];
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

export default function Home({
  markdownContent,
  frontmatter,
  historyFiles,
}: HomeProps): ReactElement {
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
      {/* <Head>
        <div>
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
        
        </div>
      </Head> */}
      <main className="relative bg-transparent min-h-screen flex gap-4 justify-between px-4 font-mono">
        <LoadingScreen />
        <div className="relative z-10 text-white w-full">
          {/* <Nav /> */}
          {/* Header simples */}
          {/* <header className="w-full text-center py-8 max-w-[875px] mx-auto bg-white/5 backdrop-blur-sm rounded-lg px-4
          mt-6 mb-8 border border-white/10 flex flex-row items-center justify-between gap-4">
          
          <div className="text-left">

            <h1 className="flex items-center justify-end mt-0 p-0 text-lg">Desenvolvedor de Software</h1>
            <span className="text-cyan-500 flex items-center justify-end text-xs mt-0 p-0">Adriel Lucas ○ Portifolio Pessoal</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="flex items-center gap-2 rounded-full border border-white/5 bg-white/10 px-3 py-1"> <AiFillHome className="w-4 h-4" /> Inicio </Link>
            <Link href="#" className="flex items-center gap-2 rounded-full border border-white/5 bg-white/10 px-3 py-1">Sobre mim</Link>
            <Link href="#" className="flex items-center gap-2 rounded-full border border-white/5 bg-white/10 px-3 py-1">Contato</Link>
          </div>
          </header> */}
          {/* Seção principal */}
          <section className="flex flex-col items-center justify-center gap-4 max-w-[875px] mx-auto">
            <MainCard onOpenContact={() => setShowContactModal(true)} />
            {/* <CTACards onOpenContact={() => setShowContactModal(true)} /> */}
            <ProjectCard />

            <ContactSection
              onOpenContact={() => setShowContactModal(true)}
              onOpenAdmin={() => setShowAdminPanel(true)}
              showAdminButton={adminAccess}
            />
            <div className="flex gap-4 md:flex-row flex-col">
              <GaleryProjects />
              {/* <GitSection /> */}
            </div>

            <ContactSection
              onOpenContact={() => setShowContactModal(true)}
              onOpenAdmin={() => setShowAdminPanel(true)}
              showAdminButton={adminAccess}
            />
            <HistorySectionServer items={historyFiles} />
            <ContactSection
              onOpenContact={() => setShowContactModal(true)}
              onOpenAdmin={() => setShowAdminPanel(true)}
              showAdminButton={adminAccess}
            />
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

  try {
    const contentDir = path.join(process.cwd(), "content");
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
