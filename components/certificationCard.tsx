import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { resolveImage } from "@/lib/sanity/data";
import type { Certification } from "@/lib/sanity/types";

/** Conteúdo padrão exibido enquanto não há certificações no Sanity. */
const defaultCertifications: Certification[] = [
  {
    _id: "default-next",
    title: "Certificado pela própria Vercel em NEXT JS App Router Fundamentals",
    issuer: "Vercel",
    logo: "/images/formacao/vercel.png",
    credentialUrl: undefined,
  },
  {
    _id: "default-react",
    title: "Certificado pela própria Vercel em React Fundamentals",
    issuer: "Vercel",
    logo: "/images/formacao/vercel.png",
    credentialUrl: undefined,
  },
];

export default function CertificationCards({
  certifications,
}: {
  certifications?: Certification[];
}) {
  const items =
    certifications && certifications.length > 0
      ? certifications
      : defaultCertifications;

  return (
    <div className="flex w-full flex-col gap-2">
      {items.map((card) => {
        const logo = resolveImage(card.logo, 140);
        return (
          <div
            key={card._id}
            className="group flex items-start gap-3 rounded-2xl border border-zinc-200/80 bg-white
            p-3 transition-colors hover:border-zinc-300"
          >
            {logo && (
              <Image
                src={logo}
                alt={card.title}
                width={40}
                height={40}
                unoptimized
                className="h-10 w-10 shrink-0 rounded-xl object-cover ring-1 ring-zinc-100"
              />
            )}

            <div className="min-w-0 flex-1">
              {card.issuer && (
                <p className="text-[11px] font-medium text-amber-600">
                  {card.issuer}
                </p>
              )}
              <h3 className="text-sm font-semibold leading-snug text-zinc-900">
                {card.title}
              </h3>

              {card.credentialUrl ? (
                <Link
                  href={card.credentialUrl}
                  target="_blank"
                  className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-amber-600
                  transition-colors hover:text-amber-700"
                >
                  <BadgeCheck className="h-3.5 w-3.5" /> Ver certificado
                </Link>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className="mt-1.5 inline-flex cursor-pointer items-center gap-1 text-xs font-medium
                      text-zinc-500 transition-colors hover:text-zinc-800"
                    >
                      <BadgeCheck className="h-3.5 w-3.5" /> Ver certificado
                    </button>
                  </DialogTrigger>
                  <DialogContent showCloseButton={false}>
                    <DialogHeader className="gap-6">
                      <DialogTitle>{card.title}</DialogTitle>
                      <DialogDescription>
                        <span className="flex items-center justify-center rounded-xl">
                          Estamos trabalhando para expor as credenciais, houve
                          uma atualização no website da vercel, volte depois..
                        </span>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
