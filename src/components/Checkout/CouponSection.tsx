import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, Check, X, Info, Gift } from 'lucide-react';
import { validateCoupon, getCouponDiscount, getCouponInfo } from '../../utils/validation';

type CouponSectionProps = {
  onApply: (code: string) => void;
  appliedCoupon?: string;
};

export default function CouponSection({ onApply, appliedCoupon }: CouponSectionProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Popular coupon suggestions
  const popularCoupons = [
    { code: 'WELCOME10', discount: 10, description: 'New user discount' },
    { code: 'SAVE20', discount: 20, description: 'General savings' },
    { code: 'STUDENT25', discount: 25, description: 'Student discount' },
    { code: 'FLASH50', discount: 50, description: 'Flash sale' },
    { code: 'VIP40', discount: 40, description: 'VIP member exclusive' },
    { code: 'ANKITA', discount: 99, description: 'Developer special' }
  ];

  const handleApply = () => {
    setError('');
    setIsSuccess(false);

    if (!code.trim()) {
      setError('Please enter a coupon code');
      return;
    }

    if (validateCoupon(code)) {
      const discount = getCouponDiscount(code);
      const couponInfo = getCouponInfo(code);
      
      onApply(code);
      setIsSuccess(true);
      setError('');
      setShowSuggestions(false);
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } else {
      setError('Invalid coupon code. Please check and try again.');
    }
  };

  const handleSuggestionClick = (suggestedCode: string) => {
    setCode(suggestedCode);
    setShowSuggestions(false);
    setError('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleApply();
    }
  };

  const appliedCouponInfo = appliedCoupon ? getCouponInfo(appliedCoupon) : null;
  const appliedDiscount = appliedCoupon ? getCouponDiscount(appliedCoupon) : 0;

  return (
    <motion.div
      className="border-t border-gray-200 dark:border-gray-700 pt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-2 mb-4">
        <Gift className="w-5 h-5 text-purple-500" />
        <h3 className="text-lg font-semibold dark:text-white">Discount Coupons</h3>
      </div>

      {/* Applied Coupon Display */}
      <AnimatePresence>
        {appliedCoupon && (
          <motion.div
            className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-500 rounded-full">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-green-800 dark:text-green-200">
                    {appliedCoupon} Applied!
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-300">
                    {appliedDiscount}% discount • {appliedCouponInfo?.description}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                  -{appliedDiscount}%
                </div>
                <div className="text-xs text-green-500 dark:text-green-400">
                  {appliedCouponInfo?.category}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coupon Input */}
      {!appliedCoupon && (
        <div className="space-y-4">
          <div className="relative">
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value.toUpperCase());
                    setError('');
                    setIsSuccess(false);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter coupon code"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                />
              </div>
              <motion.button
                onClick={handleApply}
                disabled={!code.trim()}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply
              </motion.button>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  className="mt-2 flex items-center space-x-2 text-red-500 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-4 h-4" />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success Message */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  className="mt-2 flex items-center space-x-2 text-green-500 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className="w-4 h-4" />
                  <span>Coupon applied successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Coupon Suggestions */}
          <AnimatePresence>
            {showSuggestions && (
              <motion.div
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <Info className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Popular Coupons
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {popularCoupons.map((coupon, index) => (
                    <motion.button
                      key={coupon.code}
                      onClick={() => handleSuggestionClick(coupon.code)}
                      className="text-left p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 transition-all duration-200"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-sm text-blue-600 dark:text-blue-400">
                            {coupon.code}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {coupon.description}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600 dark:text-green-400">
                            {coupon.discount}%
                          </div>
                          <div className="text-xs text-gray-500">OFF</div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    💡 Tip: Try codes like WELCOME10, STUDENT25, or FLASH50 for instant savings!
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}