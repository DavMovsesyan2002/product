const EmptyState = () => {
  return (
    <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
      <div className="text-lg font-semibold text-slate-900">
        No products found
      </div>
      <div className="mt-2 text-sm text-slate-600">
        Try changing the search term or selected category.
      </div>
    </div>
  );
};

export default EmptyState;
