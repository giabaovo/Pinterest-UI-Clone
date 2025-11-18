'use client';

import { MagnifyingGlassIcon as Search } from '@heroicons/react/24/outline';

export default function HeaderSearchBar() {
  return (
    <div className="flex-1">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="w-full pl-12 pr-4 py-3.5 rounded-full bg-[#e9e9e9] hover:bg-[#e0e0e0] focus:bg-white focus:outline-none focus:shadow-md transition-all text-base font-medium"
        />
      </div>
    </div>
  );
}
