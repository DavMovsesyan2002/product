import {
  ALL_CATEGORY,
  SORT_DEFAULT,
  SORT_PRICE_ASC,
  SORT_PRICE_DESC,
} from '../constants/constants.js';

export const filterProducts = (products, searchValue, selectedCategory) => {
  return products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchValue.toLowerCase());

    const matchesCategory =
      selectedCategory === ALL_CATEGORY ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
};

export const sortProducts = (products = [], sortType = SORT_DEFAULT) => {
  const sortedProducts = [...products];

  switch (sortType) {
    case SORT_PRICE_ASC:
      return sortedProducts.sort((a, b) => a.price - b.price);

    case SORT_PRICE_DESC:
      return sortedProducts.sort((a, b) => b.price - a.price);

    default:
      return sortedProducts;
  }
};
