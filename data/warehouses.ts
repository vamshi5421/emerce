import type { Warehouse } from '@/types/warehouse';

export const warehouses: Warehouse[] = [
  {
    id: 'hyderabad-modern-warehouse',
    slug: 'hyderabad-modern-warehouse-20000-sqft',
    title: 'Modern Warehouse - Hyderabad',
    description:
      'Prime industrial location with excellent connectivity and state-of-the-art facilities',
    location: {
      city: 'Shamshabad',
      state: 'Telangana',
      address:
        'Survey No. 195, Hameedullah Nagar,Shamshabad, Hyderabad, Telangana – 501218, India',
      coordinates: {
        lat: 17.225801,
        lng: 78.378917,
      },
    },
    size: '8,400 sqft',
    price: {
      monthly: '₹1.97L',
      perSqft: '₹23.5',
    },
    status: 'available',
    images: {
      main: '/warehouses/hyderabad/gallery-1.jpeg',
      gallery: [
        '/warehouses/hyderabad/gallery-2.jpeg',
        '/warehouses/hyderabad/gallery-3.jpeg',
        '/warehouses/hyderabad/gallery-4.png',
        '/warehouses/hyderabad/gallery-5.png',
      ],
    },
    features: [
      '24/7 Security',
      'Loading Docks',
      'Office Space',
      'Parking Available',
      'CCTV Surveillance',
    ],
    amenities: [
      {
        category: 'Security & Safety',
        items: [
          '24/7 Security Guards',
          'CCTV Surveillance',
          'Fire Safety Systems',
          'Access Control',
          'Emergency Exits',
        ],
      },
      {
        category: 'Infrastructure',
        items: [
          '4 Loading Docks',
          'Ground Level Access',
          'Wide Corridors',
          'High Ceiling',
          'LED Lighting',
        ],
      },
      {
        category: 'Utilities',
        items: [
          'High-Speed Internet',
          'Power Backup',
          'Water Supply',
          'Waste Management',
          'Parking for 50+ Vehicles',
        ],
      },
      {
        category: 'Additional Services',
        items: [
          'Office Space Included',
          'Conference Room',
          'Cafeteria',
          'Maintenance Support',
          '24/7 Access',
        ],
      },
    ],
    nearbyLandmarks: [
      {
        name: 'Rajiv Gandhi International Airport',
        distance: '7.1 km',
        type: 'airport',
      },
      { name: 'Mumbai-Pune Expressway', distance: '2 km', type: 'highway' },
      { name: 'Rajiv Gandhi IT Park', distance: '8 km', type: 'mall' },
      { name: 'Pune Railway Station', distance: '12 km', type: 'railway' },
      { name: 'Phoenix MarketCity', distance: '5 km', type: 'mall' },
      { name: 'Ruby Hall Clinic', distance: '7 km', type: 'hospital' },
    ],
    specifications: {
      totalArea: '8,400 sqft',
      storageArea: '8,400 sqft',
      officeArea: '2,000 sqft',
      loadingDocks: 4,
      parkingSpaces: 6,
      ceilingHeight: '32 feet',
      floorLoad: '500 kg/sqm',
    },
    availability: {
      immediate: true,
    },
    contact: {
      manager: 'Hanmanthu Nayak',
      phone: '+91 99893 08335',
      email: 'india.emerce@gmail.com',
    },
    seo: {
      metaTitle:
        'Warehouse for Rent in Shamshabad, Hyderabad - 8,400 sqft | Emerce',
      metaDescription:
        'Premium 8,400 sqft warehouse for rent in Hyderabad with excellent connectivity, modern facilities, and competitive rates. Contact us today!',
    },
  },
  {
    id: 'mumbai-distribution-center',
    slug: 'mumbai-distribution-center-35000-sqft',
    title: 'Distribution Center - Mumbai',
    description:
      'Strategic location near major highways and ports with excellent logistics connectivity',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Survey No. 123, Logistics Park, Bhiwandi, Mumbai - 421302',
      coordinates: {
        lat: 19.2952,
        lng: 73.0544,
      },
    },
    size: '35,000 sqft',
    price: {
      monthly: '₹4.2L',
      perSqft: '₹12',
    },
    status: 'leased',
    images: {
      main: '/stockimage.jpeg',
      gallery: [
        '/warehouses/mumbai/gallery-1.jpg',
        '/warehouses/mumbai/gallery-2.jpg',
        '/warehouses/mumbai/gallery-3.jpg',
        '/warehouses/mumbai/gallery-4.jpg',
        '/warehouses/mumbai/gallery-5.jpg',
      ],
    },
    features: [
      'Highway Access',
      'Port Connectivity',
      'Large Loading Area',
      '24/7 Operations',
      'Cold Storage Available',
    ],
    amenities: [
      {
        category: 'Logistics & Transport',
        items: [
          'Highway Access',
          'Port Connectivity',
          'Multi-modal Transport',
          'Truck Parking',
          'Container Handling',
        ],
      },
      {
        category: 'Storage Solutions',
        items: [
          'Cold Storage',
          'Dry Storage',
          'Racking Systems',
          'Inventory Management',
          'Temperature Control',
        ],
      },
      {
        category: 'Operations',
        items: [
          '24/7 Operations',
          'Loading/Unloading',
          'Customs Clearance',
          'Documentation',
          'Quality Control',
        ],
      },
      {
        category: 'Facilities',
        items: [
          'Administrative Office',
          'Rest Areas',
          'Canteen',
          'Medical Room',
          'Vehicle Maintenance',
        ],
      },
    ],
    nearbyLandmarks: [
      { name: 'JNPT Port', distance: '25 km', type: 'port' },
      { name: 'Mumbai-Nashik Highway', distance: '1 km', type: 'highway' },
      {
        name: 'Chhatrapati Shivaji Airport',
        distance: '35 km',
        type: 'airport',
      },
      { name: 'Bhiwandi Railway Station', distance: '8 km', type: 'railway' },
      { name: 'R-Mall', distance: '12 km', type: 'mall' },
      { name: 'Indira Gandhi Hospital', distance: '6 km', type: 'hospital' },
    ],
    specifications: {
      totalArea: '35,000 sqft',
      storageArea: '30,000 sqft',
      officeArea: '3,000 sqft',
      loadingDocks: 8,
      parkingSpaces: 100,
      ceilingHeight: '40 feet',
      floorLoad: '750 kg/sqm',
    },
    availability: {
      immediate: false,
      availableFrom: 'Currently Leased',
    },
    contact: {
      manager: 'Priya Sharma',
      phone: '+91 98765 43211',
      email: 'priya@emerce.com',
    },
    seo: {
      metaTitle:
        'Distribution Center for Rent in Mumbai - 35,000 sqft | Emerce',
      metaDescription:
        'Large 35,000 sqft distribution center in Mumbai with port connectivity, highway access, and modern logistics facilities.',
    },
  },
  {
    id: 'bangalore-tech-hub',
    slug: 'bangalore-tech-hub-warehouse-15000-sqft',
    title: 'Tech Hub Warehouse - Bangalore',
    description:
      "Modern facility in the heart of India's tech capital with advanced infrastructure",
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      address: 'Electronic City Phase 2, Hosur Road, Bangalore - 560100',
      coordinates: {
        lat: 12.8456,
        lng: 77.6603,
      },
    },
    size: '15,000 sqft',
    price: {
      monthly: '₹1.8L',
      perSqft: '₹12',
    },
    status: 'coming-soon',
    images: {
      main: '/warehouse-hero-bg.jpg',
      gallery: [
        '/warehouses/bangalore/gallery-1.jpg',
        '/warehouses/bangalore/gallery-2.jpg',
        '/warehouses/bangalore/gallery-3.jpg',
        '/warehouses/bangalore/gallery-4.jpg',
      ],
    },
    features: [
      'Tech Infrastructure',
      'High-Speed Internet',
      'Modern Facilities',
      'IT Support',
      'Flexible Spaces',
    ],
    amenities: [
      {
        category: 'Technology',
        items: [
          'High-Speed Internet',
          'IT Infrastructure',
          'Server Room',
          'Tech Support',
          'Smart Building Systems',
        ],
      },
      {
        category: 'Workspace',
        items: [
          'Flexible Spaces',
          'Modern Office',
          'Meeting Rooms',
          'Co-working Areas',
          'Innovation Labs',
        ],
      },
      {
        category: 'Connectivity',
        items: [
          'Metro Connectivity',
          'IT Corridor Access',
          'Airport Proximity',
          'Tech Park Access',
          'Public Transport',
        ],
      },
      {
        category: 'Amenities',
        items: [
          'Food Court',
          'Gym',
          'Recreation Area',
          'Childcare',
          'Medical Center',
        ],
      },
    ],
    nearbyLandmarks: [
      {
        name: 'Kempegowda International Airport',
        distance: '45 km',
        type: 'airport',
      },
      { name: 'Electronic City Metro', distance: '2 km', type: 'railway' },
      { name: 'Hosur Road', distance: '500 m', type: 'highway' },
      { name: 'Forum Mall', distance: '3 km', type: 'mall' },
      { name: 'Narayana Health', distance: '4 km', type: 'hospital' },
      { name: 'Infosys Campus', distance: '1 km', type: 'school' },
    ],
    specifications: {
      totalArea: '15,000 sqft',
      storageArea: '12,000 sqft',
      officeArea: '2,500 sqft',
      loadingDocks: 3,
      parkingSpaces: 40,
      ceilingHeight: '28 feet',
      floorLoad: '400 kg/sqm',
    },
    availability: {
      immediate: false,
      availableFrom: 'Q3 2024',
    },
    contact: {
      manager: 'Arjun Reddy',
      phone: '+91 98765 43212',
      email: 'arjun@emerce.com',
    },
    seo: {
      metaTitle: 'Tech Warehouse for Rent in Bangalore - 15,000 sqft | Emerce',
      metaDescription:
        "Modern tech warehouse in Bangalore's Electronic City with advanced infrastructure and IT facilities.",
    },
  },
];

// Helper function to get warehouse by slug
export function getWarehouseBySlug(slug: string): Warehouse | undefined {
  return warehouses.find((warehouse) => warehouse.slug === slug);
}

// Helper function to get all warehouse slugs for static generation
export function getAllWarehouseSlugs(): string[] {
  return warehouses.map((warehouse) => warehouse.slug);
}
