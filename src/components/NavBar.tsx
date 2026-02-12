// AI Generated Code by Deloitte + Cursor (BEGIN)
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xl font-semibold">Crest & Thread</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/new-arrivals" className="text-gray-700 hover:text-gray-900">
              New Arrivals
            </Link>
            <Link to="/women" className="text-gray-700 hover:text-gray-900">
              Women
            </Link>
            <Link to="/men" className="text-gray-700 hover:text-gray-900">
              Men
            </Link>
            <Link to="/accessories" className="text-gray-700 hover:text-gray-900">
              Accessories
            </Link>
            <Link to="/sale" className="text-gray-700 hover:text-gray-900 text-red-600">
              Sale
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-gray-900 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/new-arrivals" className="block py-2 text-gray-700 hover:text-gray-900">
              New Arrivals
            </Link>
            <Link to="/women" className="block py-2 text-gray-700 hover:text-gray-900">
              Women
            </Link>
            <Link to="/men" className="block py-2 text-gray-700 hover:text-gray-900">
              Men
            </Link>
            <Link to="/accessories" className="block py-2 text-gray-700 hover:text-gray-900">
              Accessories
            </Link>
            <Link to="/sale" className="block py-2 text-red-600">
              Sale
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
// AI Generated Code by Deloitte + Cursor (END)
