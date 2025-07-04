import React from 'react';
import { motion } from 'framer-motion';

export default function WatchPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 dark:text-white">Apple Watch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A healthy leap ahead.
          </p>
        </div>
        
        {/* Hero Section */}
        <div className="relative h-96 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl mb-12 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=2000&q=80"
            alt="Apple Watch"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold mb-4">Apple Watch Series 9</h2>
            <p className="text-xl mb-6">Smarter. Brighter. Mightier.</p>
            <div className="space-x-6">
              <a href="#" className="text-blue-200 hover:text-blue-100">Learn more {'>'}</a>
              <a href="#" className="text-blue-200 hover:text-blue-100">Buy {'>'}</a>
            </div>
          </div>
        </div>

        {/* Watch Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">❤️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Health Monitoring</h3>
            <p className="text-gray-600 dark:text-gray-300">Track your heart rate, blood oxygen, and more.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏃</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Fitness Tracking</h3>
            <p className="text-gray-600 dark:text-gray-300">Monitor workouts and daily activity goals.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Smart Features</h3>
            <p className="text-gray-600 dark:text-gray-300">Stay connected with calls, texts, and apps.</p>
          </motion.div>
        </div>

        {/* Coming Soon Message */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-12">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Apple Watch Collection</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our Apple Watch collection is coming soon. Stay tuned for the latest models and accessories.
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
              Notify Me
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}