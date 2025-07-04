import React from 'react';
import ProductGrid from '../components/ProductGrid';

export default function MacPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 dark:text-white">Mac</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            If you can dream it, Mac can do it.
          </p>
        </div>
        
        {/* Hero Section */}
        <div className="relative h-96 bg-black text-white rounded-2xl mb-12 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=2000&q=80"
            alt="MacBook Pro"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold mb-4">MacBook Pro</h2>
            <p className="text-xl mb-6">Supercharged by M3 Max</p>
            <div className="space-x-6">
              <a href="#" className="text-blue-400 hover:text-blue-300">Learn more {'>'}</a>
              <a href="#" className="text-blue-400 hover:text-blue-300">Buy {'>'}</a>
            </div>
          </div>
        </div>

        <ProductGrid category="mac" />
      </div>
    </div>
  );
}