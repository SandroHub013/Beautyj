"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    if (!showSplash) return
    const timeout = setTimeout(() => setShowSplash(false), 2000)
    return () => clearTimeout(timeout)
  }, [showSplash])

  if (showSplash) {
    return (
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-all duration-700 animate-fadeIn"
        onClick={() => setShowSplash(false)}
        onTouchStart={() => setShowSplash(false)}
        style={{ cursor: 'pointer' }}
      >
        <span className="text-4xl md:text-5xl font-bold text-gold-500 animate-pulse drop-shadow-lg mb-4 select-none">
          Benvenuti
        </span>
        <span className="text-lg md:text-2xl text-gold-300 animate-fadeIn delay-300 select-none">
          Grazie per essere qui.
        </span>
        <span className="mt-8 text-neutral-400 text-sm animate-fadeIn delay-500 select-none">Tocca o clicca per continuare</span>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-neutral-950 pt-24 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center select-none">
        <div className="transition-all duration-300 rounded-2xl shadow-2xl hover:shadow-[0_0_60px_20px_rgba(229,194,29,0.5)] hover:scale-105 group">
          <Image
            src="/Cattura.PNG"
            alt="Logo Beauty J"
            width={400}
            height={300}
            className="w-full max-w-md h-auto rounded-xl group-hover:drop-shadow-[0_0_40px_rgba(229,194,29,0.7)] group-hover:brightness-110 transition-all duration-300"
            priority
          />
        </div>
      </div>
    </main>
  )
}
