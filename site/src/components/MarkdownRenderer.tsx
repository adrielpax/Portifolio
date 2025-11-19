"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownRendererProps {
  content: string;
  data?: Record<string, any> | null;
}

export default function MarkdownRenderer({ content, data }: MarkdownRendererProps) {
  return (
    <article>
      {data && data.title && <h1>{data.title}</h1>}
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
