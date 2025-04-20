import React from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaChartLine } from 'react-icons/fa';

export const InvestmentCard = ({ protocol, onInvest }) => {
  // פונקציה להצגת רמת הסיכון עם צבע מתאים
  const getRiskColor = (risk) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-gray-800 bg-opacity-50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={protocol.icon} alt={protocol.asset} className="w-10 h-10 mr-3 rounded-full" />
            <div>
              <h4 className="font-bold text-lg">{protocol.name}</h4>
              <div className="text-sm text-gray-400">{protocol.protocol}</div>
            </div>
          </div>
          <div className={`text-sm font-medium ${getRiskColor(protocol.risk)} px-3 py-1 rounded-full bg-gray-700`}>
            {protocol.risk} Risk
          </div>
        </div>
        
        <div className="mb-6">
          <div className="text-3xl font-bold text-blue-400 mb-1">
            {protocol.apy}% <span className="text-sm text-gray-400">APY</span>
          </div>
          <div className="text-sm text-gray-400 flex items-center">
            <FaChartLine className="mr-1" />
            TVL: ${(protocol.tvl / 1000000).toFixed(1)}M
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-6">
          {protocol.description}
        </p>
        
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={onInvest}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Stake Now
          </button>
          <button className="bg-transparent border border-gray-600 text-white py-3 px-4 rounded-xl font-medium hover:border-gray-400 transition-all flex items-center justify-center">
            <FaInfoCircle className="mr-2" /> Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default InvestmentCard;
