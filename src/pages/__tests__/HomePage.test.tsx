// AI Generated Code by Deloitte + Cursor (BEGIN)
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage';
import { productService } from '@/services/api';

vi.mock('@/services/api', () => ({
  productService: {
    getFeaturedProducts: vi.fn(),
  },
  newsletterService: {
    subscribe: vi.fn(),
  },
}));

const mockProducts = [
  {
    id: 1,
    title: 'Classic Blazer',
    category: 'WOMEN' as const,
    type: 'outerwear',
    price: 285,
    image: '/blazer.jpg',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Cotton Shirt',
    category: 'MEN' as const,
    type: 'tops',
    price: 145,
    image: '/shirt.jpg',
    rating: 4.5,
  },
];

describe('HomePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders hero section with headline', () => {
    vi.mocked(productService.getFeaturedProducts).mockResolvedValue([]);
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByText(/Timeless Elegance/)).toBeInTheDocument();
    expect(screen.getByText(/Modern Craftsmanship/)).toBeInTheDocument();
  });

  it('displays CTA buttons in hero section', () => {
    vi.mocked(productService.getFeaturedProducts).mockResolvedValue([]);
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByText('Shop New Arrivals')).toBeInTheDocument();
    expect(screen.getByText('View Lookbook')).toBeInTheDocument();
  });

  it('renders featured collection heading', () => {
    vi.mocked(productService.getFeaturedProducts).mockResolvedValue([]);
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByText('Featured Collection')).toBeInTheDocument();
    expect(screen.getByText('Handpicked pieces for the discerning wardrobe')).toBeInTheDocument();
  });

  it('loads and displays featured products', async () => {
    vi.mocked(productService.getFeaturedProducts).mockResolvedValue(mockProducts);
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Classic Blazer')).toBeInTheDocument();
      expect(screen.getByText('Cotton Shirt')).toBeInTheDocument();
    });
  });

  it('renders shop by category section', () => {
    vi.mocked(productService.getFeaturedProducts).mockResolvedValue([]);
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByText('Shop by Category')).toBeInTheDocument();
    expect(screen.getByText("Women's Collection")).toBeInTheDocument();
    expect(screen.getByText("Men's Collection")).toBeInTheDocument();
    expect(screen.getByText('Accessories')).toBeInTheDocument();
  });
});
// AI Generated Code by Deloitte + Cursor (END)
