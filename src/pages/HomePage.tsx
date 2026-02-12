// AI Generated Code by Deloitte + Cursor (BEGIN)
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { productService } from '@/services/api';
import type { Product } from '@/types';

const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        const products = await productService.getFeaturedProducts();
        setFeaturedProducts(products);
      } catch (error) {
        console.error('Failed to load featured products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadFeaturedProducts();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-xl text-white">
              <div className="inline-block bg-black px-3 py-1 text-xs uppercase tracking-wide mb-4">
                New Collection 2026
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Timeless Elegance,
                <br />
                Modern Craftsmanship
              </h1>
              <p className="text-lg mb-8 text-gray-200">
                Discover our curated collection of premium apparel, where heritage meets contemporary design. Each piece tells a story of quality and refinement.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/products"
                  className="bg-white text-gray-900 px-8 py-3 rounded font-medium hover:bg-gray-100 transition"
                >
                  Shop New Arrivals
                </Link>
                <button className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white/10 transition">
                  View Lookbook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Collection</h2>
            <p className="text-gray-600 mt-2">Handpicked pieces for the discerning wardrobe</p>
          </div>
          <Link to="/products" className="text-sm font-medium hover:underline">
            View All
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-[3/4] rounded-lg"></div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/women" className="group relative h-96 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gray-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Women's Collection</h3>
                <p className="text-sm text-gray-200">Refined pieces for every occasion</p>
              </div>
            </div>
          </Link>
          <Link to="/men" className="group relative h-96 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gray-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Men's Collection</h3>
                <p className="text-sm text-gray-200">Timeless sophistication</p>
              </div>
            </div>
          </Link>
          <Link to="/accessories" className="group relative h-96 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gray-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Accessories</h3>
                <p className="text-sm text-gray-200">Complete your look</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
// AI Generated Code by Deloitte + Cursor (END)
