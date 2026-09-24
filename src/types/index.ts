export interface PackageItem {
  id: string;
  name: string;
  enName: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  isCustomQuote?: boolean;
  ctaText: string;
}

export interface ServiceCategory {
  title: string;
  items: string[];
}

export interface AgencyContact {
  phones: string[];
  location: string;
  defaultWhatsApp: string;
}