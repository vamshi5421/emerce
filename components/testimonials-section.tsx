import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { testimonials } from "@/data/testimonials"

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0]
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>

          {/* Quote */}
          <Quote className="h-5 w-5 text-green-600" />

          {/* Review */}
          <p className="text-gray-700 leading-relaxed">{testimonial.review}</p>

          {/* Customer Info */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold text-sm">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                {testimonial.businessType && <div className="text-sm text-gray-500">{testimonial.businessType}</div>}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Don't just take our word for it. Here's what businesses across India say about their experience with Emerce
            warehouse solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">1M+</div>
              <div className="text-sm text-muted-foreground">Sq Ft Managed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">15+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
