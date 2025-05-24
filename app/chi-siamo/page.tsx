import Image from "next/image"

export default function ChiSiamo() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-24">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">Chi Siamo</h1>
          <p className="text-neutral-400 text-lg">Scopri la nostra storia e la nostra passione per la bellezza</p>
        </header>

        <div className="bg-neutral-900 rounded-xl shadow-lg p-6 mb-8 border border-gold-500/30">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-50">La Nostra Storia</h2>
              <p className="text-lg text-neutral-400">
                Beauty J è il tuo centro estetico di fiducia, dove la bellezza incontra la professionalità. 
                Offriamo una vasta gamma di trattamenti personalizzati per viso, corpo, mani e piedi, 
                utilizzando prodotti di alta qualità e tecniche all'avanguardia.
              </p>
              <p className="text-lg text-neutral-400">
                Il nostro team di estetiste esperte è dedicato a valorizzare la tua bellezza naturale, 
                garantendo risultati eccellenti in un ambiente accogliente e rilassante.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold-500">100%</p>
                  <p className="text-sm text-neutral-400">Soddisfazione</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold-500">10+</p>
                  <p className="text-sm text-neutral-400">Trattamenti</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gold-500">5★</p>
                  <p className="text-sm text-neutral-400">Qualità</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative h-64 overflow-hidden rounded-lg shadow-md border border-gold-500/30">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Il nostro team"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg shadow-md border border-gold-500/30">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Il nostro centro"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg shadow-md border border-gold-500/30">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="I nostri prodotti"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg shadow-md border border-gold-500/30">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="I nostri trattamenti"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 