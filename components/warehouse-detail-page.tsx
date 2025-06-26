'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  MapPin,
  Square,
  ArrowLeft,
  Phone,
  Mail,
  Building2,
  Truck,
  Clock,
  Calendar,
  Car,
  User,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Warehouse } from '@/types/warehouse';
import { VacancyContactForm } from './vacancy-contact-form';
import { WarehouseMapSection } from './warehouse-map-section';
import { ContactManagerButton } from './contact-manager-button';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@/components/ui/visually-hidden';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  warehouseTitle: string;
}

function ImageModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  warehouseTitle,
}: ImageModalProps) {
  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    onNavigate(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    onNavigate(newIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') onClose();
  };

  const getImageDescription = (index: number) => {
    if (index === 0) return 'Main warehouse view';
    return `Warehouse gallery image ${index}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-7xl w-full h-[90vh] p-0 bg-black/95"
        onKeyDown={handleKeyDown}
      >
        <VisuallyHidden>
          <DialogTitle>
            {warehouseTitle} - {getImageDescription(currentIndex)} (
            {currentIndex + 1} of {images.length})
          </DialogTitle>
        </VisuallyHidden>

        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Close image gallery"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center p-8">
            <Image
              src={images[currentIndex] || '/placeholder.svg'}
              alt={`${warehouseTitle} - ${getImageDescription(currentIndex)}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* Thumbnail Navigation */}
          {images.length > 1 && (
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-md overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(index)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-white'
                      : 'border-transparent opacity-60 hover:opacity-80'
                  }`}
                  aria-label={`View ${getImageDescription(index)}`}
                >
                  <Image
                    src={image || '/placeholder.svg'}
                    alt={`${warehouseTitle} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface WarehouseDetailPageProps {
  warehouse: Warehouse;
}

export function WarehouseDetailPage({ warehouse }: WarehouseDetailPageProps) {
  const landmarkIcons = {
    airport: '✈️',
    highway: '🛣️',
    railway: '🚂',
    port: '🚢',
    mall: '🏬',
    hospital: '🏥',
    school: '🏫',
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Create array of all images (main + gallery)
  const allImages = [warehouse.images.main, ...warehouse.images.gallery].filter(
    Boolean
  );

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const navigateToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white" id="top">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-4">
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
            <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-green-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/#rent-lease"
                className="hover:text-green-600 transition-colors"
              >
                Warehouses
              </Link>
              <span>/</span>
              <span className="text-green-600">{warehouse.title}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Listings
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Google Maps Section */}
      <WarehouseMapSection warehouse={warehouse} />

      {/* Image Gallery */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <div
                className="relative h-64 md:h-96 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity group"
                onClick={() => openModal(0)}
              >
                <Image
                  src={warehouse.images.main || '/placeholder.svg'}
                  alt={`Main view of ${warehouse.title}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white px-4 py-2 rounded-lg">
                    Click to view full size
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-1">
              {warehouse.images.gallery.slice(0, 2).map((image, index) => (
                <div
                  key={index}
                  className="relative h-32 md:h-44 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity group"
                  onClick={() => openModal(index + 1)}
                >
                  <Image
                    src={image || '/placeholder.svg'}
                    alt={`${warehouse.title} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {warehouse.images.gallery.length > 2 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {warehouse.images.gallery.slice(2, 5).map((image, index) => (
                <div
                  key={index}
                  className="relative h-24 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity group"
                  onClick={() => openModal(index + 3)}
                >
                  <Image
                    src={image || '/placeholder.svg'}
                    alt={`${warehouse.title} view ${index + 3}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
              {warehouse.images.gallery.length > 5 && (
                <div
                  className="relative h-24 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => openModal(5)}
                >
                  <span className="text-sm text-gray-600">
                    +{warehouse.images.gallery.length - 5} more
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              {/* Basic Details */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Property Details</CardTitle>
                  <CardDescription>
                    Complete information about this warehouse facility
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-sm text-muted-foreground">
                            {warehouse.location.city},{' '}
                            {warehouse.location.state}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Square className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Total Size</p>
                          <p className="text-sm text-muted-foreground">
                            {warehouse.specifications.totalArea}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Availability</p>
                          <p className="text-sm text-muted-foreground">
                            {warehouse.availability.immediate
                              ? 'Immediate'
                              : `Available from ${warehouse.availability.availableFrom}`}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Building2 className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Monthly Rent</p>
                          <p className="text-2xl font-bold text-green-600">
                            {warehouse.price.monthly}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {warehouse.price.perSqft} per sqft
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Truck className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Loading Docks</p>
                          <p className="text-sm text-muted-foreground">
                            {warehouse.specifications.loadingDocks} dock doors
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Car className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Parking</p>
                          <p className="text-sm text-muted-foreground">
                            {warehouse.specifications.parkingSpaces}+ spaces
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Specifications
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="font-medium">Storage Area:</span>{' '}
                          {warehouse.specifications.storageArea}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Office Area:</span>{' '}
                          {warehouse.specifications.officeArea}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Ceiling Height:</span>{' '}
                          {warehouse.specifications.ceilingHeight}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="font-medium">Floor Load:</span>{' '}
                          {warehouse.specifications.floorLoad}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Loading Docks:</span>{' '}
                          {warehouse.specifications.loadingDocks}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Parking Spaces:</span>{' '}
                          {warehouse.specifications.parkingSpaces}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Amenities & Features</CardTitle>
                  <CardDescription>
                    Comprehensive list of facilities and services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    {warehouse.amenities.map((category, index) => (
                      <div key={index}>
                        <h4 className="font-semibold mb-3 text-green-600">
                          {category.category}
                        </h4>
                        <div className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-center space-x-2"
                            >
                              <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Nearby Landmarks */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Nearby Landmarks</CardTitle>
                  <CardDescription>
                    Strategic location with excellent connectivity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {warehouse.nearbyLandmarks.map((landmark, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="text-lg">
                          {landmarkIcons[landmark.type]}
                        </span>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{landmark.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {landmark.distance}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Manager */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Property Manager</CardTitle>
                  <CardDescription>
                    Get in touch with our dedicated property manager
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{warehouse.contact.manager}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <a
                          href={`tel:${warehouse.contact.phone}`}
                          className="flex items-center space-x-1 text-sm text-green-600 hover:underline"
                        >
                          <Phone className="h-3 w-3" />
                          <span>{warehouse.contact.phone}</span>
                        </a>
                        <a
                          href={`mailto:${warehouse.contact.email}`}
                          className="flex items-center space-x-1 text-sm text-green-600 hover:underline"
                        >
                          <Mail className="h-3 w-3" />
                          <span>{warehouse.contact.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Contact Manager Button */}
                  <div className="mt-4">
                    <ContactManagerButton
                      phoneNumber={warehouse.contact.phone}
                      managerName={warehouse.contact.manager}
                      managerEmail={warehouse.contact.email}
                      variant="inline"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <VacancyContactForm
                warehouseTitle={warehouse.title}
                managerPhone={warehouse.contact.phone}
                managerName={warehouse.contact.manager}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link
                href="/"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/emerce-logo.png"
                  alt="Emerce Logo"
                  width={160}
                  height={50}
                  className="brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400">
                Smart warehouse rental solutions for modern businesses.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/#aboutus"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/#rent-lease"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Rent/Lease Properties
                </Link>
                <Link
                  href="/#testimonials"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  href="/#contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
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
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Emerce. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      <ImageModal
        images={allImages}
        currentIndex={currentImageIndex}
        isOpen={modalOpen}
        onClose={closeModal}
        onNavigate={navigateToImage}
        warehouseTitle={warehouse.title}
      />
    </div>
  );
}
