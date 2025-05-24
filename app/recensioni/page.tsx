import { Testimonials } from "@/components/testimonials"

export default function Recensioni() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-24">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">Recensioni</h1>
          <p className="text-neutral-400 text-lg">Cosa dicono i nostri clienti</p>
        </header>

        <div className="bg-neutral-900 rounded-xl shadow-lg p-6 mb-8 border border-gold-500/30">
          <Testimonials />
        </div>
      </div>
    </main>
  )
} 