import Navbar from '../components/Navbar';
import Hero from '../components/hero';
import WhyInvestox from '../components/whyInvestox';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';
import InvestmentOverview from '../components/InvestmentOverview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyInvestox />
      <InvestmentOverview />
      <Features />
      <CallToAction />
      <Footer />
    </>
  );
}
