import { Button } from '@/components/ui/button';
import {
  MapPin,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  Clock,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ContactForm } from '@/components/contact-form';
import { WarehouseGrid } from '@/components/warehouse-grid';
import { warehouses } from '@/data/warehouses';
import { MobileCallButton } from '@/components/mobile-call-button';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Footer } from '@/components/footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image
                src="/emerce-logo.png"
                alt="Emerce Logo"
                width={160}
                height={50}
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#aboutus"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              About us
            </Link>
            <Link
              href="#rent-lease"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Rent/Lease
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Testimonials
            </Link>
            {/* <Link
              href="#trustedBy"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Trusted by
            </Link> */}
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Contact us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-700">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/warehouse-hero-bg.jpg')",
          }}
        ></div>

        <div className="relative z-10 text-center text-white px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight font-extrabold text-black font-sans">
            Emerce – Smart Warehouse
            <span className="text-emerald-800 font-sans">
              {' '}
              Rental Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-black font-sans">
            Find the perfect warehouse space for your business. Modern
            facilities, strategic locations, competitive rates.
          </p>
          <Link href="#rent-lease">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700"
            >
              Explore Vacancies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Us */}
      <section id="aboutus" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-100">
                <Building2 className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About Emerce
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Emerce is a leading provider of smart warehouse rental
                  solutions, connecting businesses with premium storage and
                  distribution facilities across major industrial hubs. We
                  understand that finding the right warehouse space is crucial
                  for your business operations and growth.
                </p>
                <p>
                  Our curated portfolio of modern warehouses offers flexible
                  lease terms, strategic locations, and state-of-the-art
                  facilities designed to meet the evolving needs of today's
                  supply chain operations. From small-scale storage to large
                  distribution centers, we have the perfect space for your
                  business.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-xl bg-green-50 p-8">
                <Image
                  src="/logo.png"
                  alt="Emerce Company Logo"
                  width={1200}
                  height={900}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Warehouse Vacancies */}
      <section id="rent-lease" className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Current Warehouse Vacancies
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Discover premium warehouse spaces available for immediate
              occupancy
            </p>
          </div>

          <WarehouseGrid
            warehouses={warehouses}
            maxItems={3}
            showFeatures={true}
          />

          {warehouses.length > 3 && (
            <div className="text-center mt-12">
              <Link href="/warehouses">
                <Button size="lg" variant="outline">
                  View All Warehouses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      {/* Trusted By */}
      {/* <section id="trustedBy" className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted By Industry Leaders</h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of businesses who trust Emerce for their warehouse needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="flex items-center justify-center h-16 w-40 bg-gray-100 rounded-lg border">
              <span className="text-xl font-bold text-gray-600 tracking-wider">ITC</span>
            </div>
            <div className="flex items-center justify-center h-16 w-40 bg-gray-100 rounded-lg border">
              <span className="text-sm font-bold text-gray-600 text-center px-2">
                CENTRAL
                <br />
                WAREHOUSING
                <br />
                CORPORATION
              </span>
            </div>
            <div className="flex items-center justify-center h-16 w-40 bg-gray-100 rounded-lg border">
              <span className="text-lg font-bold text-gray-600">BigBasket</span>
            </div>
            <div className="flex items-center justify-center h-16 w-40 bg-gray-100 rounded-lg border p-4">
              <Image
                src="/logos/amazon-logo.png"
                alt="Amazon"
                width={120}
                height={40}
                className="object-contain filter grayscale opacity-70 hover:opacity-90 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Get in Touch */}
      <section id="contact" className="py-20 md:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Get in Touch
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to find your perfect warehouse space? Contact us today.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      {/* Mobile Call Button for General Inquiries */}
      <MobileCallButton
        phoneNumber="+91 99893 08335"
        managerName="Sales Team"
        variant="floating"
      />
    </div>
  );
}
