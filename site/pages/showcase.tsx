import React from 'react';
import Link from 'next/link';

export default function Showcase() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-4">Showcase</h2>
      <p className="text-white/80 mb-6">Uma página simples para destacar projetos, estudos de caso e demos interativas. Não altera a página inicial.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="p-4 bg-white/5 border border-white/5 rounded-lg">
          <h3 className="font-medium">Estudo de Caso: Sistema de Contatos</h3>
          <p className="text-sm text-white/70">Persistência com SQLite (com fallback JSON) e integração Webhook para n8n/Make.</p>
          <Link href="/projects" className="text-cyan-400 text-sm mt-3 inline-block">Ver projetos</Link>
        </article>

        <article className="p-4 bg-white/5 border border-white/5 rounded-lg">
          <h3 className="font-medium">Demo: Histórico</h3>
          <p className="text-sm text-white/70">Listagem de markdowns de "Minha História" via leitura server-side.</p>
          <Link href="/history" className="text-cyan-400 text-sm mt-3 inline-block">Ver histórico</Link>
        </article>

        <article className="p-4 bg-white/5 border border-white/5 rounded-lg">
          <h3 className="font-medium">Integração Sanity (Proxy)</h3>
          <p className="text-sm text-white/70">Hook mockável e proxy server-side para proteger tokens.</p>
        </article>

        <article className="p-4 bg-white/5 border border-white/5 rounded-lg">
          <h3 className="font-medium">Ferramentas</h3>
          <p className="text-sm text-white/70">Coleção de utilitários e scripts usados no portfólio.</p>
        </article>
      </div>
    </div>
  );
}
