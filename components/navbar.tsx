"use client";
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const CHI_SIAMO_ON = false;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/90 backdrop-blur-sm border-b border-gold-500/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo-Beauty-J-def.svg"
            alt="Beauty J Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          {/* Navigation links - ora condizionali */}
          <nav className="flex items-center gap-4 md:gap-6">
            {CHI_SIAMO_ON && (
              <Link href="/chi-siamo" className="text-sm md:text-base text-neutral-700 dark:text-neutral-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300">
                Chi Siamo
              </Link>
            )}
            <Link href="/trattamenti" className="text-sm md:text-base text-neutral-700 dark:text-neutral-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300">
              Trattamenti
            </Link>
            <Link href="/recensioni" className="text-sm md:text-base text-neutral-700 dark:text-neutral-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300">
              Recensioni
            </Link>
            <Link href="/contatti" className="text-sm md:text-base text-neutral-700 dark:text-neutral-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300">
              Contatti
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 