import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaShieldAlt, FaWallet } from 'react-icons/fa';
import ThreeJSBackground from '../components/ThreeJSBackground';
import { InvestmentCard } from '../components/InvestmentCard';
import { StatsCounter } from '../components/StatsCounter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const [featuredProtocols, setFeaturedProtocols] = useState([]);
  
  useEffect(() => {
    // מידע סטטי לדוגמה
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
        <header className="flex justify-between items-center mb-16 py-4">
          <div className="flex items-center">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/logo.svg" alt="YieldMax" className="h-10 mr-3" />
            </motion.div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              YieldMax
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#investments" className="hover:text-white transition-colors">Investments</a>
            <a href="#education" className="hover:text-white transition-colors">Learn</a>
            <a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a>
          </nav>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Connect Wallet
          </button>
        </header>
        
        {/* גיבור */}
        <section className="mb-24
