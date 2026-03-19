import CloseIcon from '../../assets/icons/CloseIcon.jsx';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl text-slate-500 cursor-pointer"
        >
          <CloseIcon />
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="mb-4 h-72 w-full rounded-lg object-contain"
        />
        <div className="mb-2 text-xl font-semibold text-slate-900">
          {product.title}
        </div>
        <div className="mb-4 text-sm text-slate-600">{product.description}</div>
        <div className="space-y-1 text-sm">
          <div>
            <span className="font-semibold text-slate-900">Price:</span> $
            {product.price}
          </div>
          <div>
            <span className="font-semibold text-slate-900">Category:</span>{' '}
            {product.category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
