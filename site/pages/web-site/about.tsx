import React from "react";
import {
  ButtonComponent,
  PersonalCard,
} from "../../src/components/utilsComponents";
import ContactSection from "../../src/components/sections/contactSection";
import { fetcher } from "../../src/lib/api";
import Head from "next/head";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <title>Sobre a Square Oden</title>
        <meta name="author" content="Square Oden | Soluções em Tecnologia" />
        <meta
          name="keywords"
          content="Sobre Square Oden, Desenvolvimento Web, 
          Desenvolvedor Full-Stack, Sites, Serviços Web, Serviços de desenvolvimento, 
          Square Oden, Parceira Digital, Presença Online, Estratégias Personalizadas, 
          Inovação Digital, Compromisso com a Excelência, História da Empresa, Equipe Criativa."
        />
        <meta
          name="description"
          content="Descubra a história e a missão da Square Oden, 
          sua parceira digital dedicada a impulsionar negócios no mundo online. 
          Conheça nossa abordagem personalizada, compromisso com a excelência e como nossa equipe criativa transforma ideias em sucesso digital."
        />
      </Head>
      <div className="h-auto">
        <div className="flex items-start justify-center mx-auto gap-[136px] self-stretch md:p-10 bg-white mt-20">
          <div
            className="flex md:items-start justify-center mx-auto md:gap-8 flex-[1_0_0] md:rounded-2xl p-[72px]
        bg-gradient-to-b from-[#0047FF] to-[#00F0FF] flex-col lg:flex-row
        text-white items-start gap-10 self-stretch px-6 py-12"
          >
            {/* <PersonalCard /> */}
            <div className="flex flex-col items-start w-auto md:w-[592px] p-6 gap-7 md:gap-8 self-stretch">
              <div className="flex items-center gap-6  text-[#654AEE]">
                {/* <FaPython className="w-5 h-5" />
              <FaReact className="w-5 h-5" />
              <SiJavascript className="w-5 h-5" />
              <FaNodeJs className="w-5 h-5" />
              <SiTailwindcss className="w-5 h-5" /> */}
              </div>
              <h1 className="text-[#7DFFAF] text-regular text-base">
                Sobre mim
              </h1>
              <h2 className="font-semibold text-4xl font-sans">
                Sua Historia começa com quem faz Historia !
              </h2>
              <p className="font-regular font-medium font-sans text-justify">
                Com a Digital Boost, você poderá alcançar seu público-alvo de
                forma eficiente e direcionada. Nossas soluções de marketing
                digital são personalizadas para atender às necessidades
                específicas do seu negócio.
              </p>
              <ButtonComponent
                className="bg-[#121212] rounded-lg z-20 
                shadow-none py-4 px-10 text-base hover:bg-white hover:text-cyan-600
              text-white active:bg-gray-400 scale-90
                border-4 border-transparent active:border-gray-600 transition-all"
              >
                {/* <FaLongArrowAltRight /> */}
              </ButtonComponent>
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const contentResponse = await fetcher(
//     `${process.env.NEXT_PUBLIC_STRAPI_URL}/aboutsection`
//   );
//   return {
//     props: {
//       data: contentResponse,
//     },
//   };
// }
