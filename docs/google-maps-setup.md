# 🗺️ Google Maps Integration Setup Guide

## Overview
The warehouse listing now includes real Google Maps integration with smart device detection for directions.

## 🔧 Setup Instructions

### Step 1: Get Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the following APIs:
   - Maps Embed API
   - Maps JavaScript API (optional, for advanced features)
4. Create credentials (API Key)
5. Restrict the API key to your domain for security

### Step 2: Add Environment Variable
Add to your `.env.local` file:
\`\`\`
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
\`\`\`

### Step 3: Configure API Key Restrictions (Recommended)
In Google Cloud Console:
1. Go to Credentials
2. Click on your API key
3. Under "Application restrictions":
   - Select "HTTP referrers"
   - Add your domains: `localhost:3000/*`, `yourdomain.com/*`
4. Under "API restrictions":
   - Select "Restrict key"
   - Choose "Maps Embed API"

## 📱 Device Detection Features

### Desktop Behavior:
- **Get Directions** → Opens Google Maps web version
- **URL Format**: `https://www.google.com/maps/dir/?api=1&destination=LAT,LNG`
- Opens in new tab/window

### Mobile Behavior:
- **Open in Maps** → Tries to open native Maps app
- **URL Format**: `https://maps.google.com/maps?daddr=LAT,LNG`
- Falls back to web version if app not available

## 🎯 Features Implemented

### GoogleMaps Component:
- ✅ **Real Google Maps** - Embedded interactive map
- ✅ **Loading States** - Smooth loading experience
- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **Floating Controls** - View and directions buttons
- ✅ **Location Info** - Property details overlay

### Device Detection:
- ✅ **User Agent Detection** - Identifies mobile devices
- ✅ **Screen Size Detection** - Responsive breakpoints
- ✅ **Dynamic Button Text** - Changes based on device
- ✅ **Smart URL Routing** - Appropriate maps app/web

### Warehouse Integration:
- ✅ **Coordinate Mapping** - Uses warehouse lat/lng data
- ✅ **Property Overlay** - Shows warehouse info on map
- ✅ **Status Badges** - Available/Coming Soon indicators
- ✅ **Seamless Integration** - Replaces placeholder maps

## 🔒 Security & Performance

### API Key Security:
- Environment variable for API key
- Domain restrictions recommended
- API restrictions to specific services

### Performance:
- Lazy loading for maps
- Fallback embed URL without API key
- Loading states for better UX

## 🚀 Usage Examples

### Basic Implementation:
\`\`\`tsx
<GoogleMaps 
  location={{
    lat: 18.6298,
    lng: 73.7997,
    address: "Pune, Maharashtra",
    title: "Modern Warehouse - Pune"
  }}
/>
\`\`\`

### With Custom Styling:
\`\`\`tsx
<GoogleMaps 
  location={mapLocation}
  className="h-96 rounded-lg shadow-lg"
/>
\`\`\`

## 🛠️ Troubleshooting

### Common Issues:

1. **Map not loading**:
   - Check API key is correct
   - Verify domain restrictions
   - Check browser console for errors

2. **Directions not working**:
   - Verify coordinates are valid
   - Check device detection logic
   - Test on different devices

3. **API quota exceeded**:
   - Monitor usage in Google Cloud Console
   - Consider implementing usage limits
   - Upgrade plan if needed

## 📊 Current Warehouse Locations

The system includes sample warehouses in:
- **Pune**: 18.6298, 73.7997
- **Mumbai**: 19.2952, 73.0544  
- **Bangalore**: 12.8456, 77.6603

All locations are properly mapped and ready for directions!
