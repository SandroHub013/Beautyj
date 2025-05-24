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
      <BookingCalendar />
    </main>
  );
} 