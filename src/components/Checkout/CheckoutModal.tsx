import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CheckoutState, Address, PaymentMethod } from '../../types/checkout';
import { useCart } from '../../context/CartContext';
import { calculateDiscount, getCouponDiscount } from '../../utils/validation';
import AddressForm from './AddressForm';
import OTPVerification from './OTPVerification';
import PaymentSection from './PaymentSection';
import CouponSection from './CouponSection';

type CheckoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { total, items } = useCart();
  const [state, setState] = useState<CheckoutState>({
    step: 'address',
    address: null,
    otpVerified: false,
    paymentMethod: null,
    couponCode: '',
    discountApplied: false,
  });

  const handleAddressSubmit = (address: Address) => {
    setState({ ...state, address, step: 'otp' });
  };

  const handleOTPVerified = () => {
    setState({ ...state, otpVerified: true, step: 'payment' });
  };

  const handlePaymentSelect = (method: PaymentMethod) => {
    setState({ ...state, paymentMethod: method });
  };

  const handleCouponApply = (code: string) => {
    setState({ ...state, couponCode: code, discountApplied: true });
  };

  const discountAmount = state.discountApplied && state.couponCode
    ? calculateDiscount(total, state.couponCode)
    : 0;

  const finalAmount = total - discountAmount;
  const discountPercentage = state.couponCode ? getCouponDiscount(state.couponCode) : 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold dark:text-white">Checkout</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Step {state.step === 'address' ? '1' : state.step === 'otp' ? '2' : '3'} of 3
            </p>
          </div>

          {state.step === 'address' && (
            <AddressForm onSubmit={handleAddressSubmit} />
          )}

          {state.step === 'otp' && state.address && (
            <OTPVerification
              phone={state.address.phone}
              onVerified={handleOTPVerified}
            />
          )}

          {state.step === 'payment' && (
            <div className="space-y-6">
              <PaymentSection onPaymentSelect={handlePaymentSelect} />
              <CouponSection 
                onApply={handleCouponApply} 
                appliedCoupon={state.discountApplied ? state.couponCode : undefined}
              />
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="dark:text-gray-300">Subtotal</span>
                    <span className="dark:text-gray-300">${total.toFixed(2)}</span>
                  </div>
                  {state.discountApplied && discountAmount > 0 && (
                    <div className="flex justify-between text-sm text-green-600 dark:text-green-400">
                      <span>Discount ({discountPercentage}% off)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-semibold text-lg border-t border-gray-200 dark:border-gray-700 pt-2">
                    <span className="dark:text-white">Total</span>
                    <span className="dark:text-white">${finalAmount.toFixed(2)}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    // Handle payment processing here
                    alert(`Payment successful! You saved $${discountAmount.toFixed(2)} with your coupon. Thank you for your order!`);
                    onClose();
                  }}
                  disabled={!state.paymentMethod}
                  className="w-full mt-4 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors disabled:bg-gray-300 font-semibold"
                >
                  Pay ${finalAmount.toFixed(2)}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}