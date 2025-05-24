"use client";
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

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
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/chi-siamo" className="text-neutral-700 dark:text-neutral-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300">
              Chi Siamo
            </Link>
            <Link href="/trattamenti" className="text-neutral-700 dark:text-neutral-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300">
              Trattamenti
            </Link>
            <Link href="/recensioni" className="text-neutral-700 dark:text-neutral-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300">
              Recensioni
            </Link>
            <Link href="/contatti" className="text-neutral-700 dark:text-neutral-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300">
              Contatti
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-neutral-950 font-semibold 
                                   hover:from-gold-500 hover:via-gold-600 hover:to-gold-500 
                                   transition-all duration-300 shadow-lg hover:shadow-xl
                                   border border-gold-500/30">
            <Link href="/prenotazioni">Prenota Ora</Link>
          </Button>
          {/* Mobile hamburger */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Apri menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
      {/* Mobile menu */}
      <nav className={`fixed top-0 right-0 z-50 w-64 h-full bg-white dark:bg-neutral-950 shadow-lg transform transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-6 gap-6">
          <div className="flex items-center justify-between mb-8">
            <Image src="/Logo-Beauty-J-def.svg" alt="Beauty J Logo" width={80} height={30} className="h-8 w-auto" />
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Chiudi menu" className="text-neutral-700 dark:text-neutral-200 hover:text-gold-500 dark:hover:text-gold-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>
          <Link href="/chi-siamo" className="py-2 text-lg text-neutral-700 dark:text-neutral-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
            Chi Siamo
          </Link>
          <Link href="/trattamenti" className="py-2 text-lg text-neutral-700 dark:text-neutral-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
            Trattamenti
          </Link>
          <Link href="/recensioni" className="py-2 text-lg text-neutral-700 dark:text-neutral-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
            Recensioni
          </Link>
          <Link href="/contatti" className="py-2 text-lg text-neutral-700 dark:text-neutral-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
            Contatti
          </Link>
          <Button asChild className="mt-6 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-neutral-950 font-semibold 
                                   hover:from-gold-500 hover:via-gold-600 hover:to-gold-500 
                                   transition-all duration-300 shadow-lg hover:shadow-xl
                                   border border-gold-500/30">
            <Link href="/prenotazioni" onClick={() => setMobileMenuOpen(false)}>Prenota Ora</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
} 