import React, { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { motion } from 'framer-motion';
import { FaChartLine, FaShieldAlt, FaWallet } from 'react-icons/fa';
import ThreeJSBackground from '../components/ThreeJSBackground';
import { InvestmentCard } from '../components/InvestmentCard';
import { StatsCounter } from '../components/StatsCounter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  const { address, isConnected } = useAccount();
  const [featuredProtocols, setFeaturedProtocols] = useState([]);
  
  useEffect(() => {
    // בפרויקט אמיתי, זה יהיה API call לקבלת הפרוטוקולים המומלצים
    setFeaturedProtocols([
      {
        id: 1,
        name: 'USDT Yield Strategy',
        protocol: 'Beefy Finance',
        asset: 'USDT',
        apy: 30.5,
        tvl: 4500000,
        risk: 'Medium',
        description: 'Stable yield strategy using USDT in Beefy Finance vaults',
        icon: '/icons/usdt.png'
      },
      {
        id: 2,
        name: 'ETH-MATIC LP',
        protocol: 'Aave',
        asset: 'ETH-MATIC',
        apy: 42.8,
        tvl: 2800000,
        risk: 'High',
        description: 'Liquidity provision for ETH-MATIC pair with auto-compounding',
        icon: '/icons/eth-matic.png'
      },
      {
        id: 3,
        name: 'Stablecoin Mix',
        protocol: 'Curve',
        asset: 'USDC/DAI/USDT',
        apy: 18.2,
        tvl: 12000000,
        risk: 'Low',
        description: 'Diversified stablecoin strategy with Curve Finance',
        icon: '/icons/stables.png'
      }
    ]);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* רקע תלת-ממדי אנימטיבי */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ThreeJSBackground />
      </div>
      
      {/* תוכן העמוד */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* נאבבר */}
        <Navbar />
        
        {/* גיבור */}
        <Hero />
        
        {/* סטטיסטיקות */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StatsCounter 
              icon={<FaChartLine className="text-blue-400 text-4xl mb-4" />}
              value="$24.5M"
              label="Total Value Locked"
            />
            <StatsCounter 
              icon={<FaWallet className="text-purple-400 text-4xl mb-4" />}
              value="12,450+"
              label="Active Users"
            />
            <StatsCounter 
              icon={<FaShieldAlt className="text-green-400 text-4xl mb-4" />}
              value="100%"
              label="Secure Smart Contracts"
            />
          </div>
        </section>
        
        {/* הזדמנויות השקעה */}
        <section id="investments" className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Featured Investment Opportunities</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Curated selection of the highest performing yield strategies across DeFi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProtocols.map(protocol => (
              <InvestmentCard 
                key={protocol.id}
                protocol={protocol}
                onInvest={() => isConnected ? console.log('Invest in', protocol.name) : alert('Please connect your wallet')}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-transparent border border-gray-400 rounded-xl font-medium hover:border-white transition-all">
              View All Opportunities
            </button>
          </div>
        </section>
        
        {/* איך זה עובד */}
        <section id="features" className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">How It Works</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform uses smart contracts to automate the entire yield farming process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl border border-gray-700">
              <div className="bg-blue-500 bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Connect Wallet</h4>
              <p className="text-gray-300">
                Simply connect your MetaMask wallet to get started. No registration required.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl border border-gray-700">
              <div className="bg-purple-500 bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Choose Strategy</h4>
              <p className="text-gray-300">
                Select from our curated list of yield farming strategies based on your risk preference.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl border border-gray-700">
              <div className="bg-green-500 bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Earn Yield</h4>
              <p className="text-gray-300">
                Our smart contracts automatically optimize your position to maximize returns.
              </p>
            </div>
          </div>
        </section>
        
        {/* קריאה לפעולה */}
        <section className="mb-24">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Start Earning?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users already maximizing their crypto returns with our platform.
            </p>
            <button className="px-8 py-4 bg-white text-purple-900 rounded-xl font-medium text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Launch App
            </button>
          </div>
        </section>
        
        {/* פוטר */}
        <Footer />
      </div>
    </div>
  );
}
