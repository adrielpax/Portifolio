"use client";

import React, { useState } from "react";
import MarkdownRenderer from "@/src/components/MarkdownRenderer";

import { HistoryItem } from "@/src/types";

interface HistoryViewerProps {
  items: HistoryItem[];
}

const HistoryViewer: React.FC<HistoryViewerProps> = ({ items }) => {
  const [index, setIndex] = useState<number>(0);

  if (!items || items.length === 0) {
    return (
      <div className="w-full max-w-[875px]">
        <div className="flex flex-row bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
             Minha História
          </h3>
          <p className="text-gray-400 text-sm">Nenhuma história encontrada.</p>
        </div>
      </div>
    );
  }

  const current = items[index];

  return (
    <div className="w-full max-w-[875px]">
      <div className="flex flex-col md:flex-row bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
           Minha História
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="px-3 py-1 bg-black/20 rounded disabled:opacity-40"
            >
     
            </button>
            <span className="text-sm text-gray-300">{index + 1} / {items.length}</span>
            <button
              onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
              disabled={index === items.length - 1}
              className="px-3 py-1 bg-black/20 rounded disabled:opacity-40"
            >
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-2">
          {items.map((it, idx) => (
            <button
              key={it.slug}
              onClick={() => setIndex(idx)}
              className={`text-left px-3 py-2 rounded hover:bg-white/5 transition-colors ${idx === index ? 'bg-white/5' : ''}`}
            >
              <div className="text-sm text-gray-200">{it.title || it.slug}</div>
              {it.excerpt && <div className="text-xs text-gray-400">{it.excerpt}</div>}
            </button>
          ))}
        </div>

        <div className="mb-4">
          {current.title && <h4 className="text-lg font-semibold text-white mb-2">{current.title}</h4>}
          {current.excerpt && <p className="text-sm text-gray-300 mb-4">{current.excerpt}</p>}
        </div>

        <MarkdownRenderer content={current.content} data={{ title: current.title }} />
      </div>
    </div>
  );
};

export default HistoryViewer;
