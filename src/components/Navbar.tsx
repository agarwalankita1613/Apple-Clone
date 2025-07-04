import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Apple, Search, ShoppingBag, Menu, X, ChevronDown, Globe, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartDrawer from './Cart/CartDrawer';
import ThemeToggle from './ThemeToggle';

type NavbarProps = {
  onCartClick: () => void;
};

export default function Navbar({ onCartClick }: NavbarProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { items } = useCart();
  const location = useLocation();
  const { scrollY } = useScroll();
  
  // Performance optimized scroll transform
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.8, 0.98]);
  const navbarBlur = useTransform(scrollY, [0, 100], [8, 20]);
  
  const itemCount = useMemo(() => 
    items.reduce((sum, item) => sum + item.quantity, 0), 
    [items]
  );

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.search-dropdown')) setIsSearchOpen(false);
      if (!target.closest('.user-dropdown')) setIsUserMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleCartClick = useCallback(() => {
    setIsCartOpen(true);
    onCartClick();
  }, [onCartClick]);

  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

  const navItems = useMemo(() => [
    { path: '/store', label: 'Store', hasDropdown: true },
    { path: '/mac', label: 'Mac', hasDropdown: true },
    { path: '/ipad', label: 'iPad', hasDropdown: true },
    { path: '/iphone', label: 'iPhone', hasDropdown: true },
    { path: '/watch', label: 'Watch', hasDropdown: true },
  ], []);

  const searchSuggestions = useMemo(() => [
    'iPhone 15 Pro', 'MacBook Pro', 'iPad Air', 'Apple Watch', 'AirPods Pro'
  ], []);

  const filteredSuggestions = useMemo(() => 
    searchSuggestions.filter(item => 
      item.toLowerCase().includes(searchQuery.toLowerCase())
    ), [searchQuery, searchSuggestions]
  );

  // Animation variants with reduced complexity for performance
  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.2 } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.2 } }
  };

  const dropdownVariants = {
    closed: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } },
    open: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.15 } }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/98 dark:bg-black/98 shadow-lg border-b border-gray-200/30 dark:border-gray-700/30' 
            : 'bg-white/90 dark:bg-black/90'
        } text-gray-900 dark:text-white`}
        style={{
          backdropFilter: `blur(${navbarBlur}px)`,
          WebkitBackdropFilter: `blur(${navbarBlur}px)`,
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <Apple className="w-6 h-6" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    className="relative"
                  >
                    <motion.div
                      className={`flex items-center space-x-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive(item.path) 
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.1 }}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                      )}
                    </motion.div>
                    {isActive(item.path) && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
                        layoutId="navbar-indicator"
                        style={{ x: '-50%' }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                  
                  {/* Dropdown Menu Preview */}
                  <div className="absolute top-full left-0 w-64 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 pt-2">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-4">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Featured {item.label}</div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Latest Models</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">Explore new releases</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              {/* Advanced Search */}
              <div className="relative search-dropdown">
                <motion.button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="w-5 h-5" />
                </motion.button>
                
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      className="absolute right-0 top-full mt-2 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <div className="p-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for products, support, and more"
                            className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-sm transition-all duration-200"
                            autoFocus
                          />
                        </div>
                        
                        {searchQuery && (
                          <div className="mt-4">
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggestions</div>
                            <div className="space-y-1">
                              {filteredSuggestions.map((suggestion, index) => (
                                <motion.div
                                  key={suggestion}
                                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer text-sm transition-colors"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  {suggestion}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                            <span>Quick Links</span>
                            <div className="flex items-center space-x-2">
                              <Globe className="w-3 h-3" />
                              <span>Global</span>
                            </div>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {['Support', 'Store', 'Trade In'].map((link) => (
                              <span key={link} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                                {link}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* User Menu */}
              <div className="relative user-dropdown hidden md:block">
                <motion.button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <User className="w-5 h-5" />
                </motion.button>
                
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <div className="p-4">
                        <div className="text-sm font-medium mb-3">Account</div>
                        <div className="space-y-2">
                          {['Sign In', 'Create Account', 'Orders', 'Support'].map((item) => (
                            <div key={item} className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer text-sm transition-colors">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Enhanced Cart */}
              <motion.button
                onClick={handleCartClick}
                className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag className="w-5 h-5" />
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.div
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    >
                      {itemCount > 99 ? '99+' : itemCount}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-white/98 dark:bg-black/98 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/30"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Mobile Navigation */}
                <div className="space-y-1 mb-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center justify-between px-4 py-4 rounded-2xl text-base font-medium transition-all duration-200 ${
                          isActive(item.path)
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                            : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        <div className="flex items-center space-x-2">
                          {isActive(item.path) && (
                            <motion.div
                              className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.1 }}
                            />
                          )}
                          <ChevronDown className="w-4 h-4 opacity-40" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Search */}
                <motion.div
                  className="mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search everything Apple"
                      className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-700 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-sm transition-all duration-200"
                    />
                  </div>
                </motion.div>

                {/* Mobile Quick Actions */}
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {[
                    { icon: User, label: 'Account', color: 'bg-blue-500' },
                    { icon: Globe, label: 'Support', color: 'bg-green-500' }
                  ].map((action) => (
                    <div key={action.label} className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                      <div className={`p-2 ${action.color} rounded-xl`}>
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">{action.label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => {
          setIsCartOpen(false);
          onCartClick();
        }}
      />
    </>
  );
}