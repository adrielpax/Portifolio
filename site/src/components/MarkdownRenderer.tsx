"use client";

import React from "react";

interface MarkdownRendererProps {
  content: string;
  data?: Record<string, any> | null;
}

export default function MarkdownRenderer({
  content,
  data,
}: MarkdownRendererProps) {
  return (
    <article>
      {data && data.title && <h1>{data.title}</h1>}
      {/* Renderização simples do conteúdo de markdown sem depender de biblioteca externa */}
      <div className="whitespace-pre-wrap leading-relaxed">{content}</div>
    </article>
  );
}
