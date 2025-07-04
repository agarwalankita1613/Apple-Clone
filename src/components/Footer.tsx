import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Facebook, Twitter, Instagram, Youtube, Code, Heart } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'Accessories']
    },
    {
      title: 'Apple Wallet',
      links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash']
    },
    {
      title: 'Account',
      links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Field Trip', 'Apple Store App']
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-[#1d1d1f] dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="border-t border-gray-700 pt-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay up to date</h3>
              <p className="text-gray-400 text-sm">Get the latest news and updates from Apple.</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Developer Attribution Section */}
        <motion.div
          className="border-t border-gray-700 pt-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.div
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Code className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Developed by Ankita Agarwal</span>
              <Heart className="w-4 h-4 text-pink-200" />
            </motion.div>
            <p className="text-gray-400 text-sm">
              Crafted with passion and attention to detail
            </p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Apple className="w-6 h-6" />
            <span className="text-sm text-gray-400">
              Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
            </span>
          </div>
          
          <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
            <motion.a
              href="#"
              className="hover:text-white transition-colors"
              whileHover={{ y: -1 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-white transition-colors"
              whileHover={{ y: -1 }}
            >
              Terms of Use
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-white transition-colors"
              whileHover={{ y: -1 }}
            >
              Sales and Refunds
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-white transition-colors"
              whileHover={{ y: -1 }}
            >
              Site Map
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-8 pt-4 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
            <span>Website by</span>
            <motion.span 
              className="text-purple-400 font-semibold"
              whileHover={{ scale: 1.1 }}
            >
              Ankita Agarwal
            </motion.span>
            <span>•</span>
            <span>Full Stack Developer</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}