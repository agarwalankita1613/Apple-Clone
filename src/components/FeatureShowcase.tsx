import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Camera, Battery, Shield } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'A17 Pro Chip',
    description: 'The most powerful chip in a smartphone',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Camera,
    title: 'Pro Camera System',
    description: '48MP Main | 12MP Ultra Wide | 12MP Telephoto',
    color: 'from-green-500 to-teal-600'
  },
  {
    icon: Battery,
    title: 'All-Day Battery',
    description: 'Up to 29 hours video playback',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Shield,
    title: 'Titanium Design',
    description: 'Aerospace-grade titanium',
    color: 'from-gray-500 to-gray-700'
  }
];

export default function FeatureShowcase() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 dark:text-white">
            Designed to be extraordinary
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every detail has been carefully considered to create the most advanced iPhone yet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}