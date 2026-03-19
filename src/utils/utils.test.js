import { filterProducts, sortProducts } from './utils';

describe('filterProducts', () => {
  const products = [
    { id: 1, title: 'Phone', category: 'electronics', price: 300 },
    { id: 2, title: 'Shirt', category: "men's clothing", price: 50 },
    { id: 3, title: 'Laptop', category: 'electronics', price: 1000 },
  ];

  it('filters products by search value', () => {
    const result = filterProducts(products, 'phone', 'all');

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Phone');
  });

  it('filters products by category', () => {
    const result = filterProducts(products, '', 'electronics');

    expect(result).toHaveLength(2);
  });

  it('filters by search and category together', () => {
    const result = filterProducts(products, 'lap', 'electronics');

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Laptop');
  });
});

describe('sortProducts', () => {
  const products = [
    { id: 1, title: 'Phone', category: 'electronics', price: 300 },
    { id: 2, title: 'Shirt', category: "men's clothing", price: 50 },
    { id: 3, title: 'Laptop', category: 'electronics', price: 1000 },
  ];

  it('sorts by price ascending', () => {
    const result = sortProducts(products, 'price-asc');

    expect(result.map((product) => product.price)).toEqual([50, 300, 1000]);
  });

  it('sorts by price descending', () => {
    const result = sortProducts(products, 'price-desc');

    expect(result.map((product) => product.price)).toEqual([1000, 300, 50]);
  });
});
