// AI Generated Code by Deloitte + Cursor (BEGIN)
import React from 'react';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-[3/4]">
        {product.badge && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded z-10">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      
      <div className="mt-4 space-y-1">
        <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</p>
        <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
          {product.rating && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="text-xs text-gray-600">{product.rating}</span>
            </div>
          )}
        </div>
        {product.colors && product.colors.length > 0 && (
          <div className="flex space-x-1 pt-2">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
// AI Generated Code by Deloitte + Cursor (END)
