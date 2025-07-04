export type Address = {
  fullName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
};

export type PaymentMethod = 'card' | 'upi';

export type CheckoutState = {
  step: 'address' | 'otp' | 'payment' | 'confirmation';
  address: Address | null;
  otpVerified: boolean;
  paymentMethod: PaymentMethod | null;
  couponCode: string;
  discountApplied: boolean;
};