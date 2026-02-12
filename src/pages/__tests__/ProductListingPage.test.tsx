// AI Generated Code by Deloitte + Cursor (BEGIN)
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductListingPage from '../ProductListingPage';
import { productService } from '@/services/api';

vi.mock('@/services/api', () => ({
  productService: {
    getProducts: vi.fn(),
  },
}));

const mockResponse = {
  data: [
    {
      id: 1,
      title: 'Test Product',
      category: 'WOMEN' as const,
      type: 'outerwear',
      price: 285,
      image: '/test.jpg',
      rating: 4.8,
    },
  ],
  total: 1,
  page: 1,
  totalPages: 1,
};

describe('ProductListingPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders page title and description', () => {
    vi.mocked(productService.getProducts).mockResolvedValue(mockResponse);
    render(
      <BrowserRouter>
        <ProductListingPage />
      </BrowserRouter>
    );
    const titleElements = screen.getAllByText('All Products');
    expect(titleElements.length).toBeGreaterThan(0);
    expect(screen.getByText('Explore our complete collection of premium apparel')).toBeInTheDocument();
  });

  it('renders breadcrumb navigation', () => {
    vi.mocked(productService.getProducts).mockResolvedValue(mockResponse);
    render(
      <BrowserRouter>
        <ProductListingPage />
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    // Note: "All Products" appears twice (title and breadcrumb), so using getAllByText
    const allProductsElements = screen.getAllByText('All Products');
    expect(allProductsElements.length).toBeGreaterThan(0);
  });

  it('displays product count', async () => {
    vi.mocked(productService.getProducts).mockResolvedValue(mockResponse);
    render(
      <BrowserRouter>
        <ProductListingPage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('1 products')).toBeInTheDocument();
    });
  });

  it('renders sort dropdown', () => {
    vi.mocked(productService.getProducts).mockResolvedValue(mockResponse);
    render(
      <BrowserRouter>
        <ProductListingPage />
      </BrowserRouter>
    );
    const sortSelect = screen.getByRole('combobox');
    expect(sortSelect).toBeInTheDocument();
  });

  it('loads and displays products', async () => {
    vi.mocked(productService.getProducts).mockResolvedValue(mockResponse);
    render(
      <BrowserRouter>
        <ProductListingPage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });
  });

  it('shows empty state when no products found', async () => {
    vi.mocked(productService.getProducts).mockResolvedValue({
      data: [],
      total: 0,
      page: 1,
      totalPages: 0,
    });
    
    render(
      <BrowserRouter>
        <ProductListingPage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('No products found matching your filters.')).toBeInTheDocument();
    });
  });
});
// AI Generated Code by Deloitte + Cursor (END)
