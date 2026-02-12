// AI Generated Code by Deloitte + Cursor (BEGIN)
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Footer from '../Footer';
import { newsletterService } from '@/services/api';

vi.mock('@/services/api', () => ({
  newsletterService: {
    subscribe: vi.fn(),
  },
}));

describe('Footer Component', () => {
  it('renders company name and description', () => {
    render(<Footer />);
    expect(screen.getByText('Crest & Thread')).toBeInTheDocument();
    expect(screen.getByText(/Crafting timeless pieces/)).toBeInTheDocument();
  });

  it('renders all footer sections', () => {
    render(<Footer />);
    expect(screen.getByText(/SHOP/i)).toBeInTheDocument();
    expect(screen.getByText(/ABOUT/i)).toBeInTheDocument();
    expect(screen.getByText(/CUSTOMER CARE/i)).toBeInTheDocument();
  });

  it('renders newsletter subscription form', () => {
    render(<Footer />);
    expect(screen.getByText('Join Our Community')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });

  it('handles newsletter subscription success', async () => {
    vi.mocked(newsletterService.subscribe).mockResolvedValue({
      success: true,
      message: 'Successfully subscribed to newsletter',
    });

    render(<Footer />);
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const subscribeButton = screen.getByText('Subscribe');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(subscribeButton);

    await waitFor(() => {
      expect(screen.getByText('Successfully subscribed to newsletter')).toBeInTheDocument();
    });
  });

  it('displays copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Crest & Thread/)).toBeInTheDocument();
  });

  it('renders social media icons', () => {
    const { container } = render(<Footer />);
    const socialLinks = container.querySelectorAll('a[href="#"]');
    expect(socialLinks.length).toBeGreaterThan(0);
  });
});
// AI Generated Code by Deloitte + Cursor (END)
