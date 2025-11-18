'use client';

import { useState, useEffect } from 'react';
import { ChevronDownIcon as ChevronDown, CheckIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HeaderSearchBar from '@/components/ui/HeaderSearchBar';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

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

        {/* Avatar - Click to go to profile */}
        <Link 
          href="/profile"
          className={`flex-shrink-0 rounded-full p-0.5 transition-all ${
            pathname === '/profile' ? 'ring-2 ring-green-900' : ''
          }`}
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
        </Link>

        {/* Dropdown Menu Button */}
        <div className="relative flex-shrink-0">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronDown className="w-5 h-5 text-black" />
          </button>

          {/* Dropdown Menu */}
          {isMounted && isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 z-50">
              {/* Header */}
              <div className="px-4 py-3">
                <p className="text-xs text-gray-600 mb-2">Đang đăng nhập</p>
              </div>

              {/* Current Account */}
              <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-2 border-blue-500 rounded-xl mx-3 mb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xl">
                      V
                    </div>
                    <div>
                      <p className="font-bold text-base text-black">vo Zoeeeeee</p>
                      <p className="text-sm text-gray-600">Cá nhân</p>
                      <p className="text-xs text-gray-500">baov71773@gmail.com</p>
                    </div>
                  </div>
                  <CheckIcon className="w-5 h-5 text-black" />
                </div>
              </div>

              {/* Tài khoản của bạn Section */}
              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-black mb-2">Tài khoản của bạn</p>
              </div>

              {/* Menu Items */}
              <div className="py-1">
                <Link 
                  href="/profile" 
                  className="block px-4 py-3 hover:bg-gray-100 text-base font-semibold text-black"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Hồ sơ của bạn
                </Link>
                <Link 
                  href="/settings" 
                  className="block px-4 py-3 hover:bg-gray-100 text-base font-semibold text-black"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Cài đặt
                </Link>
                <Link 
                  href="/settings/account" 
                  className="block px-4 py-3 hover:bg-gray-100 text-base font-semibold text-black"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Điều chỉnh nguồn cấp dữ liệu trang chủ của bạn
                </Link>
              </div>

              {/* Thêm tài khoản Pinterest */}
              <div className="border-t border-gray-200 py-1">
                <button className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-base font-semibold text-black">
                  Thêm tài khoản Pinterest
                </button>
              </div>

              {/* Đăng xuất */}
              <div className="border-t border-gray-200 py-1">
                <button className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-base font-semibold text-black">
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
