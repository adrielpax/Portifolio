"use client";

import React, { useState } from "react";

export interface HistoryItem {
  title: string;
  summary: string;
  date?: string;
  image?: string;
}

interface CardContentsProps {
  items: HistoryItem[];
}

const CardContents: React.FC<CardContentsProps> = ({ items }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const isHighlighted = (idx: number) => {
    if (hovered === null) return false;
    return idx === hovered || idx === hovered - 1 || idx === hovered + 1;
  };

  return (
    <div className="relative">
      {/* vertical connecting line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2" />

      <div className="flex flex-col gap-8">
        {items.map((item, idx) => {
          const left = idx % 2 === 0;
          const highlighted = isHighlighted(idx);

          return (
            <div key={idx} className="relative">
              <div className={`md:flex md:items-center md:justify-between md:gap-6 ${left ? 'md:flex-row-reverse' : ''}`}> 
                <div className="md:w-1/2"></div>

                <div className="md:w-1/2 flex items-center justify-center">
                  <div
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    className={`w-full max-w-md p-6 rounded-xl shadow-md transition-colors duration-200 border ${highlighted ? 'border-cyan-400 bg-white/5' : 'border-white/10 bg-white/3'} `}
                  >
                    {/* Image area: fixed height box to preserve layout */}
                    <div className="w-full h-40 mb-3 rounded-md overflow-hidden bg-gradient-to-r from-white/5 to-white/3 flex items-center justify-center">
                      {item.image ? (
                        <img src={item.image} alt={item.title || 'Imagem'} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-white/40 text-sm">Imagem não disponível</div>
                      )}
                    </div>

                    <h3 className={`text-lg font-semibold ${highlighted ? 'text-cyan-400' : 'text-white'}`}>{item.title}</h3>
                    {item.date && <div className="text-xs text-white/50 mb-2">{item.date}</div>}
                    <p className={`text-sm ${highlighted ? 'text-white/90' : 'text-white/80'}`}>{item.summary}</p>
                  </div>
                </div>
              </div>

              {/* center dot and connector */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-6 md:top-8">
                <div className={`w-4 h-4 rounded-full transition-colors ${highlighted ? 'bg-cyan-400' : 'bg-white/10'}`}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardContents;
