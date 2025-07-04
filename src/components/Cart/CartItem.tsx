import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';

type CartItemProps = {
  item: CartItemType;
};

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex items-center py-4 border-b">
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="ml-4 flex-grow">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={() => updateQuantity(product.id, quantity + 1)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          onClick={() => removeFromCart(product.id)}
          className="p-1 hover:bg-gray-100 rounded ml-2"
        >
          <Trash2 className="w-4 h-4 text-red-500" />
        </button>
      </div>
    </div>
  );
}