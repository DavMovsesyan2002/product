const SkeletonCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm">
      <div className="space-y-3">
        <div className="h-40 w-full rounded-lg bg-slate-200" />
        <div className="h-4 w-3/4 rounded bg-slate-200" />
        <div className="h-4 w-1/2 rounded bg-slate-200" />
        <div className="h-4 w-1/4 rounded bg-slate-200" />
      </div>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </div>
  );
};

export default SkeletonCard;
