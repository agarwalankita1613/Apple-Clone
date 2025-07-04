import React from 'react';
import ProductGrid from '../components/ProductGrid';

export default function StorePage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 dark:text-white">Store</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The best way to buy the products you love.
          </p>
        </div>
        
        <ProductGrid category="all" />
      </div>
    </div>
  );
}