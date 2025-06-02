// components/BootSequence.tsx
"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const messages = [
  "Initializing system...",
  "Loading visual interface...",
  "Syncing portfolio data...",
  "Boot complete. Welcome, Commander.",
]

export default function BootSequence({ onFinish }: { onFinish: () => void }) {
  const [currentLine, setCurrentLine] = useState(0)

  useEffect(() => {
    if (currentLine < messages.length) {
      const timeout = setTimeout(() => setCurrentLine(currentLine + 1), 1000)
      return () => clearTimeout(timeout)
    } else {
      const finishTimeout = setTimeout(onFinish, 1500)
      return () => clearTimeout(finishTimeout)
    }
  }, [currentLine])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-[#00ffc3] font-mono text-sm sm:text-lg px-4">
      <div className="w-full max-w-xl">
        {messages.slice(0, currentLine).map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-1"
          >
            <span className="text-[#00ffc3]">&gt; </span>
            {line}
          </motion.p>
        ))}
        {currentLine < messages.length && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
          >
            <span className="text-[#00ffc3]">&gt; </span>
            <span className="opacity-50">█</span>
          </motion.p>
        )}
      </div>
    </div>
  )
}
