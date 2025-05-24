import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contatti() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-24">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">Contatti</h1>
          <p className="text-neutral-400 text-lg">Come raggiungerci e quando siamo aperti</p>
        </header>

        <div className="bg-neutral-900 rounded-xl shadow-lg p-6 mb-8 border border-gold-500/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-gold-500 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-neutral-50">Indirizzo</h3>
                  <p className="text-neutral-400">Via Antonio Gramsci 302/F, Castel Maggiore 40013 (BO)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-gold-500 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-neutral-50">Telefono</h3>
                  <p className="text-neutral-400">+39 351 49 35 701</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-gold-500 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-neutral-50">Email</h3>
                  <p className="text-neutral-400">vitalejessica97@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-gold-500 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-neutral-50">Orari di Apertura</h3>
                  <div className="text-neutral-400 space-y-1">
                    <p>Lunedì: 13:00 - 20:00</p>
                    <p>Martedì - Venerdì: 9:30 - 19:00</p>
                    <p>Sabato: 9:00 - 14:00</p>
                    <p>Domenica: Su richiesta</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="icon" className="rounded-full border-gold-500/30 hover:bg-gold-500/20">
                  <a href="https://instagram.com/bj___jessicavitale" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5 text-gold-500" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-md border border-gold-500/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.1234567890123!2d11.3612345!3d44.5778901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4b7c8c8c8c8%3A0x1234567890abcdef!2sVia%20Antonio%20Gramsci%2C%20302%2Ff%2C%2040013%20Castel%20Maggiore%20BO!5e0!3m2!1sit!2sit!4v1234567890!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 