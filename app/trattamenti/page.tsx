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
            <TabsList className="grid grid-cols-2 md:grid-cols-8 mb-8 bg-neutral-800">
              <TabsTrigger value="viso" className="text-neutral-400 data-[state=active]:text-gold-500">Viso</TabsTrigger>
              <TabsTrigger value="corpo" className="text-neutral-400 data-[state=active]:text-gold-500">Corpo</TabsTrigger>
              <TabsTrigger value="mani" className="text-neutral-400 data-[state=active]:text-gold-500">Mani/Piedi</TabsTrigger>
              <TabsTrigger value="depilazione" className="text-neutral-400 data-[state=active]:text-gold-500">Epilazione</TabsTrigger>
              <TabsTrigger value="pacchetti-viso" className="text-neutral-400 data-[state=active]:text-gold-500">Pacchetti Viso</TabsTrigger>
              <TabsTrigger value="pacchetti-corpo" className="text-neutral-400 data-[state=active]:text-gold-500">Pacchetti Corpo</TabsTrigger>
              <TabsTrigger value="pressoterapia" className="text-neutral-400 data-[state=active]:text-gold-500">Pressoterapia</TabsTrigger>
              <TabsTrigger value="speciali" className="text-neutral-400 data-[state=active]:text-gold-500">Speciali</TabsTrigger>
            </TabsList>
            <TabsContent value="viso" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Pulizia viso con spatola ad ultrasuoni (inclusi baffetti e sopracciglia)", description: "" },
                  { title: "Trattamento viso Anti-age", description: "" },
                  { title: "Trattamento viso Hydra", description: "" },
                  { title: "Trattamento viso Pelle Grassa", description: "" },
                  { title: "Trattamento Contorno occhi", description: "" },
                ].map((treatment, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-lg bg-neutral-800 border-gold-500/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-neutral-50 mb-2">{treatment.title}</h3>
                      {treatment.description && <p className="text-neutral-400">{treatment.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="pt-4 text-gold-500 text-center text-sm font-semibold">CONSULENZA E ANAMNESI DELLA PELLE GRATUITA PRIMA DI OGNI TRATTAMENTO VISO E CORPO</div>
            </TabsContent>
            <TabsContent value="corpo" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Trattamento corpo", description: "" },
                  { title: "Trattamento corpo con Pressoterapia", description: "" },
                ].map((treatment, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-lg bg-neutral-800 border-gold-500/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-neutral-50 mb-2">{treatment.title}</h3>
                      {treatment.description && <p className="text-neutral-400">{treatment.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="mani" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Manicure con smalto Mesauda", description: "" },
                  { title: "Manicure con semipermanente", description: "" },
                  { title: "Refill", description: "" },
                  { title: "Ricostruzione unghie in gel o Acrygel", description: "" },
                  { title: "Nail art/decori/French/ricostruzione di un unghia", description: "" },
                  { title: "Pedicure con micromotore e smalto", description: "" },
                  { title: "Pedicure con micromotore + smalto semipermanente", description: "" },
                  { title: "Trattamento Hydra Piedi o Mani", description: "" },
                ].map((treatment, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-lg bg-neutral-800 border-gold-500/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-neutral-50 mb-2">{treatment.title}</h3>
                      {treatment.description && <p className="text-neutral-400">{treatment.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="depilazione" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Total Body", description: "" },
                  { title: "Inguine totale", description: "" },
                  { title: "Inguine parziale", description: "" },
                  { title: "Braccia", description: "" },
                  { title: "Ascelle", description: "" },
                  { title: "Mezza gamba inf.", description: "" },
                  { title: "Mezza gamba sup.", description: "" },
                  { title: "Glutei", description: "" },
                  { title: "Baffetti", description: "" },
                  { title: "Sopracciglia", description: "" },
                  { title: "Baffetti e sopracciglia", description: "" },
                  { title: "Mento o basette", description: "" },
                ].map((treatment, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-lg bg-neutral-800 border-gold-500/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-neutral-50 mb-2">{treatment.title}</h3>
                      {treatment.description && <p className="text-neutral-400">{treatment.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="pt-4 text-gold-500 text-center text-xs">Il prezzo potrebbe variare per epilazione uomo*</div>
            </TabsContent>
            <TabsContent value="pacchetti-viso" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Trattamento Anti-age (6 sedute)", description: "Ogni trattamento include 1 cosmetico domiciliare per il corretto mantenimento ed epilazione al viso!" },
                  { title: "Trattamento Hydra (6 sedute)", description: "" },
                  { title: "Trattamento Pelle Grassa (6 sedute)", description: "" },
                  { title: "Trattamento Contorno Occhi (6 sedute)", description: "" },
                ].map((treatment, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-lg bg-neutral-800 border-gold-500/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-neutral-50 mb-2">{treatment.title}</h3>
                      {treatment.description && <p className="text-neutral-400">{treatment.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="pacchetti-corpo" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Trattamento Corpo Personalizzato (6 sedute)", description: "Ogni trattamento include 1 cosmetico domiciliare per il corretto mantenimento ed epilazione al viso!" },
                  { title: "Trattamento Corpo con Pressoterapia (6 sedute)", description: "" },
                ].map((treatment, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-lg bg-neutral-800 border-gold-500/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-neutral-50 mb-2">{treatment.title}</h3>
                      {treatment.description && <p className="text-neutral-400">{treatment.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="pressoterapia" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Seduta singola 35 min", description: "" },
                  { title: "Pacchetto 6 sedute + 1 omaggio 30 min", description: "" },
                ].map((treatment, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-lg bg-neutral-800 border-gold-500/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-neutral-50 mb-2">{treatment.title}</h3>
                      {treatment.description && <p className="text-neutral-400">{treatment.description}</p>}
                    </CardContent>
                  </Card>
                ))}
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