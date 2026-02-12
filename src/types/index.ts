// AI Generated Code by Deloitte + Cursor (BEGIN)
export interface Product {
  id: number;
  title: string;
  category: 'WOMEN' | 'MEN' | 'ACCESSORIES';
  type: string;
  description?: string;
  price: number;
  image: string;
  badge?: 'NEW' | 'BESTSELLER' | 'SALE';
  rating?: number;
  ratingCount?: number;
  colors?: string[];
  sizes?: string[];
  stockQuantity?: number;
  isFeatured?: boolean;
}

export interface ProductListResponse {
  data: Product[];
  total: number;
  page: number;
  totalPages: number;
}

export interface NewsletterSubscriptionRequest {
  email: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface ProductFilters {
  category?: string;
  type?: string;
  color?: string;
  size?: string;
  priceMin?: number;
  priceMax?: number;
  sort?: string;
  page?: number;
  limit?: number;
}
// AI Generated Code by Deloitte + Cursor (END)
