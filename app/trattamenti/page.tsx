"use client"

import { useState } from "react";
import { Sparkles, Scissors, Droplets, Eye, Heart, Hand } from "lucide-react";

export default function Trattamenti() {
  const [activeTab, setActiveTab] = useState("pressotherapy");

  const tabs = [
    {
      id: "pressotherapy",
      label: "Pressoterapia",
      icon: <Heart className="w-6 h-6 text-gold-500" />,
      data: [
        { name: "Seduta singola 35 min", price: "25€" },
        { name: "Pacchetto 6 sedute + 1 omaggio 30min", price: "150€" },
      ],
    },
    {
      id: "epilation",
      label: "Epilazione",
      icon: <Scissors className="w-6 h-6 text-gold-500" />,
      data: [
        { name: "Total Body" },
        { name: "Inguine totale" },
        { name: "Inguine parziale" },
        { name: "Braccia" },
        { name: "Ascelle" },
        { name: "Mezza gamba inf." },
        { name: "Mezza gamba sup." },
        { name: "Glutei" },
        { name: "Baffetti" },
        { name: "Sopracciglia" },
        { name: "Baffetti e sopracciglia" },
        { name: "Mento o basette" },
      ],
      note: "Il prezzo potrebbe variare per epilazione uomo*",
    },
    {
      id: "face-packages",
      label: "Pacchetti Viso",
      icon: <Sparkles className="w-6 h-6 text-gold-500" />,
      data: [
        { name: "Trattamento Anti-age (6 sedute)" },
        { name: "Trattamento Hydra (6 sedute)" },
        { name: "Trattamento Pelle Grassa (6 sedute)" },
        { name: "Trattamento Contorno Occhi (6 sedute)" },
      ],
      note: "Ogni trattamento include 1 cosmetico domiciliare per il corretto mantenimento ed epilazione al viso!",
    },
    {
      id: "body-packages",
      label: "Pacchetti Corpo",
      icon: <Droplets className="w-6 h-6 text-gold-500" />,
      data: [
        { name: "Trattamento Corpo Personalizzato (6 sedute)" },
        { name: "Trattamento Corpo con Pressoterapia (6 sedute)" },
      ],
      note: "Ogni trattamento include 1 cosmetico domiciliare per il corretto mantenimento!",
    },
    {
      id: "single-treatments",
      label: "Trattamenti Viso/Corpo",
      icon: <Eye className="w-6 h-6 text-gold-500" />,
      data: [
        { name: "Pulizia viso con spatola ad ultrasuoni (inclusi baffetti e sopracciglia)" },
        { name: "Trattamento viso Anti-age" },
        { name: "Trattamento viso Hydra" },
        { name: "Trattamento viso Pelle Grassa" },
        { name: "Trattamento Contorno occhi" },
        { name: "Trattamento corpo" },
        { name: "Trattamento corpo con Pressoterapia" },
      ],
      consultation: {
        title: "CONSULENZA E ANAMNESI DELLA PELLE GRATUITA PRIMA DI OGNI TRATTAMENTO",
        data: [
          { name: "Laminazione ciglia" },
          { name: "Laminazione sopracciglia" },
          { name: "Laminazione ciglia e sopracciglia" },
        ],
      },
    },
    {
      id: "hands-feet",
      label: "Mani e Piedi",
      icon: <Hand className="w-6 h-6 text-gold-500" />,
      data: [
        { name: "Manicure con smalto Mesauda" },
        { name: "Manicure con semipermanente" },
        { name: "Refill" },
        { name: "Ricostruzione unghie in gel o Acrygel" },
        { name: "Nail art/decori/French/ricostruzione di un unghia" },
        { name: "Pedicure con micromotore e smalto" },
        { name: "Pedicure con micromotore + smalto semipermanente" },
        { name: "Trattamento Hydra Piedi o Mani" },
      ],
    },
  ];

  const ServiceCard = ({ service }: { service: { name: string, price?: string } }) => (
    <div className="flex justify-between items-center p-4 bg-neutral-900 rounded-lg border border-gold-500/20 hover:bg-gold-500/10 transition-all duration-300">
      <span className="text-gold-500 font-medium">{service.name}</span>
      {service.price && <span className="text-gold-400 font-semibold ml-4 whitespace-nowrap">{service.price}</span>}
    </div>
  );

  return (
    <main className="min-h-screen bg-neutral-950 pt-24">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">Trattamenti</h1>
          <p className="text-neutral-400 text-lg">Scopri i nostri servizi di bellezza</p>
        </header>
        <div className="bg-neutral-900 rounded-xl shadow-lg p-6 mb-8 border border-gold-500/30">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gold-500 text-neutral-950 shadow-lg'
                    : 'bg-neutral-800 text-gold-500 hover:bg-gold-500/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="max-w-4xl mx-auto">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`${activeTab === tab.id ? 'block' : 'hidden'} transition-all duration-500`}
              >
                <div className="bg-neutral-950 rounded-2xl border border-gold-500/30 p-8 shadow-2xl">
                  <div className="flex items-center justify-center mb-8">
                    <div className="mr-3">{tab.icon}</div>
                    <h2 className="text-3xl font-bold text-gold-500 text-center">{tab.label}</h2>
                  </div>
                  <div className="space-y-4">
                    {tab.data.map((service, index) => (
                      <ServiceCard key={index} service={service} />
                    ))}
                  </div>
                  {tab.consultation && (
                    <div className="mt-8 p-6 bg-rose-900/20 rounded-lg border border-rose-400/30">
                      <h3 className="text-xl font-bold text-rose-300 mb-4 text-center">
                        {tab.consultation.title}
                      </h3>
                      <div className="space-y-3">
                        {tab.consultation.data.map((service, index) => (
                          <ServiceCard key={index} service={service} />
                        ))}
                      </div>
                    </div>
                  )}
                  {tab.note && (
                    <div className="mt-6 p-4 bg-gold-500/10 rounded-lg border-l-4 border-gold-500">
                      <p className="text-gold-500 text-sm italic">{tab.note}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 