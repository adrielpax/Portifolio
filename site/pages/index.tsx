import BootSequence from "@/src/components/common/BootSequence";
import LoadingScreen from "@/src/components/common/LoadScreen";
import AboutSection from "@/src/components/layout/AboutSection";
import ContactSection from "@/src/components/layout/ContactSection";
import MainCard from "@/src/components/layout/MainCard";
import ProjectsSection from "@/src/components/layout/ProjectsSection";
import ContactModal from "@/src/components/common/ContactModal";
import AdminPanel from "@/src/components/layout/AdminPanel";
import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";

export default function Home(): ReactElement {
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

      <main className="relative min-h-screen flex gap-4 justify-between font-mono">
        <div className="fixed -z-50 h-full w-full">
          <img src="/images/bg-two.png" width={"100%"} />
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
            <AboutSection />
            <ProjectsSection />
            <ContactSection
              onOpenContact={() => setShowContactModal(true)}
              onOpenAdmin={() => setShowAdminPanel(true)}
              showAdminButton={adminAccess}
            />
            <div className="flex flex-col md:flex-row gap-4"></div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4"></div>
              <div className=" bg-white/5 backdrop-blur-md border border-white/10 rounded-xl gap-4 p-6 max-w-[875px]">
                <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                  Minha Historia
                </h3>

                <div className="flex flex-row gap-2 bg-black/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                  <img />
                  <p>
                    Sou um Profissional qualificado no desenvolvimento de
                    applicações <br />
                    de software interface de sistema e integração e comunicação
                    de dados entre sistemas, mas minha historia nao começa
                    assim...{" "}
                  </p>
                </div>

                <div className="flex flex-row gap-2 bg-black/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                  <img />
                  <p>
                    Sou um Profissional qualificado no desenvolvimento de
                    applicações de software interface de sistema e integração e
                    comunicação de dados entre sistemas, mas minha historia nao
                    começa assim...{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-start"></section>

          {/* Rodapé */}
          <footer className="w-full text-center py-6 my-6 text-sm text-zinc-500"></footer>
        </div>

        {/* Modals */}
        {showContactModal && (
          <ContactModal onClose={() => setShowContactModal(false)} />
        )}

        {showAdminPanel && (
          <AdminPanel onClose={() => setShowAdminPanel(false)} />
        )}
      </main>
    </>
  );
}
