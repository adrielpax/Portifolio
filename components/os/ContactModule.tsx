"use client";

import { useState } from "react";
import { ExternalLink, SendHorizontal } from "lucide-react";

import Magnetic from "./Magnetic";

const TYPEBOT_URL = "https://typebot.co/my-typebot-75c4uvl";

type Estado = "idle" | "enviando" | "entregue" | "erro";

const inputCls =
  "w-full rounded-xl border border-hud-line bg-white/5 px-4 py-3 text-sm text-hud-text " +
  "placeholder:text-hud-muted/60 outline-none transition-colors focus:border-hud-accent/60";

/**
 * Módulo de contato do sistema: a mensagem é transmitida para /api/mensagem,
 * que notifica o Adriel em tempo real. Os estados são exibidos como um
 * console de transmissão; se o canal cair, o chat vira o caminho.
 */
export default function ContactModule() {
  const [estado, setEstado] = useState<Estado>("idle");

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const dados = Object.fromEntries(new FormData(form).entries());
    setEstado("enviando");
    try {
      const res = await fetch("/api/mensagem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setEstado("entregue");
    } catch {
      setEstado("erro");
    }
  }

  return (
    <section
      id="contato"
      className="hud-panel hud-brackets p-6 text-center md:p-12"
    >
      <span className="hud-label">MSG · Módulo de contato</span>
      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-hud-text md:text-3xl">
        Vamos tirar seu sistema do papel?
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-hud-muted">
        Me conte o problema que você precisa resolver — eu respondo com um
        plano de ataque, não com um orçamento genérico.
      </p>

      <form
        onSubmit={enviar}
        className="mx-auto mt-7 grid max-w-xl gap-3 text-left sm:grid-cols-2"
      >
        <input
          name="nome"
          required
          maxLength={80}
          placeholder="Seu nome"
          aria-label="Seu nome"
          className={inputCls}
        />
        <input
          name="contato"
          required
          maxLength={120}
          placeholder="E-mail ou WhatsApp"
          aria-label="E-mail ou WhatsApp"
          className={inputCls}
        />
        <textarea
          name="mensagem"
          required
          maxLength={2000}
          rows={4}
          placeholder="Qual problema você quer resolver?"
          aria-label="Mensagem"
          className={`${inputCls} sm:col-span-2 resize-y`}
        />

        <div className="flex flex-col items-center gap-3 sm:col-span-2">
          <Magnetic className="w-full sm:w-auto">
            <button
              type="submit"
              disabled={estado === "enviando"}
              className="btn-primary w-full px-8 py-3.5 font-display text-sm font-semibold disabled:opacity-60 sm:w-auto"
            >
              {estado === "enviando" ? (
                "Transmitindo…"
              ) : (
                <>
                  Enviar mensagem <SendHorizontal className="h-4 w-4" />
                </>
              )}
            </button>
          </Magnetic>

          {estado === "entregue" && (
            <p
              role="status"
              className="font-mono text-xs text-emerald-400"
            >
              [MSG] entregue — respondo no contato informado.
            </p>
          )}
          {estado === "erro" && (
            <p role="status" className="font-mono text-xs text-amber-400">
              [MSG] canal indisponível no momento — use o chat abaixo.
            </p>
          )}
        </div>
      </form>

      <a
        href={TYPEBOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost mt-5 px-5 py-2.5 font-display text-xs font-medium"
      >
        Prefere conversar? Abrir o chat <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </section>
  );
}
