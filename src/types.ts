export interface PriceData {
  gold22kPer10g: number;
  gold24kPer10g: number;
  gold18kPer10g: number;
  silverPerKg: number;
  lastUpdated: string;
}

export interface CollectionItem {
  id: string;
  name: string;
  category: string; // 'gold' | 'silver' | '18k' | '22k' | 'bridal' | 'necklace' | 'chain' | 'bangle' | 'bracelet' | 'ring' | 'earring' | 'pendant' | 'anklet' | 'kids'
  subCategory: string;
  purity: string;
  weight?: string;
  priceType?: 'custom' | 'rate-based';
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: 'image' | 'video';
  videoUrl?: string;
  category: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}
