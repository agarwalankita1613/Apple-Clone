import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      <motion.img
        src="https://images.unsplash.com/photo-1603791239531-1dda55e194a6?auto=format&fit=crop&w=2000&q=80"
        alt="iPhone Hero"
        className="w-full h-full object-cover opacity-90"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1 
          className="text-7xl md:text-8xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          iPhone 15 Pro
        </motion.h1>
        <motion.p 
          className="text-2xl md:text-3xl mb-12 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Titanium. So strong. So light. So Pro.
        </motion.p>
        <motion.div 
          className="space-x-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a 
            href="#" 
            className="text-blue-400 hover:text-blue-300 text-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more {'>'}
          </motion.a>
          <motion.a 
            href="#" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </motion.div>
      </motion.div>
    </div>
  );
}