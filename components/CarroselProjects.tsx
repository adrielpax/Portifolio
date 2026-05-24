'use client'
import React, { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";
import Image from "next/image";
import ReadMoreButton from "./readmore";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";

interface Projeto {
  featured: string;
  title: string;
  description: string;
  link: string;
  page: string;
  image: string;
}

const projetos: Projeto[] = [
  {
    featured: "Projeto Online",
    title: "E-commerce Precinho Rei",
    description:
      "Criação de uma plataforma de e-commerce robusta, 'Precinho Rei', desenvolvida em Next.js. Este projeto foi concebido com a inspiração nas melhores interfaces de usuário de grandes varejistas como Amazon, Shopee e Mercado Pago, buscando oferecer uma experiência de compra intuitiva e eficiente. Futuramente, 'Precinho Rei' será expandido para um modelo white-label, permitindo sua utilização como base para outras lojas virtuais.",
    link: "https://precinhorei.vercel.app/",
    page: "",
    image: "/images/projects/precinho-rei.png",
  },
];

type CarouselStyle = "borderless" | "filled";

interface CarroselProjectsProps {
  style?: CarouselStyle;
}

function CarroselProjects({ style = "borderless" }: CarroselProjectsProps) {
  const [indice, setIndice] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [estaArrastando, setEstaArrastando] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const moverPara = (proximo: boolean) => {
    setIndice((prev) => {
      if (proximo) return prev === projetos.length - 1 ? 0 : prev + 1;
      return prev === 0 ? projetos.length - 1 : prev - 1;
    });
  };

  const iniciarArrasto = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setEstaArrastando(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const pararArrasto = () => setEstaArrastando(false);

  const movendoMouse = (e: React.MouseEvent) => {
    if (!estaArrastando || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const andar = (x - startX) * 1.2;
    containerRef.current.scrollLeft = scrollLeft - andar;
  };

  const carouselContainerClasses = style === "borderless"
    ? "relative w-full max-w-4xl mx-auto overflow-hidden border-none shadow-none bg-transparent p-0 my-12"
    : "relative w-full max-w-4xl mx-auto overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 my-12";

  const cardClasses = style === "borderless"
    ? "w-full flex-shrink-0 flex flex-col justify-start p-0 shadow-none bg-transparent border-none rounded-lg gap-6 select-none"
    : "w-full flex-shrink-0 flex flex-col justify-start p-4 shadow-md bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg gap-6 select-none";

  const navButtonClasses = style === "borderless"
    ? "absolute top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 bg-zinc-900/50 hover:bg-zinc-900 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    : "absolute top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  return (
    <div className={carouselContainerClasses}>
      <h3 className="px-3 scroll-m-20 text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 font-semibold tracking-tight">
        Principais Projetos
      </h3>
      <blockquote className="px-3 italic text-sm sm:text-base text-zinc-400 dark:text-zinc-500 mb-6">
        Alguns projetos podem estar em desenvolvimento!
      </blockquote>


        <div
          ref={containerRef}
        onMouseDown={iniciarArrasto}
        onMouseLeave={pararArrasto}
        onMouseUp={pararArrasto}
        onMouseMove={movendoMouse}
        className={`flex w-full bg-gray-100 py-4 shadow-none rounded-xl px-2 transition-transform duration-500 ease-in-out justify-between gap-6 items-start ${estaArrastando ? "cursor-grabbing" : "cursor-grab"} scrollbar-hide`}
    
          style={{
            transform: `translateX(calc(-${indice * 100}% - ${indice * 1.5}rem))`,
          }}
        >
          {projetos.map((item, index) => (
            <Card
              key={index}
              className={cardClasses }
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl pointer-events-none">
                <Image
                  src={item.image}
                  alt={item.title}
                  unoptimized
                  fill
                  className="object-cover transition-all duration-300"
                />
              </div>
              <CardHeader className="p-0 pt-2">
                <div className="flex">
                  <Badge variant={style === "borderless" ? "secondary" : "default"}>{item.featured}</Badge>
                </div>
                <CardTitle className="text-xl px-4 sm:text-2xl mt-2 text-zinc-800 dark:text-zinc-100">{item.title}</CardTitle>
                <CardDescription className="px-4 z-30 text-sm sm:text-base mt-2 text-zinc-600 dark:text-zinc-300">
                  <ReadMoreButton text={item.description} />
                </CardDescription>
              </CardHeader>
              <CardFooter className="px-4 pt-2">
                <Button asChild className="w-full hover:bg-blue-500 dark:hover:bg-blue-700 z-50 rounded-full py-3 sm:py-4 text-base sm:text-lg">
                  <Link href={item.link} target="_blank">
                    Descobrir mais
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
  
      {/* Botões de navegação lateral */}
      <button
        onClick={() => moverPara(false)}
        className={`left-2 sm:left-4 ${navButtonClasses}`}
      >
        ❮
      </button>
      <button
        onClick={() => moverPara(true)}
        className={`right-2 sm:right-4 ${navButtonClasses}`}
      >
        ❯
      </button>
    </div>
  );
}

export default CarroselProjects;
