import React from "react";
import icons from "../utils/icons/icons";

export const useHomePopulation = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const projects = [
    {
      id: 1,
      title: "YourFinance",
      subtitle: "Create With React.JS is a Simple Tecnical Project",
      image: "/imgs/yourfinance.gif",
      link: "https://yourfinance.netlify.app/",
    },
    {
      id: 2,
      title: "Elluxus",
      subtitle: "Create With Next.JS is a Freelancer real project",
      image: "/imgs/elluxus.gif",
      link: "https://elluxus.com/",
    },
    {
      id: 3,
      title: "Ecommerce",
      subtitle: "em breve",
      image: "",
      link: "",
    },
    {
      id: 4,
      title: "FullStack Dashboard",
      subtitle: "em Breve",
      image: "",
      link: "",
    },
    // Adicione mais objetos de projeto conforme necessário
  ];

  const textProps = [
    {
      id: 1,
      title: "Destaque de Projetos",
      subTitle:
        "Mostrando ao mundo talento e criatividade através dos projetos incríveis que desenvolvi, Deixando uma marca duradoura com soluções inovadoras e designs impressionantes.",
    },
    {
      id: 2,
      title: "Stacks e Habilidades",
      subTitle:
        "Stacks construidas ao longo do tempo, com melhorias contantes e objetivos diferentes",
    },
  ];

  const featuresData = [
    {
      id: 1,
      icon: icons.mongo,
      title: "M.E.R.N - STACK",
      colorIcon: "text-green-500",
      description:
        "Mongo DB, Express, React and Node.js Tecnologias escalaveis e modernas para sistemas web complexos, trazendo o que há de poder em javascript.",
    },
    {
      id: 2,
      icon: icons.next,
      title: "J.A.M - STACK",
      colorIcon: "text-black",
      description:
        "Javascript, Apis, Markup, usando tecnologias como Next strapi e git desenvolvendo soluções seguras e escalavais para Toda a Web, uma stack que traz versatilidade e economia.",
    },
    {
      id: 3,
      icon: icons.computer,
      title: "FULL WEB - STACK",
      colorIcon: "text-blue-800",
      description:
        "Uma analise profunda desde a abstração a parte tecnica de um projeto trazendo soluções atuais e praticas para o negocio.",
    },
    {
      id: 4,
      icon: icons.eua,
      title: "Ingles",
      colorIcon: "text-red-800",
      description:
        "Devido ao contexto , o ingles e fundamental no Desenvolvimento e entendimento de novas tecnologias, se tornando umas das minhas principais habilidades de comunicação.",
    },
    {
      id: 5,
      icon: icons.design,
      title: "Design",
      colorIcon: "text-pink-800",
      description:
        'Uma habilidade que muda a percepção das pessoas sobre algo,"Branding não e so deixar as coisas bonitinhas e a arte de fazer essas coisas se venderem por si so"',
    },
    {
      id: 6,
      icon: icons.money,
      title: "Contabilidade e Finanças",
      colorIcon: "text-green-800",
      description:
        "Uma habilidade desenvolvida para entender o peso e o valor de tudo, como tempo e informação são a verdadeira moeda desse jogo",
    },
    {
      id: 7,
      icon: icons.learn,
      title: "Auto De Data",
      colorIcon: "text-purple-800",
      description:
        "Uma habilidade desenvolvida na nescessidade de construir soluções especificas, essa habilidade me trouxe empenho nescessario pra construção de habilidades solidas",
    },
  ];

  return {
    isLoading,
    projects,
    textProps,
    featuresData,
  };
};
