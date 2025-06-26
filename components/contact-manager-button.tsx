"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Phone, Mail, Calendar, Copy, CheckCircle, User } from "lucide-react"
import { useDeviceDetection } from "@/hooks/use-device-detection"

interface ContactManagerButtonProps {
  phoneNumber: string
  managerName: string
  managerEmail?: string
  className?: string
  variant?: "floating" | "inline"
}

export function ContactManagerButton({
  phoneNumber,
  managerName,
  managerEmail,
  className = "",
  variant = "floating",
}: ContactManagerButtonProps) {
  const { isMobile, isLoading } = useDeviceDetection()
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleMobileCall = () => {
    // Clean phone number for tel: protocol
    const cleanPhoneNumber = phoneNumber.replace(/\s+/g, "").replace(/[^\d+]/g, "")
    window.location.href = `tel:${cleanPhoneNumber}`
  }

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy phone number:", err)
    }
  }

  const handleEmailManager = () => {
    const email = managerEmail || "info@emerce.com"
    const subject = `Warehouse Inquiry - Contact Request`
    const body = `Hi ${managerName},\n\nI'm interested in discussing warehouse rental options. Please contact me at your earliest convenience.\n\nThank you!`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleScheduleCall = () => {
    // This could integrate with Calendly or similar scheduling service
    window.open("https://calendly.com/emerce-warehouse-consultation", "_blank")
  }

  // Mobile behavior - direct call
  if (isMobile && !isLoading) {
    if (variant === "floating") {
      return (
        <div className={`fixed bottom-20 left-4 right-4 z-50 ${className}`}>
          <Button
            onClick={handleMobileCall}
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
        onClick={handleMobileCall}
        className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold ${className}`}
        size="lg"
      >
        <Phone className="h-5 w-5 mr-2" />
        Call {managerName}
      </Button>
    )
  }

  // Desktop behavior - contact options modal
  if (!isMobile && !isLoading) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold ${className}`} size="lg">
            <Phone className="h-5 w-5 mr-2" />
            Contact {managerName}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="font-semibold">{managerName}</div>
                <div className="text-sm text-muted-foreground font-normal">Property Manager</div>
              </div>
            </DialogTitle>
            <DialogDescription>Choose how you'd like to get in touch with our property manager.</DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            {/* Copy Phone Number */}
            <Button
              onClick={handleCopyPhone}
              variant="outline"
              className="w-full justify-start h-auto p-4"
              disabled={copied}
            >
              <div className="flex items-center space-x-3">
                {copied ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <Copy className="h-5 w-5 text-gray-600" />
                )}
                <div className="text-left">
                  <div className="font-medium">{copied ? "Phone Number Copied!" : "Copy Phone Number"}</div>
                  <div className="text-sm text-muted-foreground">{phoneNumber}</div>
                </div>
              </div>
            </Button>

            {/* Send Email */}
            <Button onClick={handleEmailManager} variant="outline" className="w-full justify-start h-auto p-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div className="text-left">
                  <div className="font-medium">Send Email</div>
                  <div className="text-sm text-muted-foreground">{managerEmail || "info@emerce.com"}</div>
                </div>
              </div>
            </Button>

            {/* Schedule Call */}
            <Button onClick={handleScheduleCall} variant="outline" className="w-full justify-start h-auto p-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-purple-600" />
                <div className="text-left">
                  <div className="font-medium">Schedule a Call</div>
                  <div className="text-sm text-muted-foreground">Book a convenient time to discuss</div>
                </div>
              </div>
            </Button>

            {/* Direct Call (for desktop users with softphones) */}
            <Button
              onClick={() => (window.location.href = `tel:${phoneNumber}`)}
              variant="outline"
              className="w-full justify-start h-auto p-4"
            >
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600" />
                <div className="text-left">
                  <div className="font-medium">Call Now</div>
                  <div className="text-sm text-muted-foreground">If you have a softphone installed</div>
                </div>
              </div>
            </Button>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 text-center">
              💡 <strong>Tip:</strong> For immediate assistance, copy the phone number and call from your mobile device.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // Loading state
  return null
}
