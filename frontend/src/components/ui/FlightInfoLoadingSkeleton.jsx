import React from 'react';

function FlightInfoLoadingSkeleton() {
  return (
    <section className="grid md:grid-cols-2 gap-8">
      <div className="grid gap-6">
        <div className="flex items-center gap-4">
          <div>
            <div className="h-8 bg-gray-800 rounded w-32 mb-2"></div>
            <div className="h-6 bg-gray-800 rounded w-24"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-white">
          <div className="grid gap-1">
            <div className="h-4 bg-gray-800 rounded w-24"></div>
            <div className="h-6 bg-gray-800 rounded w-16"></div>
          </div>
          <div className="grid gap-1">
            <div className="h-4 bg-gray-800 rounded w-16"></div>
            <div className="h-6 bg-gray-800 rounded w-20"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-white">
          <div className="grid gap-1">
            <div className="h-4 bg-gray-800 rounded w-24"></div>
            <div className="h-6 bg-gray-800 rounded w-20"></div>
          </div>
          <div className="grid gap-1">
            <div className="h-4 bg-gray-800 rounded w-16"></div>
            <div className="h-6 bg-gray-800 rounded w-24"></div>
          </div>
          <div className="grid gap-1">
            <div className="h-4 bg-gray-800 rounded w-20"></div>
            <div className="h-6 bg-gray-800 rounded w-10"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-white">
          <div className="grid gap-1">
            <div className="h-4 bg-gray-800 rounded w-16"></div>
            <div className="h-6 bg-gray-800 rounded w-24"></div>
          </div>
          <div className="grid gap-1">
            <div className="h-4 bg-gray-800 rounded w-16"></div>
            <div className="h-6 bg-gray-800 rounded w-24"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-white">
          <div className="grid gap-1">
            <div className="h-4 bg-gray-800 rounded w-16"></div>
            <div className="h-6 bg-gray-800 rounded w-24"></div>
          </div>
          <div className="grid gap-1">
            <div className="h-4 bg-gray-800 rounded w-24"></div>
            <div className="h-6 bg-gray-800 rounded w-16"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-white">
          <div className="grid gap-1">
            <div className="h-4 bg-gray-800 rounded w-24"></div>
            <div className="h-6 bg-gray-800 rounded w-16"></div>
          </div>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="h-4 bg-gray-700 rounded w-32 mb-4"></div>
          <div className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-1">
                <div className="h-4 bg-gray-700 rounded w-24"></div>
                <div className="h-6 bg-gray-700 rounded w-16"></div>
              </div>
              <div className="grid gap-1">
                <div className="h-4 bg-gray-700 rounded w-20"></div>
                <div className="h-6 bg-gray-700 rounded w-24"></div>
              </div>
            </div>
            <div className="h-10 bg-gray-700 rounded w-24 mt-4"></div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="h-4 bg-gray-700 rounded w-32 mb-4"></div>
          <div className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-1">
                <div className="h-4 bg-gray-700 rounded w-24"></div>
                <div className="h-6 bg-gray-700 rounded w-16"></div>
              </div>
              <div className="grid gap-1">
                <div className="h-4 bg-gray-700 rounded w-24"></div>
                <div className="h-6 bg-gray-700 rounded w-16"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-1">
                <div className="h-4 bg-gray-700 rounded w-24"></div>
                <div className="h-6 bg-gray-700 rounded w-16"></div>
              </div>
              <div className="grid gap-1">
                <div className="h-4 bg-gray-700 rounded w-24"></div>
                <div className="h-6 bg-gray-700 rounded w-16"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-1">
                <div className="h-4 bg-gray-700 rounded w-24"></div>
                <div className="h-6 bg-gray-700 rounded w-16"></div>
              </div>
              <div className="grid gap-1">
                <div className="h-4 bg-gray-700 rounded w-24"></div>
                <div className="h-6 bg-gray-700 rounded w-16"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 bg-gray-700 rounded w-32"></div>
      </div>
    </section>
  );
}
export default FlightInfoLoadingSkeleton;
