import React, { useState } from 'react';
import { Sparkles, Scissors, Droplets, Eye, Heart, Hand } from 'lucide-react';

const BeautySalonPricing = () => {
  const [activeTab, setActiveTab] = useState('pressotherapy');

  const pressotherapyData = {
    title: "PRESSOTERAPIA",
    icon: <Heart className="w-6 h-6" />,
    services: [
      { name: "SEDUTA SINGOLA 35 MIN" },
      { name: "PACCHETTO 6 SEDUTE + 1 OMAGGIO 30min" }
    ]
  };

  const epilationData = {
    title: "SERVIZI EPILAZIONE",
    icon: <Scissors className="w-6 h-6" />,
    services: [
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
      { name: "Mento o basette" }
    ],
    note: "Prezzi personalizzati per epilazione uomo"
  };

  const facePackagesData = {
    title: "PACCHETTI TRATTAMENTO VISO 6 SEDUTE",
    icon: <Sparkles className="w-6 h-6" />,
    services: [
      { name: "TRATTAMENTO ANTI-AGE" },
      { name: "TRATTAMENTO HYDRA" },
      { name: "TRATTAMENTO PELLE GRASSA" },
      { name: "TRATTAMENTO CONTORNO OCCHI" }
    ],
    note: "Ogni trattamento include 1 cosmetico domiciliare per il corretto mantenimento ed epilazione al viso!"
  };

  const bodyPackagesData = {
    title: "PACCHETTI TRATTAMENTO CORPO 6 SEDUTE",
    icon: <Droplets className="w-6 h-6" />,
    services: [
      { name: "TRATTAMENTO CORPO PERSONALIZZATO" },
      { name: "TRATTAMENTO CORPO CON PRESSOTERAPIA" }
    ],
    note: "Ogni trattamento include 1 cosmetico domiciliare per il corretto mantenimento!"
  };

  const singleTreatmentsData = {
    title: "TRATTAMENTI VISO E CORPO",
    icon: <Eye className="w-6 h-6" />,
    services: [
      { name: "Pulizia viso con spatola ad ultrasuoni (inclusi baffetti e sopracciglia)" },
      { name: "Trattamento viso Anti-age" },
      { name: "Trattamento viso Hydra" },
      { name: "Trattamento viso Pelle Grassa" },
      { name: "Trattamento Contorno occhi" },
      { name: "Trattamento corpo" },
      { name: "Trattamento corpo con Pressoterapia" }
    ],
    consultation: {
      title: "CONSULENZA E ANAMNESI DELLA PELLE GRATUITA PRIMA DI OGNI TRATTAMENTO",
      services: [
        { name: "Laminazione ciglia" },
        { name: "Laminazione sopracciglia" },
        { name: "Laminazione ciglia e sopracciglia" }
      ]
    }
  };

  const handsAndFeetData = {
    title: "SERVIZI MANI E PIEDI",
    icon: <Hand className="w-6 h-6" />,
    services: [
      { name: "Manicure con smalto Mesauda" },
      { name: "Manicure con semipermanente" },
      { name: "Refill" },
      { name: "Ricostruzione unghie in gel o Acrygel" },
      { name: "Nail art/decori/French/ricostruzione di un unghia" },
      { name: "Pedicure con micromotore e smalto" },
      { name: "Pedicure con micromotore + smalto semipermanente" },
      { name: "Trattamento Hydra Piedi o Mani" }
    ]
  };

  const tabs = [
    { id: 'pressotherapy', label: 'Pressoterapia', data: pressotherapyData },
    { id: 'epilation', label: 'Epilazione', data: epilationData },
    { id: 'face-packages', label: 'Pacchetti Viso', data: facePackagesData },
    { id: 'body-packages', label: 'Pacchetti Corpo', data: bodyPackagesData },
    { id: 'single-treatments', label: 'Trattamenti Singoli', data: singleTreatmentsData },
    { id: 'hands-feet', label: 'Mani e Piedi', data: handsAndFeetData }
  ];

  const ServiceCard = ({ service }) => (
    <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-amber-400/20 hover:bg-white/10 transition-all duration-300">
      <span className="text-amber-100 font-medium">{service.name}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-amber-900 p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mr-4">
            <span className="text-black font-bold text-2xl">B</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Beauty J
          </h1>
        </div>
        <p className="text-amber-200 text-lg">Centro Estetico Professionale</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-amber-500 text-black shadow-lg'
                : 'bg-white/10 text-amber-200 hover:bg-white/20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'} transition-all duration-500`}
          >
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-amber-400/30 p-8 shadow-2xl">
              {/* Section Header */}
              <div className="flex items-center justify-center mb-8">
                <div className="text-amber-400 mr-3">
                  {tab.data.icon}
                </div>
                <h2 className="text-3xl font-bold text-amber-400 text-center">
                  {tab.data.title}
                </h2>
              </div>

              {/* Services Grid */}
              <div className="space-y-4">
                {tab.data.services.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>

              {/* Special Consultation Section for Single Treatments */}
              {tab.data.consultation && (
                <div className="mt-8 p-6 bg-amber-500/10 rounded-lg border border-amber-400/30">
                  <h3 className="text-xl font-bold text-amber-300 mb-4 text-center">
                    {tab.data.consultation.title}
                  </h3>
                  <div className="space-y-3">
                    {tab.data.consultation.services.map((service, index) => (
                      <ServiceCard key={index} service={service} />
                    ))}
                  </div>
                </div>
              )}

              {/* Note */}
              {tab.data.note && (
                <div className="mt-6 p-4 bg-amber-500/20 rounded-lg border-l-4 border-amber-400">
                  <p className="text-amber-200 text-sm italic">
                    {tab.data.note}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center space-x-2 text-amber-300">
          <Sparkles className="w-5 h-5" />
          <span className="text-lg font-medium">Contattaci per informazioni su prezzi e prenotazioni</span>
          <Sparkles className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default BeautySalonPricing;