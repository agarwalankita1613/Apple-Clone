import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import CartDrawer from './components/Cart/CartDrawer';
import CheckoutModal from './components/Checkout/CheckoutModal';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import MacPage from './pages/MacPage';
import iPadPage from './pages/iPadPage';
import iPhonePage from './pages/iPhonePage';
import WatchPage from './pages/WatchPage';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors">
            <Navbar onCartClick={() => setIsCartOpen(true)} />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/store" element={<StorePage />} />
                <Route path="/mac" element={<MacPage />} />
                <Route path="/ipad" element={<iPadPage />} />
                <Route path="/iphone" element={<iPhonePage />} />
                <Route path="/watch" element={<WatchPage />} />
              </Routes>
            </main>
            <Footer />

            <CartDrawer
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              onCheckout={handleCheckout}
            />
            <CheckoutModal
              isOpen={isCheckoutOpen}
              onClose={() => setIsCheckoutOpen(false)}
            />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;