# Crest & Thread - Frontend

[![Tests](https://img.shields.io/badge/Tests-30%2F30%20Passed-success)]()
[![Coverage](https://img.shields.io/badge/Coverage-80.44%25-brightgreen)]()
[![React](https://img.shields.io/badge/React-18-blue)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)]()

> Modern React frontend for Crest & Thread e-commerce platform with TailwindCSS and TypeScript.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+
- Backend API running on http://localhost:8080/api

### Setup
```bash
# Clone repository
git clone https://github.com/raviteja-kathula/a4r_frontend.git
cd a4r_frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

Frontend will start on: **http://localhost:3000**

## 📋 Features

- 🏠 **Hero Landing Page** - Engaging hero section with CTAs
- 🛍️ **Featured Products** - Curated product showcase
- 🔍 **Product Filtering** - Filter by category, type, color, size
- 📊 **Product Sorting** - Sort by price, rating, newest
- 📧 **Newsletter Subscription** - Email signup with validation
- 📱 **Responsive Design** - Mobile-first approach

## 🏗️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript 5
- **Build Tool**: Vite 5.4.21
- **Styling**: TailwindCSS 3
- **Routing**: React Router 6
- **HTTP Client**: Axios
- **Testing**: Vitest + React Testing Library

## 📂 Project Structure

```
src/
├── components/        Reusable UI components
│   ├── NavBar.tsx
│   ├── ProductCard.tsx
│   ├── Footer.tsx
│   └── __tests__/     Component tests
├── pages/             Page components
│   ├── HomePage.tsx
│   ├── ProductListingPage.tsx
│   └── __tests__/     Page tests
├── services/          API service layer
│   ├── api.ts
│   └── __tests__/     Service tests
├── types/             TypeScript interfaces
│   └── index.ts
├── styles/            Global styles
│   └── index.css
├── test/              Test configuration
│   └── setup.ts
├── App.tsx            Main app component
└── main.tsx           React entry point
```

## 🧪 Testing

### Run Tests
```bash
npm run test
```

### Watch Mode
```bash
npm run test:ui
```

### Coverage Report
```bash
npm run test:coverage
```
Report available at: `coverage/index.html`

### Test Results
- **Total Tests**: 30
- **Pass Rate**: 100%
- **Coverage**: 80.44%
- **Test Files**: 6 (Components + Pages + Services)

## 🎨 Pages & Components

### Pages
- **HomePage** - Hero, featured products, category tiles
- **ProductListingPage** - Filters, sort, product grid

### Components
- **NavBar** - Responsive navigation with cart
- **ProductCard** - Product display with image, badge, rating
- **Footer** - Multi-column footer with newsletter

## ⚙️ Configuration

### Environment Variables
Edit `.env`:
```
VITE_API_BASE_URL=http://localhost:8080/api
VITE_APP_ENV=development
```

### Vite Config
- Dev server on port 3000
- API proxy to backend
- Path aliases (@/ → src/)

## 📊 Quality Metrics

| Metric | Value |
|--------|-------|
| Test Coverage | 80.44% |
| Tests Passed | 30/30 (100%) |
| Components Coverage | 92.38% |
| Pages Coverage | 96.47% |
| Linter Errors | 0 |

## 🎯 JIRA References

**User Stories**:
- US-001: Hero Section with Navigation
- US-002: Featured Products Display
- US-003: Category Browse Section
- US-004: Product Listing Page
- US-005: Product Filtering System
- US-006: Product Sorting
- US-007: Product Search
- US-008: Newsletter Subscription
- US-009: Responsive Navigation
- US-010: Footer Component

## 🔗 Related Repositories

- **Backend**: https://github.com/raviteja-kathula/a4r_backend
- **E2E Tests**: https://github.com/raviteja-kathula/a4r-automation-tests

---

**AI Generated Code by Deloitte + Cursor**

© 2026 Crest & Thread
