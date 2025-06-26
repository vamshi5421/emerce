import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  Square,
  Phone,
  Mail,
  Building2,
  Truck,
  Shield,
  Clock,
  Calendar,
  Wifi,
  Car,
  Camera,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { VacancyContactForm } from "@/components/vacancy-contact-form"

export default function VacancyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
              <Image src="/emerce-logo.png" alt="Emerce Logo" width={160} height={50} />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/vacancy" className="text-sm font-medium text-green-600">
              Rent/Lease Warehouse
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Google Map Section */}
      <section className="relative h-96 md:h-[500px]">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Google Maps Integration</p>
            <p className="text-sm text-gray-500">Warehouse Location: Pune, Maharashtra</p>
          </div>
        </div>

        {/* Floating Property Title */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg">
          <h1 className="text-xl md:text-2xl font-bold">Warehouse in Pune – 20,000 sqft</h1>
          <p className="text-sm text-muted-foreground">Prime industrial location</p>
        </div>

        {/* Get Directions Button */}
        <div className="absolute bottom-4 right-4">
          <Button className="bg-green-600 hover:bg-green-700">
            <ExternalLink className="h-4 w-4 mr-2" />
            Get Directions
          </Button>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Main warehouse view"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-1">
              <div className="relative h-32 md:h-44 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Warehouse interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 md:h-44 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="Loading dock" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="relative h-24 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=100&width=150" alt="Office space" fill className="object-cover" />
            </div>
            <div className="relative h-24 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=100&width=150" alt="Parking area" fill className="object-cover" />
            </div>
            <div className="relative h-24 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=100&width=150" alt="Security gate" fill className="object-cover" />
            </div>
            <div className="relative h-24 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              <span className="text-sm text-gray-600">+3 more</span>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Property Details</CardTitle>
                  <CardDescription>Complete information about this warehouse facility</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Basic Details */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-sm text-muted-foreground">Pune, Maharashtra</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Square className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Size</p>
                          <p className="text-sm text-muted-foreground">20,000 sqft</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Availability</p>
                          <p className="text-sm text-muted-foreground">Immediate</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Building2 className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Monthly Rent</p>
                          <p className="text-2xl font-bold text-green-600">₹2.5L</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Truck className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Loading Docks</p>
                          <p className="text-sm text-muted-foreground">4 dock doors</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Car className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Parking</p>
                          <p className="text-sm text-muted-foreground">50+ spaces</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Amenities</h3>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span className="text-sm">24/7 Security</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span className="text-sm">24/7 Access</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Wifi className="h-4 w-4 text-green-600" />
                        <span className="text-sm">High-Speed Internet</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Camera className="h-4 w-4 text-green-600" />
                        <span className="text-sm">CCTV Surveillance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Building2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Office Space Included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Truck className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Ground Level Access</span>
                      </div>
                    </div>
                  </div>

                  {/* Nearby Landmarks */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Nearby Landmarks</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Pune International Airport - 15 km</p>
                      <p>• Mumbai-Pune Expressway - 2 km</p>
                      <p>• Rajiv Gandhi IT Park - 8 km</p>
                      <p>• Pune Railway Station - 12 km</p>
                      <p>• Major Shopping Centers - 5 km</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <VacancyContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                  src="/emerce-logo.png"
                  alt="Emerce Logo"
                  width={160}
                  height={50}
                  className="brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400">Smart warehouse rental solutions for modern businesses.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/#aboutus" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/#rent-lease" className="block text-gray-400 hover:text-white transition-colors">
                  Rent/Lease Properties
                </Link>
                <Link href="/#testimonials" className="block text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
                <Link href="/#contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>info@emerce.com</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>123 Business District, Mumbai, Maharashtra 400001</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Business Hours</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Sat: 10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Emerce. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
          <Phone className="h-4 w-4 mr-2" />
          Call Now: +91 98765 43210
        </Button>
      </div>
    </div>
  )
}
