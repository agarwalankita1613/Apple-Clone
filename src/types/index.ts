export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
  priceAmount: number; // Adding actual price amount for calculations
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
};