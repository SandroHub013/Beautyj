"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Review {
  name: string;
  text: string;
  rating: number;
  image?: string;
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [userReviews, setUserReviews] = useState<Review[]>([])
  const [newReview, setNewReview] = useState<Review>({ name: '', text: '', rating: 5 })

  // Carica recensioni da localStorage
  useEffect(() => {
    const saved = localStorage.getItem('userReviews')
    if (saved) setUserReviews(JSON.parse(saved))
  }, [])

  // Salva recensioni su localStorage
  useEffect(() => {
    localStorage.setItem('userReviews', JSON.stringify(userReviews))
  }, [userReviews])

  const testimonials: Review[] = userReviews

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1))
  }

  const handleAddReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newReview.name || !newReview.text) return
    setUserReviews([...userReviews, newReview])
    setNewReview({ name: '', text: '', rating: 5 })
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
      <form onSubmit={handleAddReview} className="mt-8 bg-neutral-100 p-4 rounded-xl">
        <h4 className="font-semibold mb-2">Lascia una recensione</h4>
        <input type="text" placeholder="Nome" value={newReview.name} onChange={e => setNewReview({ ...newReview, name: e.target.value })} className="mb-2 p-2 rounded w-full" required />
        <textarea placeholder="La tua recensione" value={newReview.text} onChange={e => setNewReview({ ...newReview, text: e.target.value })} className="mb-2 p-2 rounded w-full" required />
        <label className="block mb-2">Valutazione: <input type="number" min="1" max="5" value={newReview.rating} onChange={e => setNewReview({ ...newReview, rating: Number(e.target.value) })} className="ml-2 w-16" required /></label>
        <button type="submit" className="bg-gold-500 text-white px-4 py-2 rounded">Invia</button>
      </form>
    </div>
  )
}
