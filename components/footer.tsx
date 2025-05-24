import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Beauty J</h3>
            <p className="text-beige-100">
              La tua bellezza, la nostra passione. Centro estetico professionale con trattamenti personalizzati.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chi-siamo" className="text-beige-100 hover:text-white transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/trattamenti" className="text-beige-100 hover:text-white transition-colors">
                  Trattamenti
                </Link>
              </li>
              <li>
                <Link href="/recensioni" className="text-beige-100 hover:text-white transition-colors">
                  Recensioni
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-beige-100 hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Trattamenti</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/trattamenti" className="text-beige-100 hover:text-white transition-colors">
                  Trattamenti Viso
                </Link>
              </li>
              <li>
                <Link href="/trattamenti" className="text-beige-100 hover:text-white transition-colors">
                  Trattamenti Corpo
                </Link>
              </li>
              <li>
                <Link href="/trattamenti" className="text-beige-100 hover:text-white transition-colors">
                  Manicure e Pedicure
                </Link>
              </li>
              <li>
                <Link href="/trattamenti" className="text-beige-100 hover:text-white transition-colors">
                  Depilazione
                </Link>
              </li>
              <li>
                <Link href="/trattamenti" className="text-beige-100 hover:text-white transition-colors">
                  Massaggi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <address className="not-italic text-beige-100 space-y-2">
              <p>Via Antonio Gramsci 302/F, Castel Maggiore 40013 (BO)</p>
              <p>+39 351 49 35 701</p>
              <p>vitalejessica97@gmail.com</p>
            </address>
            <div className="flex gap-4 mt-4">
              <Link href="https://instagram.com/bj___jessicavitale" target="_blank" rel="noopener noreferrer" className="text-beige-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-beige-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Beauty J. Tutti i diritti riservati.</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Termini e Condizioni
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 