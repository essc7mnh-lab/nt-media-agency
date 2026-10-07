import dynamic from 'next/dynamic';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { NoteBanner } from '../components/sections/NoteBanner';

// تحميل ديناميكي مجزأ للمكونات الحركية والثقيلة لتحسين الأداء
const StorePlatformsMarquee = dynamic(
  () => import('../components/sections/StorePlatformsMarquee').then((mod) => mod.StorePlatformsMarquee)
);

const ChannelTemplatesSection = dynamic(
  () => import('../components/sections/ChannelTemplatesSection').then((mod) => mod.ChannelTemplatesSection)
);

const PricingSection = dynamic(
  () => import('../components/sections/PricingSection').then((mod) => mod.PricingSection)
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col relative overflow-hidden">
      {/* شريط التنقل العلوي الزجاجي */}
      <Navbar />

      {/* المحتوى الرئيسي */}
      <main className="flex-grow relative z-10">
        <HeroSection />
        <StorePlatformsMarquee />
        <ChannelTemplatesSection />
        <PricingSection />
        <ServicesSection />
        <NoteBanner />
      </main>

      {/* التذييل ومعلومات التواصل */}
      <Footer />
    </div>
  );
}