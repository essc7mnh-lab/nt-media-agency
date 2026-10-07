// =========================================================================
// NT Media Agency - Consolidated Static Showcase Database (100% Local / Zero Latency)
// =========================================================================

export interface HeroShowcaseCard {
  id: string;
  type: 'ads' | 'ugc' | 'commercial' | 'posters' | 'motion';
  tagEn: string;
  titleAr: string;
  videoUrl: string;
  poster: string;
}

export interface ChannelMediaItem {
  id: string;
  type: 'video' | 'image';
  url: string;
  aspect: string;
  category: 'product' | 'ugc' | 'ads' | 'marketplace' | 'motion';
  poster?: string;
}

export interface ShowcaseCategory {
  id: string;
  nameAr: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  aspect: string;
  videoUrl: string;
  poster?: string;
}

export interface ServiceTheme {
  primaryAccent: string;
  glowClass: string;
  badgeBorder: string;
  laserGradient: string;
  activeTabClass: string;
}

export interface ServicePageData {
  theme: ServiceTheme;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  transformationProducts: {
    id: string;
    title: string;
    subtitle: string;
    rawImage: string;
    videoUrl: string;
  }[];
  galleryCategories: { id: string; name: string }[];
  galleryItems: ShowcaseItem[];
}

// -------------------------------------------------------------------------
// 1. بيانات معرض الهيرو البانورامي ثلاثي الأبعاد (Hero 3D Arc Showcase)
// -------------------------------------------------------------------------
export const heroShowcaseData: readonly HeroShowcaseCard[] = [
  {
    id: '1',
    type: 'ads',
    tagEn: 'PAID ADS',
    titleAr: 'تصوير إعلانات سينمائي',
    videoUrl: '/videos/hero-2.mp4',
    poster: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '2',
    type: 'ugc',
    tagEn: 'UGC VIDEO',
    titleAr: 'مونتاج صناع المحتوى',
    videoUrl: '/videos/hero-5.mp4',
    poster: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '3',
    type: 'commercial',
    tagEn: 'COMMERCIAL',
    titleAr: 'تصميم المتاجر الإلكترونية',
    videoUrl: '/videos/hero-4.mp4',
    poster: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '4',
    type: 'posters',
    tagEn: 'POSTERS',
    titleAr: 'التفاعلات التسويقية',
    videoUrl: '/videos/hero-3.mp4',
    poster: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '5',
    type: 'motion',
    tagEn: 'MOTION',
    titleAr: 'تحليل البيانات والأنظمة',
    videoUrl: '/videos/hero-1.mp4',
    poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80',
  },
] as const;

