import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiTypescript } from "react-icons/si";

interface TechIcon {
  name: string;
  icon: JSX.Element;
}

const techStack: TechIcon[] = [
  { name: "JavaScript", icon: <SiJavascript size={32} /> },
  { name: "React", icon: <SiReact size={32} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
  { name: "Node.js", icon: <SiNodedotjs size={32} /> },
  { name: "TypeScript", icon: <SiTypescript size={32} /> },
];

export default function ListTechIcons() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-5 gap-4 justify-items-center p-4 sm:grid-cols-6 md:grid-cols-8">
      {techStack.map((tech) => (
        <div
          key={tech.name}
          className="relative group cursor-pointer"
          onMouseEnter={() => setHovered(tech.name)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setHovered(tech.name)}
          aria-label={tech.name}
        >
          {tech.icon}

          <AnimatePresence>
            {hovered === tech.name && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: -10 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute -top-6 left-0 
                -translate-x-1/2 text-xs truncate 
                bg-gray-800 text-white px-2 py-1 rounded shadow-md z-10"
              >
                {tech.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
