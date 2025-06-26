"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Navigation, MapPin } from "lucide-react"
import { useDeviceDetection } from "@/hooks/use-device-detection"
import Image from "next/image"

interface StaticMapProps {
  location: {
    lat: number
    lng: number
    address: string
    title: string
  }
  className?: string
}

export function StaticMap({ location, className = "" }: StaticMapProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const { isMobile, isLoading: deviceLoading } = useDeviceDetection()

  const handleGetDirections = () => {
    const { lat, lng } = location

    if (isMobile) {
      const mobileUrl = `https://maps.google.com/maps?daddr=${lat},${lng}`
      try {
        window.open(mobileUrl, "_blank")
      } catch (error) {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank")
      }
    } else {
      const desktopUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
      window.open(desktopUrl, "_blank")
    }
  }

  const handleViewOnMaps = () => {
    const { lat, lng } = location
    const mapsUrl = `https://www.google.com/maps/place/${lat},${lng}`
    window.open(mapsUrl, "_blank")
  }

  // Static map with fixed marker - no interaction possible
  const staticMapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${location.lat},${location.lng}&zoom=15&size=800x600&maptype=mapnik&markers=${location.lat},${location.lng},red-pushpin`

  return (
    <div className={`relative ${className}`}>
      {/* Map Container */}
      <div className="relative h-full w-full rounded-lg overflow-hidden bg-gray-200">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4 animate-pulse" />
              <p className="text-gray-600">Loading map...</p>
            </div>
          </div>
        )}

        <Image
          src={staticMapUrl || "/placeholder.svg"}
          alt={`Static map showing exact location of ${location.title}`}
          fill
          className="object-cover"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            // Fallback to a simple placeholder
            setImageLoaded(true)
          }}
        />

        {/* Click overlay to open in maps */}
        <div
          className="absolute inset-0 cursor-pointer hover:bg-black/10 transition-colors"
          onClick={handleViewOnMaps}
          title="Click to view in maps"
        />
      </div>

      {/* Floating Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button
          onClick={handleViewOnMaps}
          size="sm"
          variant="secondary"
          className="bg-white/90 backdrop-blur hover:bg-white shadow-lg"
        >
          <MapPin className="h-4 w-4 mr-2" />
          View
        </Button>
      </div>

      {/* Get Directions Button */}
      <div className="absolute bottom-4 right-4">
        <Button
          onClick={handleGetDirections}
          className="bg-green-600 hover:bg-green-700 shadow-lg"
          disabled={deviceLoading}
        >
          <Navigation className="h-4 w-4 mr-2" />
          {deviceLoading ? "Loading..." : isMobile ? "Open in Maps" : "Get Directions"}
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Enhanced Location Info Overlay */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-lg p-3 shadow-lg max-w-xs z-10">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-3 w-3 bg-green-600 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-green-600">PROPERTY LOCATION</span>
        </div>
        <h3 className="font-semibold text-sm">{location.title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{location.address}</p>
        <div className="flex items-center mt-2 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3 mr-1" />
          <span>
            {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
          </span>
        </div>
        <div className="mt-2 text-xs text-gray-500 italic">📍 Static map showing exact warehouse location</div>
      </div>
    </div>
  )
}
