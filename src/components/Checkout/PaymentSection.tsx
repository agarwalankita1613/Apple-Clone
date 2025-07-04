import React, { useState } from 'react';
import { PaymentMethod } from '../../types/checkout';
import { CreditCard, Smartphone } from 'lucide-react';

type PaymentSectionProps = {
  onPaymentSelect: (method: PaymentMethod) => void;
};

export default function PaymentSection({ onPaymentSelect }: PaymentSectionProps) {
  const [selected, setSelected] = useState<PaymentMethod | null>(null);

  const handleSelect = (method: PaymentMethod) => {
    setSelected(method);
    onPaymentSelect(method);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Select Payment Method</h3>
      <div className="space-y-3">
        <div
          onClick={() => handleSelect('card')}
          className={`p-4 border rounded-lg cursor-pointer flex items-center space-x-3 ${
            selected === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
        >
          <CreditCard className="w-6 h-6" />
          <span>Credit/Debit Card</span>
        </div>
        <div
          onClick={() => handleSelect('upi')}
          className={`p-4 border rounded-lg cursor-pointer flex items-center space-x-3 ${
            selected === 'upi' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
        >
          <Smartphone className="w-6 h-6" />
          <span>UPI Payment</span>
        </div>
      </div>
    </div>
  );
}