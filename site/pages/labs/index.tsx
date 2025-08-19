// pages/labs.tsx
import Link from "next/link"
import { motion } from "framer-motion"
import Head from "next/head"

export default function Labs() {
  return (
    <>
      <Head>
        <title>Labs | Seu Nome</title>
      </Head>

      <main className="relative min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center p-6">
        {/* Background opcional escuro ou animado aqui */}
        <motion.h1
          className="text-2xl sm:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🧪 Modo Labs Ativado
        </motion.h1>

        <motion.p
          className="text-center max-w-xl text-zinc-400 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Esta é uma zona experimental do meu portfólio. Aqui você pode interagir com ideias em desenvolvimento — como um mini game, um chatbot ou outras experiências futuristas.
        </motion.p>

        {/* Botões ou cards de acesso aos labs */}
        <div className="grid gap-4 sm:grid-cols-2 w-full max-w-md">
          <Link href="/labs/chat">
            <motion.div
              className="bg-zinc-800 hover:bg-zinc-700 transition rounded-xl p-6 text-center cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              🤖 Chat Interativo
            </motion.div>
          </Link>
          <Link href="/labs/game">
            <motion.div
              className="bg-zinc-800 hover:bg-zinc-700 transition rounded-xl p-6 text-center cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              🎮 Mini Game
            </motion.div>
          </Link>
        </div>

        <Link href="/" className="mt-10 text-[#00ffc3] hover:underline">
          ← Voltar ao portfólio
        </Link>
      </main>
    </>
  )
}
