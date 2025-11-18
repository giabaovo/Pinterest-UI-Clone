'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserIcon as User, Cog6ToothIcon as Settings, ArrowRightOnRectangleIcon as LogOut, QuestionMarkCircleIcon as HelpCircle } from '@heroicons/react/24/outline';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 transition-opacity ring-2 ring-transparent hover:ring-gray-300"
      >
        <Image
          src="https://i.pravatar.cc/150?img=1"
          alt="User avatar"
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Image
                src="https://i.pravatar.cc/150?img=1"
                alt="User avatar"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-bold text-black">Người dùng</p>
                <p className="text-sm font-semibold text-black">@username</p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <Link
              href="/profile"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <User className="w-5 h-5 text-black" />
              <span className="font-semibold text-black">Hồ sơ của bạn</span>
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="w-5 h-5 text-black" />
              <span className="font-semibold text-black">Cài đặt</span>
            </Link>
            <Link
              href="/help"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <HelpCircle className="w-5 h-5 text-black" />
              <span className="font-semibold text-black">Trợ giúp</span>
            </Link>
          </div>

          <div className="border-t border-gray-200 py-2">
            <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-gray-100 transition-colors text-red-600">
              <LogOut className="w-5 h-5" />
              <span className="font-semibold">Đăng xuất</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
