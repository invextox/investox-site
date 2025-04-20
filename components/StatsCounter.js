import React from 'react';
import { motion } from 'framer-motion';

export const StatsCounter = ({ icon, value, label }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl border border-gray-700"
    >
      <div className="flex flex-col items-center">
        {icon}
        <div className="text-3xl font-bold mb-2">{value}</div>
        <div className="text-gray-400">{label}</div>
      </div>
    </motion.div>
  );
};

export default StatsCounter;
