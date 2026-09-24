import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { PricingSection } from '../components/sections/PricingSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { NoteBanner } from '../components/sections/NoteBanner';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1222] text-slate-100 flex flex-col relative overflow-hidden">
      {/* شريط التنقل العلوي الزجاجي */}
      <Navbar />

      {/* المحتوى الرئيسي */}
      <main className="flex-grow relative z-10">
        <HeroSection />
        <PricingSection />
        <ServicesSection />
        <NoteBanner />
      </main>

      {/* التذييل ومعلومات التواصل */}
      <Footer />

      {/* زر الواتساب العائم */}
      <WhatsAppButton />
    </div>
  );
}