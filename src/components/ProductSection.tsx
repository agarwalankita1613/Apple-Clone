import React, { useState } from 'react';
import TabSwitch from './TabSwitch';
import ProductGrid from './ProductGrid';

const tabs = [
  { id: 'all', label: 'All Products' },
  { id: 'mac', label: 'Mac' },
  { id: 'iphone', label: 'iPhone' },
  { id: 'ipad', label: 'iPad' },
];

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="py-12">
      <h2 className="text-4xl font-semibold mb-4 text-center">Latest Products</h2>
      <p className="text-gray-600 max-w-2xl mx-auto px-4 text-center mb-8">
        Explore our newest innovations in technology, designed to enrich your life.
      </p>
      <TabSwitch
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <ProductGrid category={activeTab} />
    </section>
  );
}