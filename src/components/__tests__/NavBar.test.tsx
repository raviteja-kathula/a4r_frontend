// AI Generated Code by Deloitte + Cursor (BEGIN)
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar';

describe('NavBar Component', () => {
  it('renders the logo and brand name', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(screen.getByText('Crest & Thread')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(screen.getByText('New Arrivals')).toBeInTheDocument();
    expect(screen.getByText('Women')).toBeInTheDocument();
    expect(screen.getByText('Men')).toBeInTheDocument();
    expect(screen.getByText('Accessories')).toBeInTheDocument();
    expect(screen.getByText('Sale')).toBeInTheDocument();
  });

  it('displays cart icon with badge', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const badge = screen.getByText('0');
    expect(badge).toBeInTheDocument();
  });

  it('displays search, user, and cart icons', () => {
    const { container } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const svgIcons = container.querySelectorAll('svg');
    expect(svgIcons.length).toBeGreaterThan(0);
  });
});
// AI Generated Code by Deloitte + Cursor (END)
