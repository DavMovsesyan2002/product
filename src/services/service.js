import { api } from './api';

export const getProducts = async (signal) => {
  const response = await api.get('/products', { signal });
  return response.data;
};
