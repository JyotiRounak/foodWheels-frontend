const Shimmer: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Filters Skeleton */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="h-10 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
        <div className="flex-1 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array(12).fill(0).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            {/* Image Skeleton */}
            <div className="h-48 bg-gray-200"></div>

            <div className="p-4">
              {/* Title Skeleton */}
              <div className="h-6 bg-gray-200 rounded mb-3"></div>

              {/* Rating and SLA Skeleton */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-10 bg-gray-200 rounded"></div>
                  <div className="h-5 w-5 bg-gray-200 rounded"></div>
                </div>
                <div className="h-4 w-16 bg-gray-200 rounded"></div>
              </div>

              {/* Description Skeleton (2 lines) */}
              <div className="space-y-2 mb-3">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>

              {/* Cost and Button Skeleton */}
              <div className="flex items-center justify-between">
                <div className="h-6 w-20 bg-gray-200 rounded"></div>
                <div className="h-9 w-16 bg-orange-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shimmer