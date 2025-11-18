'use client';

import { useState, useEffect } from 'react';
import { ChevronDownIcon as ChevronDown } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import HeaderSearchBar from '@/components/ui/HeaderSearchBar';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsScrollingDown(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      setIsMounted(false);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`fixed left-20 right-0 z-30 bg-white transition-transform duration-300 ${
      isScrollingDown ? 'top-0' : 'top-0'
    }`}>
      <div className="flex items-center gap-3 px-4 py-4">
        {/* Search Bar - extends almost full width */}
        <HeaderSearchBar />

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
            <ChevronDown className="w-4 h-4 text-black" />
          </button>

          {/* Dropdown Menu */}
          {isMounted && isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50">
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-xs text-black mb-1 font-semibold">Hiện đang trong</p>
                <div className="flex items-center gap-2">
                  <Image
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-sm text-black">Tài khoản của bạn</p>
                    <p className="text-xs text-black font-semibold">Cá nhân</p>
                  </div>
                </div>
              </div>
              
              <div className="py-1">
                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-black">
                  Hồ sơ của bạn
                </Link>
                <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-black">
                  Cài đặt
                </Link>
                <Link href="/settings/account" className="block px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-black">
                  Điều chỉnh nguồn cấp dữ liệu trang chủ của bạn
                </Link>
                <Link href="/install" className="block px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-black">
                  Cài đặt ứng dụng Windows
                </Link>
              </div>

              <div className="border-t border-gray-200 py-1">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-black">
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
