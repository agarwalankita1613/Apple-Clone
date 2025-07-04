import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Display',
    iphone15Pro: '6.1" Super Retina XDR',
    iphone15: '6.1" Super Retina XDR',
    iphone14: '6.1" Super Retina XDR'
  },
  {
    feature: 'Chip',
    iphone15Pro: 'A17 Pro',
    iphone15: 'A16 Bionic',
    iphone14: 'A15 Bionic'
  },
  {
    feature: 'Camera System',
    iphone15Pro: '48MP Pro camera system',
    iphone15: '48MP Main camera',
    iphone14: '12MP Dual camera'
  },
  {
    feature: 'Material',
    iphone15Pro: 'Titanium',
    iphone15: 'Aluminum',
    iphone14: 'Aluminum'
  },
  {
    feature: 'Action Button',
    iphone15Pro: true,
    iphone15: false,
    iphone14: false
  },
  {
    feature: 'USB-C',
    iphone15Pro: true,
    iphone15: true,
    iphone14: false
  }
];

export default function ProductComparison() {
  const [selectedProducts, setSelectedProducts] = useState(['iphone15Pro', 'iphone15']);

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 dark:text-white">
            Compare iPhone models
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find the iPhone that's right for you
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 overflow-x-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 font-semibold dark:text-white">Feature</th>
                <th className="text-center py-4 px-6">
                  <div className="text-center">
                    <img
                      src="https://images.unsplash.com/photo-1603791239531-1dda55e194a6?auto=format&fit=crop&w=200&q=80"
                      alt="iPhone 15 Pro"
                      className="w-20 h-20 object-cover rounded-2xl mx-auto mb-2"
                    />
                    <h3 className="font-semibold dark:text-white">iPhone 15 Pro</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">From $999</p>
                  </div>
                </th>
                <th className="text-center py-4 px-6">
                  <div className="text-center">
                    <img
                      src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=200&q=80"
                      alt="iPhone 15"
                      className="w-20 h-20 object-cover rounded-2xl mx-auto mb-2"
                    />
                    <h3 className="font-semibold dark:text-white">iPhone 15</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">From $799</p>
                  </div>
                </th>
                <th className="text-center py-4 px-6">
                  <div className="text-center">
                    <img
                      src="https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=200&q=80"
                      alt="iPhone 14"
                      className="w-20 h-20 object-cover rounded-2xl mx-auto mb-2"
                    />
                    <h3 className="font-semibold dark:text-white">iPhone 14</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">From $699</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={row.feature}
                  className="border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <td className="py-4 px-6 font-medium dark:text-white">{row.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.iphone15Pro === 'boolean' ? (
                      row.iphone15Pro ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="dark:text-gray-300">{row.iphone15Pro}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.iphone15 === 'boolean' ? (
                      row.iphone15 ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="dark:text-gray-300">{row.iphone15}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.iphone14 === 'boolean' ? (
                      row.iphone14 ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="dark:text-gray-300">{row.iphone14}</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}