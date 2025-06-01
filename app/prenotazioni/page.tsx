import { Metadata } from "next"
import Script from "next/script"
import { BookingCalendar } from '@/components/booking-calendar';

export const metadata: Metadata = {
  title: "Prenotazioni - Beauty J",
  description: "Prenota il tuo trattamento presso Beauty J",
}

export default function PrenotazioniPage() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-24">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">Prenotazioni</h1>
          <p className="text-neutral-400 text-lg">La funzione di prenotazione online è temporaneamente disattivata.</p>
        </header>
      </div>
    </main>
  );
} 