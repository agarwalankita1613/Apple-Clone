import React, { useState } from 'react';
import { validateOTP } from '../../utils/validation';

type OTPVerificationProps = {
  phone: string;
  onVerified: () => void;
};

export default function OTPVerification({ phone, onVerified }: OTPVerificationProps) {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateOTP(otp)) {
      onVerified();
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Enter the 6-digit code sent to {phone}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          maxLength={6}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Verify OTP
        </button>
      </form>
      <p className="text-sm text-gray-500 text-center">
        Didn't receive the code? <button className="text-blue-500">Resend</button>
      </p>
    </div>
  );
}