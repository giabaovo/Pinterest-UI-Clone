'use client';

import { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex items-center gap-3 px-4 py-2 ml-20">
        {/* Search Bar - extends almost full width */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" strokeWidth={2.5} />
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-[#e9e9e9] hover:bg-[#e0e0e0] focus:bg-white focus:outline-none focus:shadow-md transition-all text-base font-medium"
            />
          </div>
        </div>

        {/* Avatar with Dropdown */}
        <div className="relative flex-shrink-0">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 hover:bg-gray-100 rounded-full p-1 pr-2 transition-colors"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="https://i.pravatar.cc/150?img=1"
                alt="Profile"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <ChevronDown className="w-4 h-4 text-gray-600" strokeWidth={2.5} />
          </button>

          {/* Dropdown Menu */}
          {isMounted && isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50">
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-xs text-gray-600 mb-1 font-medium">Hiện đang trong</p>
                <div className="flex items-center gap-2">
                  <Image
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm">Tài khoản của bạn</p>
                    <p className="text-xs text-gray-600 font-medium">Cá nhân</p>
                  </div>
                </div>
              </div>
              
              <div className="py-1">
                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium">
                  Hồ sơ của bạn
                </Link>
                <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium">
                  Cài đặt
                </Link>
                <Link href="/settings/account" className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium">
                  Điều chỉnh nguồn cấp dữ liệu trang chủ của bạn
                </Link>
                <Link href="/install" className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium">
                  Cài đặt ứng dụng Windows
                </Link>
              </div>

              <div className="border-t border-gray-200 py-1">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm font-medium">
                  Đăng xuất
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
