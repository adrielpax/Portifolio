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

      <main className="relative min-h-screen flex gap-4 justify-between font-mono px-4 md:px-0">
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
              <div className="flex gap-4 md:flex-row flex-col">

            <AboutSection />
            <ContactSection
              onOpenContact={() => setShowContactModal(true)}
              onOpenAdmin={() => setShowAdminPanel(true)}
              showAdminButton={adminAccess}
              />
              </div>
            <ProjectsSection />

            <div className="flex flex-col md:flex-row gap-4"></div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4"></div>
              <div className=" bg-white/5 backdrop-blur-md border border-white/10 rounded-xl gap-4 p-6 max-w-[875px]
              flex-col gap-4 ">
                <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                  Minha Historia
                </h3>

                <div className="flex flex-row gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6
                group hover:border-cyan-500 mb-4">
                  <img src="https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg"
                  className="rounded-lg max-w-md" />
                  <p className="text-sm text-gray-600">
                    Sou um Profissional qualificado no desenvolvimento de
                    applicações <br />
                    de software interface de sistema e integração e comunicação
                    de dados entre sistemas, mas minha historia nao começa
                    assim...{" "}
                  </p>
                </div>

                <div className="flex flex-row gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6
                mb-4">
                  
                  <p className="text-sm text-gray-600">
                    Sou um Profissional qualificado no desenvolvimento de
                    applicações <br />
                    de software interface de sistema e integração e comunicação
                    de dados entre sistemas, mas minha historia nao começa
                    assim...{" "}
                  </p>
                   <img src="https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg"
                  className="rounded-lg max-w-md" />
                </div>

                   <div className="flex flex-row gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6
                group hover:border-cyan-500 mb-4">
                  <img src="https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg"
                  className="rounded-lg max-w-md" />
                  <p className="text-sm text-gray-600">
                    Sou um Profissional qualificado no desenvolvimento de
                    applicações <br />
                    de software interface de sistema e integração e comunicação
                    de dados entre sistemas, mas minha historia nao começa
                    assim...{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Galeria de Projetos */}
          <section className="flex my-4 gap-4 flex-wrap max-w-lg items-center justify-center mt-6 mb-6
           max-w-[875px] mx-auto">
            <div className="max-w-[200px] bg-white/5 p-6 border border-white/10
            rounded-lg  ">

               <img src="https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg"
             className="w-md rounded-lg"/>
             <h1>Projeto x data: 2020</h1>
             <p>
              descrição curta do proejto e o motivo do projeto
             </p>
             <button className="rounded-lg px-4 py-2 bg-blue-500
             hover:bg-blue-500/50 self-center flex border border-white/10">
              Saber mais !
             </button>
             </div>

                <div className="ma[200px]wpx] bg-white/5 p-6 border border-white/10
            rounded-lg  ">

               <img src="https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg"
             className="w-md rounded-lg"/>
             <h1>Projeto x data: 2020</h1>
             <p>
              descrição curta do proejto e o motivo do projeto
             </p>
             <button className="rounded-lg px-4 py-2 bg-blue-500
             hover:bg-blue-500/50 self-center flex border border-white/10">
              Saber mais !
             </button>
             </div>

             
                <div className="w-auto bg-white/5 p-6 border border-white/10
            rounded-lg ">

               <img src="https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg"
             className="w-md rounded-lg"/>
             <h1>Projeto x data: 2020</h1>
             <p>
              descrição curta do proejto e o motivo do projeto
             </p>
             <button className="rounded-lg px-4 py-2 bg-blue-500
             hover:bg-blue-500/50 self-center flex border border-white/10">
              Saber mais !
             </button>
             </div>

             
                <div className="ma[200px]wpx] bg-white/5 p-6 border border-white/10
            rounded-lg  ">

               <img src="https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg"
             className="w-md rounded-lg"/>
             <h1>Projeto x data: 2020</h1>
             <p>
              descrição curta do proejto e o motivo do projeto
             </p>
             <button className="rounded-lg px-4 py-2 bg-blue-500
             hover:bg-blue-500/50 self-center flex border border-white/10">
              Saber mais !
             </button>
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
