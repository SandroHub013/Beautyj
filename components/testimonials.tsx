"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Laura Bianchi",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Frequento Bella Estetica da più di un anno e non potrei essere più soddisfatta. Il personale è professionale e cordiale, i trattamenti sono sempre impeccabili. Consiglio vivamente il trattamento anti-age, ha fatto miracoli sulla mia pelle!",
    },
    {
      name: "Marco Rossi",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Ho regalato a mia moglie un pacchetto di trattamenti e lei è rimasta entusiasta. L'ambiente è elegante e rilassante, il personale attento e professionale. Ottimo rapporto qualità-prezzo.",
    },
    {
      name: "Giulia Verdi",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      text: "Ho provato il massaggio rilassante e devo dire che è stata un'esperienza fantastica. L'ambiente è tranquillo e l'operatrice molto professionale. Tornerò sicuramente per provare altri trattamenti.",
    },
    {
      name: "Alessandra Neri",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Frequento questo centro da diversi mesi e sono sempre soddisfatta dei risultati. I prodotti utilizzati sono di alta qualità e il personale è sempre disponibile a dare consigli personalizzati. Lo consiglio vivamente!",
    },
    {
      name: "Francesca Romano",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Ho fatto la ricostruzione unghie e sono rimasta molto soddisfatta del risultato. L'estetista è stata molto precisa e ha realizzato esattamente ciò che desideravo. Tornerò sicuramente!",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 flex-grow">{testimonial.text}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white border-pink-200 hover:bg-pink-50 z-10 hidden md:flex"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-4 w-4 text-pink-600" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white border-pink-200 hover:bg-pink-50 z-10 hidden md:flex"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-4 w-4 text-pink-600" />
      </Button>
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        <Button variant="outline" size="sm" onClick={prevTestimonial}>
          <ChevronLeft className="h-4 w-4 mr-1" /> Precedente
        </Button>
        <Button variant="outline" size="sm" onClick={nextTestimonial}>
          Successivo <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}
