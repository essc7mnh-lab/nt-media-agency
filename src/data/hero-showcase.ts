export interface HeroShowcaseCard {
  id: string;
  type: 'ads' | 'ugc' | 'commercial' | 'posters' | 'motion';
  tagEn: string;
  titleAr: string;
  videoUrl: string;
}

export const heroShowcaseData: HeroShowcaseCard[] = [
  {
    id: '1',
    type: 'ads',
    tagEn: 'PAID ADS',
    titleAr: 'إعلانات وحملات تفاعلية',
    videoUrl: '/videos/hero-2.mp4',
  },
  {
    id: '2',
    type: 'ugc',
    tagEn: 'UGC VIDEO',
    titleAr: 'محتوى صناع المحتوى',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.m4',
  },
  {
    id: '3',
    type: 'commercial',
    tagEn: 'COMMERCIAL',
    titleAr: 'منتجات العناية الفاخرة',
    videoUrl: 'https://www.w3schools.com/html/movie.mp',
  },
  {
    id: '4',
    type: 'posters',
    tagEn: 'POSTERS',
    titleAr: 'بوسترات وهوية سينمائية',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.m4',
  },
  {
    id: '5',
    type: 'motion',
    tagEn: 'MOTION',
    titleAr: 'موشن جرافيك سينمائي',
    videoUrl: '/videos/hero-1.mp4',
  },
];