// -------------------------------------------------------------------------
// 2. بيانات قوالب القنوات والوسائط المتدفقة (Channel Templates Media Stream)
// -------------------------------------------------------------------------
export const channelMediaDatabase: readonly ChannelMediaItem[] = [
  // 1. تحريك المنتجات
  { id: 'p1', category: 'product', type: 'video', url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', aspect: 'aspect-[3/4]', poster: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80' },
  { id: 'p2', category: 'product', type: 'image', url: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-square' },
  { id: 'p3', category: 'product', type: 'image', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-[4/5]' },
  { id: 'p4', category: 'product', type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', aspect: 'aspect-[3/4]', poster: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80' },

  // 2. فيديوهات UGC
  { id: 'u1', category: 'ugc', type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', aspect: 'aspect-[3/4]', poster: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80' },
  { id: 'u2', category: 'ugc', type: 'image', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-square' },
  { id: 'u3', category: 'ugc', type: 'video', url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', aspect: 'aspect-[4/5]', poster: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80' },
  { id: 'u4', category: 'ugc', type: 'image', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-[3/4]' },

  // 3. إعلانات وحملات
  { id: 'a1', category: 'ads', type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', aspect: 'aspect-[3/4]', poster: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80' },
  { id: 'a2', category: 'ads', type: 'image', url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-square' },
  { id: 'a3', category: 'ads', type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', aspect: 'aspect-[4/5]', poster: 'https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?auto=format&fit=crop&w=500&q=80' },
  { id: 'a4', category: 'ads', type: 'image', url: 'https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-square' },

  // 4. منتجات المتاجر
  { id: 'm1', category: 'marketplace', type: 'image', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-square' },
  { id: 'm2', category: 'marketplace', type: 'video', url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', aspect: 'aspect-[3/4]', poster: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80' },
  { id: 'm3', category: 'marketplace', type: 'image', url: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-[4/5]' },
  { id: 'm4', category: 'marketplace', type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', aspect: 'aspect-square', poster: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=500&q=80' },

  // 5. مونتاج ثلاثي الأبعاد
  { id: 't1', category: 'motion', type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', aspect: 'aspect-[3/4]', poster: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80' },
  { id: 't2', category: 'motion', type: 'image', url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-square' },
  { id: 't3', category: 'motion', type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', aspect: 'aspect-[4/5]', poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80' },
  { id: 't4', category: 'motion', type: 'image', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-square' },
] as const;

// -------------------------------------------------------------------------
// 3. بيانات معارض الخدمات التفصيلية (Service Showroom Data)
// -------------------------------------------------------------------------
export const servicesShowcaseMap: Record<string, ServicePageData> = {
  'video-production': {
    theme: {
      primaryAccent: '#0284c7',
      glowClass: 'from-sky-500/10 via-indigo-500/5 to-transparent',
      badgeBorder: 'border-sky-200 text-sky-700 bg-sky-50',
      laserGradient: 'from-sky-500 via-rose-500 to-sky-500',
      activeTabClass: 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm',
    },
    badge: 'استوديو المونتاج وتحريك المنتجات 3D',
    titleLine1: 'حوّل صور منتجاتك الصامتة',
    titleLine2: 'إلى مقاطع إعلانية سينمائية تبيع',
    description: 'نأخذ صور منتجاتك العادية ونمررها عبر خط الإنتاج الإبداعي لنحولها إلى مقاطع موشن ثلاثية الأبعاد، إعلانات UGC، ونماذج سينمائية تخطف الأنظار في أول 3 ثوانٍ.',
    transformationProducts: [
      { id: 'vp1', title: 'فتح العلبة (Unboxing)', subtitle: 'من أول لمسة، رد فعل حقيقي', rawImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'vp2', title: 'إعلان تلفزيوني سينمائي', subtitle: 'إعلان سينمائي، سرد كامل', rawImage: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'vp3', title: 'المحتوى التفاعلي (UGC)', subtitle: 'شخص حقيقي، وتوصية صادقة', rawImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'vp4', title: 'تحريك منتجات 3D فاخر', subtitle: 'إضاءة استوديو، ومحاكاة سوائل', rawImage: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    ],
    galleryCategories: [
      { id: 'all', name: 'جميع الأعمال' },
      { id: '3d-product', name: 'تحريك منتجات 3D' },
      { id: 'ugc', name: 'إعلانات UGC' },
      { id: 'cinematic', name: 'إعلانات سينمائية' },
    ],
    galleryItems: [
      { id: 'vp-g1', title: 'علبة عصير سينمائية ثلاثية الأبعاد', category: '3d-product', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'vp-g2', title: 'مستحضرات عناية فاخرة مع حركة إضاءة', category: '3d-product', aspect: 'aspect-square', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'vp-g3', title: 'إعلان UGC تفاعلي للتيك توك', category: 'ugc', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'vp-g4', title: 'تغليف سناك فاخر ثلاثي الأبعاد', category: '3d-product', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'vp-g5', title: 'إعلان تجاري عريض بجودة فائقة', category: 'cinematic', aspect: 'aspect-square', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'vp-g6', title: 'مراجعة منتج وتجربة حية', category: 'ugc', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
    ],
  },
  'social-media': {
    theme: {
      primaryAccent: '#e11d48',
      glowClass: 'from-rose-500/10 via-pink-500/5 to-transparent',
      badgeBorder: 'border-rose-200 text-rose-700 bg-rose-50',
      laserGradient: 'from-rose-400 via-pink-500 to-rose-400',
      activeTabClass: 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm',
    },
    badge: 'إدارة وتنمية منصات التواصل الاجتماعي',
    titleLine1: 'صناعة محتوى استراتيجي',
    titleLine2: 'يسيطر على المنصات ويضاعف تفاعل جمهورك',
    description: 'من الفكرة وكتابة السيناريو الخاطف إلى المونتاج السريع وجداول النشر؛ نصنع لعلامتك حضوراً مستمراً على تيك توك، إنستغرام، وسناب شات يحول المتابعين إلى مشترين.',
    transformationProducts: [
      { id: 'sm1', title: 'ريلز تفاعلي سريع الانتشار', subtitle: 'Hook قوي يجذب المشاهد في ثانيتين', rawImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'sm2', title: 'محتوى تيك توك وسناب شات', subtitle: 'سرد قصصي حركي مناسب للخوارزميات', rawImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'sm3', title: 'سلسلة إعلانات عروض حصرية', subtitle: 'موشن جرافيك يدفع العميل للشراء فوراً', rawImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    ],
    galleryCategories: [
      { id: 'all', name: 'جميع الأعمال' },
      { id: 'reels', name: 'ريلز وإنستغرام' },
      { id: 'tiktok', name: 'تيك توك وسناب' },
      { id: 'campaigns', name: 'حملات إطلاق سريعة' },
    ],
    galleryItems: [
      { id: 'sm-g1', title: 'ريلز فيروسي لزيادة المتابعين والمبيعات', category: 'reels', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'sm-g2', title: 'فيديو تيك توك بسيناريو Hook خاطف', category: 'tiktok', aspect: 'aspect-[3/4]', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'sm-g3', title: 'فيديو إطلاق موسم التخفيضات والعروض', category: 'campaigns', aspect: 'aspect-square', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'sm-g4', title: 'محتوى تثقيفي يجيب على استفسارات العملاء', category: 'reels', aspect: 'aspect-[3/4]', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'sm-g5', title: 'إعلان سناب شات بعدسات وتأثيرات حركية', category: 'tiktok', aspect: 'aspect-square', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'sm-g6', title: 'حملة بناء مجتمع وتفاعل عضوي مستمر', category: 'campaigns', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    ],
  },
  'branding-design': {
    theme: {
      primaryAccent: '#9333ea',
      glowClass: 'from-purple-500/10 via-fuchsia-500/5 to-transparent',
      badgeBorder: 'border-purple-200 text-purple-700 bg-purple-50',
      laserGradient: 'from-purple-400 via-fuchsia-500 to-purple-400',
      activeTabClass: 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm',
    },
    badge: 'أنظمة الهوية البصرية وتغليف المنتجات 3D',
    titleLine1: 'نبني لعلامتك التجارية هيبة استثنائية',
    titleLine2: 'وحضوراً بصرياً يخلد في الأذهان',
    description: 'نطور الأنظمة البصرية المتكاملة من الشعارات والأختام ثلاثية الأبعاد إلى تصميم عبوات المنتجات وموك-آب العرض الواقعي لرفع القيمة السوقية لبراندك.',
    transformationProducts: [
      { id: 'bd1', title: 'تصميم وتغليف عبوات فاخرة', subtitle: 'من مسودة ثنائية الأبعاد إلى مجسم حي', rawImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'bd2', title: 'شعار وهوية نيون ثلاثية الأبعاد', subtitle: 'حركة سينمائية تمنح الشعار عمقاً وهيبة', rawImage: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'bd3', title: 'دليل هوية وتطبيقات واقعية', subtitle: 'محاكاة لمنتجات البراند في بيئة واقعية', rawImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    ],
    galleryCategories: [
      { id: 'all', name: 'جميع الأعمال' },
      { id: 'packaging', name: 'تغليف وعبوات 3D' },
      { id: 'logos', name: 'شعارات وأختام حركية' },
      { id: 'systems', name: 'أدلة الهوية المتكاملة' },
    ],
    galleryItems: [
      { id: 'bd-g1', title: 'تصميم عبوات عطور فاخرة ثلاثية الأبعاد', category: 'packaging', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'bd-g2', title: 'شعار نيون معدني مع انعكاسات إضاءة', category: 'logos', aspect: 'aspect-square', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'bd-g3', title: 'تغليف أكياس قهوة متخصصة فاخرة', category: 'packaging', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'bd-g4', title: 'دليل الهوية البصرية لعلامة تجارية كبرى', category: 'systems', aspect: 'aspect-square', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'bd-g5', title: 'ختم هولوجرامي ثلاثي الأبعاد للتوثيق', category: 'logos', aspect: 'aspect-[3/4]', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'bd-g6', title: 'علب شحن وتغليف تترك أثراً لدى العميل', category: 'packaging', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    ],
  },
  'web-systems': {
    theme: {
      primaryAccent: '#059669',
      glowClass: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      badgeBorder: 'border-emerald-200 text-emerald-700 bg-emerald-50',
      laserGradient: 'from-emerald-400 via-teal-400 to-emerald-400',
      activeTabClass: 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm',
    },
    badge: 'استوديو تطوير المتاجر والتطبيقات والأنظمة البرمجية',
    titleLine1: 'متاجر سريعة وتطبيقات وأنظمة',
    titleLine2: 'مبرمجة لرفع التحويل وتكبير المبيعات',
    description: 'نبني متاجر إلكترونية استثنائية على منصات زد، سلة، وشوبيفاي مع تطبيقات جوال ولوحات تحكم ERP تدمج بوابات الدفع والشحن في تجربة شراء سلسة وسريعة.',
    transformationProducts: [
      { id: 'ws1', title: 'واجهة متجر إلكتروني فائق السرعة', subtitle: 'تجاوب فوري وتجربة شراء سلسة للجوال', rawImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'ws2', title: 'لوحة تحكم وإدارة مخزون ذكية', subtitle: 'إحصائيات مباشرة وربط مع بوابات الدفع', rawImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'ws3', title: 'تطبيق جوال تفاعلي (iOS & Android)', subtitle: 'تجربة مستخدم سريعة وإشعارات شراء فورية', rawImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
    ],
    galleryCategories: [
      { id: 'all', name: 'جميع المشاريع البرمجية' },
      { id: 'websites', name: 'مواقع ومتاجر إلكترونية' },
      { id: 'apps', name: 'تطبيقات الجوال' },
      { id: 'dashboards', name: 'لوحات تحكم وأنظمة' },
    ],
    galleryItems: [
      { id: 'ws-g1', title: 'متجر سلة وزد فائق السرعة بتصميم مخصص', category: 'websites', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'ws-g2', title: 'تطبيق متجر جوال متجاوب (Flutter / React Native)', category: 'apps', aspect: 'aspect-square', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'ws-g3', title: 'لوحة تحكم إحصائية وإدارة مخزون ومبيعات سحابية', category: 'dashboards', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'ws-g4', title: 'متجر شوبيفاي دولي مع دفع متعدد العملات', category: 'websites', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'ws-g5', title: 'تطبيق توصيل وخدمات متكامل مع خريطة حية', category: 'apps', aspect: 'aspect-square', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'ws-g6', title: 'نظام إدارة حجوزات وعيادات مع بوابة دفع إلكتروني', category: 'dashboards', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
    ],
  },
};
