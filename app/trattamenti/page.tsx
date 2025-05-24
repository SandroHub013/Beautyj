import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Trattamenti() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-24">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">Trattamenti</h1>
          <p className="text-neutral-400 text-lg">Scopri i nostri servizi di bellezza</p>
        </header>

        <div className="bg-neutral-900 rounded-xl shadow-lg p-6 mb-8 border border-gold-500/30">
          <Tabs defaultValue="viso" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8 bg-neutral-800">
              <TabsTrigger value="viso" className="text-neutral-400 data-[state=active]:text-gold-500">Viso</TabsTrigger>
              <TabsTrigger value="corpo" className="text-neutral-400 data-[state=active]:text-gold-500">Corpo</TabsTrigger>
              <TabsTrigger value="mani" className="text-neutral-400 data-[state=active]:text-gold-500">Mani/Piedi</TabsTrigger>
              <TabsTrigger value="depilazione" className="text-neutral-400 data-[state=active]:text-gold-500">Depilazione</TabsTrigger>
              <TabsTrigger value="massaggi" className="text-neutral-400 data-[state=active]:text-gold-500">Massaggi</TabsTrigger>
              <TabsTrigger value="speciali" className="text-neutral-400 data-[state=active]:text-gold-500">Speciali</TabsTrigger>
            </TabsList>
            <TabsContent value="viso" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Pulizia Viso Profonda",
                    description: "Trattamento di pulizia profonda per rimuovere impurità e punti neri",
                    price: "€60",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    title: "Trattamento Anti-Age",
                    description: "Trattamento intensivo per contrastare i segni dell'invecchiamento",
                    price: "€85",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    title: "Maschera Idratante",
                    description: "Maschera nutriente per pelli secche e disidratate",
                    price: "€45",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                ].map((treatment, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-lg bg-neutral-800 border-gold-500/30">
                    <div className="relative h-48">
                      <Image
                        src={treatment.image}
                        alt={treatment.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-neutral-50">{treatment.title}</h3>
                        <span className="text-gold-500 font-medium">{treatment.price}</span>
                      </div>
                      <p className="text-neutral-400">{treatment.description}</p>
                      <Button variant="link" className="p-0 mt-4 text-gold-500 hover:text-gold-400">
                        Scopri di più
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="corpo" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Scrub Corpo",
                    description: "Esfoliazione completa per una pelle morbida e rinnovata",
                    price: "€70",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    title: "Trattamento Anticellulite",
                    description: "Trattamento mirato per contrastare la cellulite",
                    price: "€90",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    title: "Fanghi Drenanti",
                    description: "Trattamento con fanghi per drenare e sgonfiare",
                    price: "€75",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                ].map((treatment, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-lg bg-neutral-800 border-gold-500/30">
                    <div className="relative h-48">
                      <Image
                        src={treatment.image}
                        alt={treatment.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-neutral-50">{treatment.title}</h3>
                        <span className="text-gold-500 font-medium">{treatment.price}</span>
                      </div>
                      <p className="text-neutral-400">{treatment.description}</p>
                      <Button variant="link" className="p-0 mt-4 text-gold-500 hover:text-gold-400">
                        Scopri di più
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="mani" className="space-y-4">
              <div className="text-center py-8">
                <p className="text-neutral-400">
                  Seleziona questa categoria per visualizzare i trattamenti per mani e piedi
                </p>
              </div>
            </TabsContent>
            <TabsContent value="depilazione" className="space-y-4">
              <div className="text-center py-8">
                <p className="text-neutral-400">
                  Seleziona questa categoria per visualizzare i trattamenti di depilazione
                </p>
              </div>
            </TabsContent>
            <TabsContent value="massaggi" className="space-y-4">
              <div className="text-center py-8">
                <p className="text-neutral-400">Seleziona questa categoria per visualizzare i massaggi disponibili</p>
              </div>
            </TabsContent>
            <TabsContent value="speciali" className="space-y-4">
              <div className="text-center py-8">
                <p className="text-neutral-400">Seleziona questa categoria per visualizzare i trattamenti speciali</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
} 