// pages/labs/game.tsx
import { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"

export default function GamePage() {
  const [score, setScore] = useState(0)
  const [targetPos, setTargetPos] = useState({ x: 50, y: 50 })
  const [showTarget, setShowTarget] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30) // tempo em segundos
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (!gameOver && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((t) => t - 1)
      }, 1000)
      return () => clearInterval(interval)
    } else {
      setGameOver(true)
    }
  }, [timeLeft, gameOver])

  useEffect(() => {
    if (!gameOver) {
      const timer = setTimeout(() => {
        const x = Math.random() * 90
        const y = Math.random() * 80
        setTargetPos({ x, y })
        setShowTarget(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [score, gameOver])

  const handleClick = () => {
    setScore((s) => s + 1)
    setShowTarget(false)
  }

  return (
    <>
      <Head>
        <title>Mini Game | Labs</title>
      </Head>

      <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center relative overflow-hidden">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">🎯 Jogo de Reflexo</h1>

        <div className="mb-4">
          <p>⏱️ Tempo: {timeLeft}s</p>
          <p>💯 Pontuação: {score}</p>
        </div>

        {!gameOver ? (
          showTarget && (
            <button
              onClick={handleClick}
              className="absolute w-12 h-12 bg-[#00ffc3] rounded-full shadow-md transition duration-200 hover:scale-110"
              style={{
                top: `${targetPos.y}%`,
                left: `${targetPos.x}%`,
              }}
            />
          )
        ) : (
          <div className="text-center">
            <p className="text-lg mb-2">🏁 Fim de jogo!</p>
            <p className="text-[#00ffc3] text-2xl font-bold">Seu Score: {score}</p>
          </div>
        )}

        <Link href="/labs" className="mt-10 text-[#00ffc3] hover:underline">
          ← Voltar ao Labs
        </Link>
      </main>
    </>
  )
}
