'use client';

import { GoogleMaps } from './google-maps';
import { Badge } from '@/components/ui/badge';
import type { Warehouse } from '@/types/warehouse';

interface WarehouseMapSectionProps {
  warehouse: Warehouse;
  mapProvider?: 'google' | 'openstreet' | 'static';
}

export function WarehouseMapSection({
  warehouse,
  mapProvider = 'google',
}: WarehouseMapSectionProps) {
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

  const mapLocation = {
    lat: warehouse.location.coordinates.lat,
    lng: warehouse.location.coordinates.lng,
    address: warehouse.location.address,
    title: warehouse.title,
  };

  // Dynamic import based on map provider
  const MapComponent = () => {
    switch (mapProvider) {
      case 'openstreet':
        const { OpenStreetMap } = require('./openstreet-map');
        return (
          <OpenStreetMap location={mapLocation} className="h-full w-full" />
        );
      case 'static':
        const { StaticMap } = require('./static-map');
        return <StaticMap location={mapLocation} className="h-full w-full" />;
      default:
        return <GoogleMaps location={mapLocation} className="h-full w-full" />;
    }
  };

  return (
    <section className="relative h-96 md:h-[500px]">
      <MapComponent />

      {/* Floating Property Info */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg max-w-md z-10">
        <div className="flex items-center space-x-2 mb-2">
          <Badge className={currentStatus.className}>
            {currentStatus.label}
          </Badge>
        </div>
        <h1 className="text-xl md:text-2xl font-bold">{warehouse.title}</h1>
        <p className="text-sm text-muted-foreground">
          {warehouse.location.address}
        </p>
        <div className="flex items-center space-x-4 mt-2 text-sm">
          <span className="flex items-center space-x-1">
            <span className="h-4 w-4 bg-green-600 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs">□</span>
            </span>
            <span>{warehouse.size}</span>
          </span>
          {/* <span className="text-2xl font-bold text-green-600">
            {warehouse.price.monthly}
          </span> */}
        </div>
      </div>
    </section>
  );
}
