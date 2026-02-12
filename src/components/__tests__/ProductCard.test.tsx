// AI Generated Code by Deloitte + Cursor (BEGIN)
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';
import type { Product } from '@/types';

const mockProduct: Product = {
  id: 1,
  title: 'Classic Tailored Blazer',
  category: 'WOMEN',
  type: 'outerwear',
  price: 285,
  image: '/test-image.jpg',
  badge: 'NEW',
  rating: 4.8,
  ratingCount: 120,
  colors: ['black', 'navy', 'grey'],
  sizes: ['S', 'M', 'L'],
  stockQuantity: 50,
};

describe('ProductCard Component', () => {
  it('renders product title and price', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Classic Tailored Blazer')).toBeInTheDocument();
    expect(screen.getByText('$285.00')).toBeInTheDocument();
  });

  it('displays product category', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('WOMEN')).toBeInTheDocument();
  });

  it('shows badge when present', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('NEW')).toBeInTheDocument();
  });

  it('displays rating when available', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('4.8')).toBeInTheDocument();
  });

  it('renders without badge when not provided', () => {
    const productWithoutBadge = { ...mockProduct, badge: undefined };
    render(<ProductCard product={productWithoutBadge} />);
    expect(screen.queryByText('NEW')).not.toBeInTheDocument();
  });

  it('displays color swatches', () => {
    const { container } = render(<ProductCard product={mockProduct} />);
    const colorSwatches = container.querySelectorAll('[title="black"], [title="navy"], [title="grey"]');
    expect(colorSwatches.length).toBe(3);
  });
});
// AI Generated Code by Deloitte + Cursor (END)
