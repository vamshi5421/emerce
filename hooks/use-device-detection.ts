"use client"

import { useState, useEffect } from "react"

export function useDeviceDetection() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkDevice = () => {
      // Check if it's a mobile device based on user agent
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

      // Mobile device detection
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
      const isMobileDevice = mobileRegex.test(userAgent.toLowerCase())

      // Also check screen width as a fallback
      const isSmallScreen = window.innerWidth <= 768

      setIsMobile(isMobileDevice || isSmallScreen)
      setIsLoading(false)
    }

    checkDevice()

    // Listen for window resize to update mobile status
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 768
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
      const isMobileDevice = mobileRegex.test(userAgent.toLowerCase())

      setIsMobile(isMobileDevice || isSmallScreen)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { isMobile, isLoading }
}
