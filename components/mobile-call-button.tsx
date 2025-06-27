"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { useDeviceDetection } from "@/hooks/use-device-detection"

interface MobileCallButtonProps {
  phoneNumber: string
  managerName: string
  className?: string
  variant?: "floating" | "inline"
}

export function MobileCallButton({
  phoneNumber,
  managerName,
  className = "",
  variant = "floating",
}: MobileCallButtonProps) {
  const { isMobile, isLoading } = useDeviceDetection()

  const handleCall = () => {
    // Clean phone number for tel: protocol
    const cleanPhoneNumber = phoneNumber.replace(/\s+/g, "").replace(/[^\d+]/g, "")
    window.location.href = `tel:${cleanPhoneNumber}`
  }

  // Don't render on desktop or while loading
  if (!isMobile || isLoading) {
    return null
  }

  if (variant === "floating") {
    return (
      <div className={`fixed bottom-14 left-4 right-4 z-50 ${className}`}>
        <Button
          onClick={handleCall}
          className="w-full bg-green-600 hover:bg-green-700 shadow-lg text-white font-semibold py-4 text-base"
          size="lg"
        >
          <Phone className="h-5 w-5 mr-3" />
          Call {managerName}
          <span className="ml-2 text-sm opacity-90">{phoneNumber}</span>
        </Button>
      </div>
    )
  }

  return (
    <Button
      onClick={handleCall}
      className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold ${className}`}
      size="lg"
    >
      <Phone className="h-5 w-5 mr-2" />
      Call {managerName}
    </Button>
  )
}
