export interface TemplateCategory {
  id: string;
  nameAr: string;
  iconName: string;
}

export interface TemplateCard {
  id: string;
  title: string;
  category: string;
  type: 'video' | 'image';
  mediaUrl: string;
  posterUrl?: string;
  badge?: string;
  aspect: 'square' | 'portrait' | 'tall';
}

export const templateCategories: TemplateCategory[] = [
  { id: 'all', nameAr: 'الجميع', iconName: 'Grid' },
  { id: 'product', nameAr: 'صور المنتج', iconName: 'Box' },
  { id: 'ugc', nameAr: 'مقاطع فيديو UGC', iconName: 'Video' },
  { id: 'ads', nameAr: 'إعلانات', iconName: 'Tv' },
  { id: 'ecommerce', nameAr: 'سوق إلكتروني', iconName: 'ShoppingBag' },
  { id: 'motion', nameAr: 'الرسوم المتحركة', iconName: 'Layers' },
];

export const templateCardsData: TemplateCard[] = [
  {
    id: '1',
    title: 'مشروب غازي منعش',
    category: 'ads',
    type: 'video',
    // فيديو إعلاني سريع ومفتوح 100%
    mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    badge: 'ADS',
    aspect: 'portrait',
  },
  {
    id: '2',
    title: 'علبة عصير سينمائية',
    category: 'product',
    type: 'video',
    // فيديو سينمائي مفتوح
    mediaUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    badge: '3D CAN',
    aspect: 'tall',
  },
  {
    id: '3',
    title: 'تغليف سناك وشيبس فاخر',
    category: 'motion',
    type: 'video',
    mediaUrl: 'https://www.w3schools.com/html/movie.mp4',
    badge: 'MOTION',
    aspect: 'square',
  },
  {
    id: '4',
    title: 'سماعات ذكية بتقنية ANC',
    category: 'ecommerce',
    type: 'video',
    mediaUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    badge: 'ECOMMERCE',
    aspect: 'square',
  },
  {
    id: '5',
    title: 'عسل مانوكا طبيعي فاخر',
    category: 'product',
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    badge: 'ORGANIC',
    aspect: 'portrait',
  },
  {
    id: '6',
    title: 'زجاجات قهوة ومشروبات مركزة',
    category: 'ecommerce',
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    badge: 'STORE',
    aspect: 'tall',
  },
  {
    id: '7',
    title: 'محتوى تفاعلي لصناع المحتوى',
    category: 'ugc',
    type: 'video',
    mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    badge: 'UGC',
    aspect: 'portrait',
  },
];