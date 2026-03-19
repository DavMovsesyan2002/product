export const ALL_CATEGORY = 'all';

export const SORT_DEFAULT = 'default';
export const SORT_PRICE_ASC = 'price-asc';
export const SORT_PRICE_DESC = 'price-desc';

export const DEFAULT_CATEGORIES = [
  ALL_CATEGORY,
  'electronics',
  'jewelery',
  "men's clothing",
  "women's clothing",
];

export const SKELETON_COUNT = 8;
export const PER_PAGE = 8;

export const getSortOptions = () => [
  { value: SORT_DEFAULT, label: 'Default' },
  { value: SORT_PRICE_ASC, label: 'Price: Low to High' },
  { value: SORT_PRICE_DESC, label: 'Price: High to Low' },
];
