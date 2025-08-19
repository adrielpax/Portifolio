import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const NUM_NODES = 12;
const REPULSION_RADIUS = 100; // pixels

export default function NeuralBackground() {
  const [nodes, setNodes] = useState(
    Array.from({ length: NUM_NODES }, () => ({
      x: useMotionValue(Math.random() * 100),
      y: useMotionValue(Math.random() * 100),
    }))
  );

  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    nodes.forEach((node) => {
      const animateX = animate(
        node.x,
        [node.x.get(), node.x.get() + (Math.random() * 15 - 7.5)],
        {
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }
      );
      const animateY = animate(
        node.y,
        [node.y.get(), node.y.get() + (Math.random() * 15 - 7.5)],
        {
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }
      );
      return () => {
        animateX.stop();
        animateY.stop();
      };
    });
  }, [nodes]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg className="w-full h-full absolute pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {nodes.map((start, i) => {
          const end = nodes[(i + 2) % nodes.length]; // ligações não lineares
          const x1 = start.x.get();
          const y1 = start.y.get();
          const x2 = end.x.get();
          const y2 = end.y.get();

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
        const top = useTransform(node.y, (v) => `${v}%`);
        const left = useTransform(node.x, (v) => `${v}%`);

        // Distância do mouse
        const dx = (mousePos.x / window.innerWidth) * 100 - node.x.get();
        const dy = (mousePos.y / window.innerHeight) * 100 - node.y.get();
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Se estiver perto, aplicar repulsão
        if (distance < REPULSION_RADIUS / 10) {
          node.x.set(node.x.get() - dx * 0.05);
          node.y.set(node.y.get() - dy * 0.05);
        }

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
