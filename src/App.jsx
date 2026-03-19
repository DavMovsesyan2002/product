import Search from './components/Fields/Search';
import Filter from './components/Fields/Filter';
import ProductCard from './components/Product/ProductCard';
import ProductModal from './components/Product/ProductModal';
import { filterProducts, sortProducts } from './utils/utils.js';
import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { getProducts } from './services/service.js';
import {
  ALL_CATEGORY,
  DEFAULT_CATEGORIES,
  getSortOptions,
  SKELETON_COUNT,
  SORT_DEFAULT,
  PER_PAGE,
} from './constants/constants.js';
import SkeletonCard from './components/UI/SkeletonCard';
import EmptyState from './components/UI/EmptyState';
import Sort from './components/Fields/Sort';
import Pagination from './components/UI/Pagination';

function App() {
  const [selectedSort, setSelectedSort] = useState(SORT_DEFAULT);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORY);
  const [searchValue, setSearchValue] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { enqueueSnackbar } = useSnackbar();
  const sortOptions = getSortOptions();

  const fetchProducts = async (signal) => {
    try {
      setIsLoading(true);
      const data = await getProducts(signal);
      setProducts(data);
    } catch (error) {
      enqueueSnackbar('Failed to load products. Please try again.', {
        variant: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue, selectedCategory, selectedSort]);

  const filteredProducts = filterProducts(
    products,
    searchValue,
    selectedCategory
  );

  const visibleProducts = sortProducts(filteredProducts, selectedSort);

  const totalPages = Math.ceil(visibleProducts.length / PER_PAGE);
  const startIndex = (currentPage - 1) * PER_PAGE;

  const paginatedProducts = visibleProducts.slice(
    startIndex,
    startIndex + PER_PAGE
  );

  const handlePrevPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };

  const handleClearFilters = () => {
    setSearchValue('');
    setSelectedCategory(ALL_CATEGORY);
    setSelectedSort(SORT_DEFAULT);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-3xl font-bold text-slate-900">Product Store</div>
        </div>

        <div className="mb-6 flex flex-col gap-4 rounded-2xl bg-white p-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Search value={searchValue} onChange={setSearchValue} />
          <Filter
            categories={DEFAULT_CATEGORIES}
            value={selectedCategory}
            onChange={setSelectedCategory}
          />
          <Sort
            options={sortOptions}
            value={selectedSort}
            onChange={setSelectedSort}
          />
          <button
            type="button"
            onClick={handleClearFilters}
            className="cursor-pointer rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Clear Filter
          </button>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : paginatedProducts.length ? (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={setSelectedProduct}
                />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPrev={handlePrevPage}
              onNext={handleNextPage}
            />
          </>
        ) : (
          <EmptyState />
        )}

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
