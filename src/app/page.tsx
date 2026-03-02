import dynamic from 'next/dynamic';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { StrategySection } from '@/components/StrategySection';
import { StatsCounter } from '@/components/StatsCounter';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { Footer } from '@/components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <AnimatedBackground />
            <Navbar />
            <main>
                <HeroSection />
                <ServicesSection />
                <StrategySection />
                <StatsCounter />
                <TestimonialSlider />
            </main>
            <Footer />
        </div>
    );
}
