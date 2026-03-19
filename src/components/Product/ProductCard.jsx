const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="cursor-pointer rounded-lg bg-white p-4"
    >
      <img
        src={product.image}
        alt={product.title}
        className="mb-3 h-48 w-full object-contain"
      />
      <div className="mb-2 text-sm font-medium text-gray-900 line-clamp-2">
        {product.title}
      </div>
      <div className="mb-1 text-base font-semibold text-gray-900">
        ${product.price}
      </div>
      <div className="text-sm text-gray-500">{product.category}</div>
    </div>
  );
};

export default ProductCard;
