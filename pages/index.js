import Hero from '../components/hero';
import WhyInvestox from '../components/whyInvestox';
import Features from '../components/Features';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyInvestox />
      <Features /> {/* ← זה מה שחסר אצלך */}
    </>
  );
}
