"use client";
import React, { useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./ui/card";
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

  const carouselContainerClasses =
    style === "borderless"
      ? "relative w-full max-w-4xl mx-auto overflow-hidden border-none shadow-none bg-transparent p-0"
      : "relative w-full max-w-4xl mx-auto overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 my-12";

  const cardClasses =
    style === "borderless"
      ? "w-full flex-shrink-0 flex flex-col justify-start p-0 shadow-none bg-transparent border-none rounded-lg gap-6 select-none"
      : "w-full flex-shrink-0 flex flex-col justify-start p-4 shadow-md bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg gap-6 select-none";

  const navButtonClasses =
    style === "borderless"
      ? "absolute top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 bg-zinc-900/50 hover:bg-zinc-900 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      : "absolute top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  return (
    <div className={carouselContainerClasses}>
      <h3 className="px-3 scroll-m-20 pb-2 text-xl text-zinc-600 font-semibold tracking-tight first:mt-0">
        Projetos Principais
      </h3>
      <blockquote className="px-3 italic text-sm text-zinc-400 mb-4">
        Alguns projetos podem conter bugs ou estar em desenvolvimento.
        <br /> ja estando em deploy.
      </blockquote>

      <div
        ref={containerRef}
        onMouseDown={iniciarArrasto}
        onMouseLeave={pararArrasto}
        onMouseUp={pararArrasto}
        onMouseMove={movendoMouse}
        className={`flex w-full px-6 py-6 border-none`}
        style={{
          transform: `translateX(calc(-${indice * 100}% - ${indice * 1.5}rem))`,
        }}
      >
        {projetos.map((item, index) => (
          <Card
            key={index}
            className={"w-full flex flex-col justify-start py-3 border-none"}
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
            <div className="bg-gray-200 rounded-lg py-4 mx-2">
              <CardHeader className="p-0 pt-2">
                <div className="flex">
                  {/* <Badge
                  variant={style === "borderless" ? "secondary" : "default"}
                >
                  {item.featured}
                  </Badge> */}
                </div>
                <CardTitle className="text-sm px-4 mt-0 text-gray-600">
                  {item.title}
                </CardTitle>
                <CardDescription className="px-4 z-30 text-xs mt-0">
                  <ReadMoreButton text={item.description} />
                </CardDescription>
              </CardHeader>
              <CardFooter className="px-4 pt-2 flex justify-center">
                <Button
                  asChild
                  className=" hover:bg-blue-500 bg-white text-black hover:text-white 
                z-50 rounded-md w-full py-3 px-6 text-sm"
                >
                  <Link href={item.link} target="_blank">
                    Ver deploy
                  </Link>
                </Button>
              </CardFooter>
            </div>
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
