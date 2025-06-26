'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Square, ArrowRight, Bell, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Warehouse } from '@/types/warehouse';

interface WarehouseCardProps {
  warehouse: Warehouse;
  showFeatures?: boolean;
  className?: string;
}

export function WarehouseCard({
  warehouse,
  showFeatures = false,
  className = '',
}: WarehouseCardProps) {
  const statusConfig = {
    available: {
      label: 'Available Now',
      className: 'bg-green-600',
    },
    'coming-soon': {
      label: 'Coming Soon',
      className: 'bg-orange-600',
    },
    leased: {
      label: 'Leased Out',
      className: 'bg-red-600',
    },
  };

  const currentStatus = statusConfig[warehouse.status];
  const isAvailable = warehouse.status === 'available';

  const handleViewDetails = () => {
    // Scroll to top when navigating to warehouse details
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // For coming soon properties, render a non-clickable card
  if (!isAvailable) {
    return (
      <Card
        className={`border-0 shadow-lg overflow-hidden opacity-75 relative ${className}`}
      >
        {/* Coming Soon/Leased Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10 flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur rounded-lg p-4 text-center">
            {warehouse.status === 'leased' ? (
              <>
                <Building2 className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Leased Out</p>
                <p className="text-sm text-gray-600">Currently not available</p>
              </>
            ) : (
              <>
                <Bell className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Coming Soon</p>
                <p className="text-sm text-gray-600">
                  Available {warehouse.availability.availableFrom}
                </p>
              </>
            )}
          </div>
        </div>

        <div className="relative h-48">
          <Image
            src={warehouse.images.main || '/placeholder.svg'}
            alt={warehouse.title}
            fill
            className="object-cover"
          />
          <Badge className={`absolute top-4 left-4 ${currentStatus.className}`}>
            {currentStatus.label}
          </Badge>
        </div>

        <CardHeader>
          <CardTitle className="text-lg text-gray-600">
            {warehouse.title}
          </CardTitle>
          <CardDescription className="text-sm">
            {warehouse.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span>
                {warehouse.location.city}, {warehouse.location.state}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Square className="h-4 w-4 flex-shrink-0" />
              <span>{warehouse.size}</span>
            </div>
          </div>

          {showFeatures && warehouse.features && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Key Features:</h4>
              <div className="flex flex-wrap gap-1">
                {warehouse.features.slice(0, 3).map((feature, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs opacity-60"
                  >
                    {feature}
                  </Badge>
                ))}
                {warehouse.features.length > 3 && (
                  <Badge variant="outline" className="text-xs opacity-60">
                    +{warehouse.features.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              <span className="text-2xl font-bold text-gray-500">
                {warehouse.price.monthly}
              </span>
              <p className="text-xs text-muted-foreground">
                {warehouse.price.perSqft}/sqft
              </p>
            </div>
            {warehouse.status === 'leased' ? (
              <Button
                variant="outline"
                disabled
                className="group cursor-not-allowed"
              >
                <Building2 className="mr-2 h-4 w-4" />
                Leased Out
              </Button>
            ) : (
              <Button
                variant="outline"
                disabled
                className="group cursor-not-allowed"
              >
                <Bell className="mr-2 h-4 w-4" />
                Notify Me
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  // For available properties, render clickable card
  return (
    <Link
      href={`/warehouse/${warehouse.slug}#top`}
      className="block"
      onClick={handleViewDetails}
    >
      <Card
        className={`border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${className}`}
      >
        <div className="relative h-48">
          <Image
            src={warehouse.images.main || '/placeholder.svg'}
            alt={warehouse.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge className={`absolute top-4 left-4 ${currentStatus.className}`}>
            {currentStatus.label}
          </Badge>
        </div>

        <CardHeader>
          <CardTitle className="text-lg hover:text-green-600 transition-colors">
            {warehouse.title}
          </CardTitle>
          <CardDescription className="text-sm">
            {warehouse.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span>
                {warehouse.location.city}, {warehouse.location.state}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Square className="h-4 w-4 flex-shrink-0" />
              <span>{warehouse.size}</span>
            </div>
          </div>

          {showFeatures && warehouse.features && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Key Features:</h4>
              <div className="flex flex-wrap gap-1">
                {warehouse.features.slice(0, 3).map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
                {warehouse.features.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{warehouse.features.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              <span className="text-2xl font-bold text-green-600">
                {warehouse.price.monthly}
              </span>
              <p className="text-xs text-muted-foreground">
                {warehouse.price.perSqft}/sqft
              </p>
            </div>
            <Button className="group">
              View Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
