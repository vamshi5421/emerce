export interface Warehouse {
  id: string;
  slug: string;
  title: string;
  description: string;
  location: {
    city: string;
    state: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  size: string;
  price: {
    monthly: string;
    perSqft: string;
  };
  status: 'available' | 'coming-soon' | 'leased';
  images: {
    main: string;
    gallery: string[];
  };
  features: string[];
  amenities: {
    category: string;
    items: string[];
  }[];
  nearbyLandmarks: {
    name: string;
    distance: string;
    type:
      | 'airport'
      | 'highway'
      | 'railway'
      | 'port'
      | 'mall'
      | 'hospital'
      | 'school';
  }[];
  specifications: {
    totalArea: string;
    storageArea: string;
    officeArea: string;
    loadingDocks: number;
    parkingSpaces: number;
    ceilingHeight: string;
    floorLoad: string;
  };
  availability: {
    immediate: boolean;
    availableFrom?: string;
  };
  contact: {
    manager: string;
    phone: string;
    email: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}
