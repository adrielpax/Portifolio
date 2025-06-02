import BootSequence from "@/src/components/common/bootSequence";
import LoadingScreen from "@/src/components/common/LoadScreen";
import AboutSection from "@/src/components/layout/AboutSection";
import ContactSection from "@/src/components/layout/ContactSection";
import MainCard from "@/src/components/layout/MainCard";
import ProjectsSection from "@/src/components/layout/ProjectsSection";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [bootDone, setBootDone] = useState(false);

  if (!bootDone) {
    return <BootSequence onFinish={() => setBootDone(true)} />;
  }

  return (
    <>
      <Head>
        <title>Adriel Lucas | Desenvolvedor Full Stack</title>
        <meta
          name="description"
          content="Portfólio pessoal de Adriel Lucas — Desenvolvedor Full Stack especializado em interfaces modernas, automação e soluções digitais."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative min-h-screen flex flex-col justify-between">
        <LoadingScreen />

        {/* Background */}
        <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-[0.6]"
          style={{
            backgroundImage: "url('/images/bg.png')",
            backgroundColor: "#0a0a0a",
          }}
        />

        <div className="relative z-10 text-white w-full">
          
          {/* Header simples */}
          <header className="w-full text-center py-6">
            <h1 className="w-full text-center py-4 text-sm text-zinc-500">Portfólio</h1>
          </header>

          {/* Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-x-2 gap-y-8 lg:px-32 py-16"
>
            <div className="flex flex-col items-center justify-start gap-6">
              <MainCard />
              <ProjectsSection />
            </div>
            <div className="flex flex-col items-center justify-start gap-6">
              <AboutSection />
              <ContactSection />
            </div>
          </section>

          {/* Rodapé */}
          <footer className="w-full text-center py-4 text-sm text-zinc-500">
            Desenvolvido por AdrielDev
          </footer>

        </div>
      </main>
    </>
  );
}
