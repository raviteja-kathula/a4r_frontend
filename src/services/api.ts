// AI Generated Code by Deloitte + Cursor (BEGIN)
import axios from 'axios';
import type { Product, ProductListResponse, ProductFilters, NewsletterSubscriptionRequest, ApiResponse } from '@/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productService = {
  getFeaturedProducts: async (): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>('/products/featured');
    return response.data;
  },

  getProducts: async (filters?: ProductFilters): Promise<ProductListResponse> => {
    const response = await apiClient.get<ProductListResponse>('/products', {
      params: filters,
    });
    return response.data;
  },
};

export const newsletterService = {
  subscribe: async (email: string): Promise<ApiResponse> => {
    const response = await apiClient.post<ApiResponse>('/newsletter/subscribe', {
      email,
    });
    return response.data;
  },
};
// AI Generated Code by Deloitte + Cursor (END)
