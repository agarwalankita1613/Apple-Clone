import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
};

export default function CartDrawer({ isOpen, onClose, onCheckout }: CartDrawerProps) {
  const { items, total, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="absolute right-0 top-0 h-full w-96 bg-white dark:bg-gray-800 shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="p-4 flex items-center justify-between border-b dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 dark:text-white" />
                <h2 className="text-xl font-semibold dark:text-white">Your Cart</h2>
              </div>
              <motion.button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 dark:text-white" />
              </motion.button>
            </div>
            
            <div className="p-4 flex-grow overflow-auto h-[calc(100vh-200px)]">
              {items.length === 0 ? (
                <motion.div
                  className="text-center mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                    Add some products to get started
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {items.map((item, index) => (
                    <motion.div
                      key={item.product.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CartItem item={item} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            {items.length > 0 && (
              <motion.div
                className="border-t dark:border-gray-700 p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex justify-between mb-4">
                  <span className="font-semibold dark:text-white">Total:</span>
                  <span className="font-semibold text-xl dark:text-white">${total.toFixed(2)}</span>
                </div>
                <div className="space-y-2">
                  <motion.button
                    onClick={clearCart}
                    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Clear Cart
                  </motion.button>
                  <motion.button
                    onClick={onCheckout}
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Checkout
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}