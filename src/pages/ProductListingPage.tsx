// AI Generated Code by Deloitte + Cursor (BEGIN)
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { productService } from '@/services/api';
import type { Product, ProductFilters } from '@/types';

const ProductListingPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [total, setTotal] = React.useState(0);
  const [page, setPage] = React.useState(1);

  const filters: ProductFilters = {
    category: searchParams.get('category') || undefined,
    type: searchParams.get('type') || undefined,
    color: searchParams.get('color') || undefined,
    size: searchParams.get('size') || undefined,
    sort: searchParams.get('sort') || 'featured',
    page,
    limit: 12,
  };

  React.useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const response = await productService.getProducts(filters);
        setProducts(response.data);
        setTotal(response.total);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [searchParams, page]);

  const handleFilterChange = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
    setPage(1);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">All Products</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">All Products</h1>
          <p className="text-gray-600 mt-2">Explore our complete collection of premium apparel</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">CATEGORY</h3>
                <div className="space-y-2">
                  {['WOMEN', 'MEN', 'ACCESSORIES'].map((cat) => (
                    <label key={cat} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === cat}
                        onChange={() => handleFilterChange('category', filters.category === cat ? '' : cat)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">TYPE</h3>
                <div className="space-y-2">
                  {['outerwear', 'tops', 'bags', 'dresses', 'bottoms', 'scarves'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.type === type}
                        onChange={() => handleFilterChange('type', filters.type === type ? '' : type)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700 capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">COLOR</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['black', 'white', 'blue', 'grey', 'beige', 'navy'].map((color) => (
                    <button
                      key={color}
                      onClick={() => handleFilterChange('color', filters.color === color ? '' : color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        filters.color === color ? 'border-gray-900' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">{total} products</p>
              <select
                value={filters.sort}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Best Rating</option>
              </select>
            </div>

            {/* Loading State */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
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
            ) : products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found matching your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
// AI Generated Code by Deloitte + Cursor (END)
