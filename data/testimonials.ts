export interface Testimonial {
  id: string
  name: string
  rating: number
  review: string
  businessType?: string
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Rajesh Patel",
    rating: 5,
    review:
      "Emerce helped us find the perfect warehouse in Mumbai. The location is strategic with excellent highway connectivity. Their team was professional and the entire process was seamless. We've been operating from this facility for 8 months now and couldn't be happier.",
    businessType: "Logistics",
  },
  {
    id: "testimonial-2",
    name: "Priya Sharma",
    rating: 5,
    review:
      "As a growing tech company, we needed a modern warehouse with office space included. Emerce delivered exactly what we needed in Pune. The facility has excellent infrastructure, 24/7 security, and the rent is very competitive. Highly recommended!",
    businessType: "Technology",
  },
  {
    id: "testimonial-3",
    name: "Arjun Reddy",
    rating: 5,
    review:
      "Finding a warehouse with proper cold storage facilities was challenging until we found Emerce. They understood our requirements for organic food distribution and found us an ideal facility in Bangalore. The team's expertise in the industry is impressive.",
    businessType: "Food & Beverages",
  },
  {
    id: "testimonial-4",
    name: "Meera Joshi",
    rating: 4,
    review:
      "We needed a warehouse for our retail business with good connectivity to ports and airports. Emerce found us a great facility with perfect loading docks and storage space for our inventory management needs.",
    businessType: "Retail",
  },
  {
    id: "testimonial-5",
    name: "Vikram Singh",
    rating: 5,
    review:
      "Emerce's team went above and beyond to understand our automotive parts storage requirements. They found us a warehouse with heavy-duty flooring and excellent ceiling height. The property manager is always available and very responsive.",
    businessType: "Automotive",
  },
  {
    id: "testimonial-6",
    name: "Anita Desai",
    rating: 5,
    review:
      "For our pharmaceutical distribution business, we needed a warehouse with strict temperature control and security standards. Emerce delivered a facility that exceeds all regulatory requirements. Their attention to detail is remarkable.",
    businessType: "Healthcare",
  },
]
