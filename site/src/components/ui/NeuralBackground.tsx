import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NUM_NODES = 12;
const REPULSION_RADIUS = 100; // pixels

interface NodePoint {
  x: number; // percentual (0 - 100)
  y: number; // percentual (0 - 100)
}

export default function NeuralBackground() {
  const [nodes, setNodes] = useState<NodePoint[]>(
    () =>
      Array.from({ length: NUM_NODES }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
      })) as NodePoint[]
  );

  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animação simples dos nós com leve movimento + repulsão pelo mouse
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes((prev) =>
        prev.map((node) => {
          let x = node.x + (Math.random() * 4 - 2);
          let y = node.y + (Math.random() * 4 - 2);

          const mouseXPercent = (mousePos.x / window.innerWidth) * 100;
          const mouseYPercent = (mousePos.y / window.innerHeight) * 100;
          const dx = mouseXPercent - x;
          const dy = mouseYPercent - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < REPULSION_RADIUS / 10 && distance > 0) {
            const factor = 0.5;
            x -= (dx / distance) * factor;
            y -= (dy / distance) * factor;
          }

          // Limitar aos bounds 0-100
          x = Math.max(0, Math.min(100, x));
          y = Math.max(0, Math.min(100, y));

          return { x, y };
        })
      );
    }, 80);

    return () => clearInterval(interval);
  }, [mousePos]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="w-full h-full absolute pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {nodes.map((start, i) => {
          const end = nodes[(i + 2) % nodes.length]; // ligações não lineares
          const x1 = start.x;
          const y1 = start.y;
          const x2 = end.x;
          const y2 = end.y;

          // Curva Bezier com controle no meio
          const cx = (x1 + x2) / 2 + Math.random() * 10 - 5;
          const cy = (y1 + y2) / 2 + Math.random() * 10 - 5;

          return (
            <path
              key={i}
              d={`M${x1}%,${y1}% Q${cx}%,${cy}% ${x2}%,${y2}%`}
              stroke="url(#gradient)"
              strokeWidth="1"
              fill="none"
            />
          );
        })}
      </svg>

      {nodes.map((node, i) => {
        const top = `${node.y}%`;
        const left = `${node.x}%`;

        return (
          <motion.div
            key={i}
            className="w-2.5 h-2.5 bg-cyan-400 rounded-sm absolute"
            style={{ top, left }}
            animate={{
              rotate: [0, 20, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        );
      })}
    </div>
  );
}
