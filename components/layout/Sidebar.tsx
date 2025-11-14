'use client';

import { useState, useEffect } from 'react';
import { Home, Compass, Plus, Bell, MessageCircle, User, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { icon: Home, label: 'Trang chủ', href: '/' },
  { icon: Compass, label: 'Khám phá', href: '/explore' },
  { icon: User, label: 'Hồ sơ', href: '/profile' },
  { icon: Plus, label: 'Tạo', href: '/create' },
  { icon: Bell, label: 'Thông báo', href: '/notifications' },
  { icon: MessageCircle, label: 'Tin nhắn', href: '/messages' },
];

export default function Sidebar() {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return (
      <aside className="fixed left-0 top-0 h-screen w-20 bg-white border-r border-gray-200 z-40" />
    );
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-white border-r border-gray-200 flex flex-col items-center py-4 z-40">
      {/* Pinterest Logo */}
      <Link href="/" className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 transition-colors mb-4">
        <svg className="w-7 h-7 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12z"/>
        </svg>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center gap-2 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`p-3 rounded-full transition-colors group relative ${
                isActive ? 'bg-black text-white' : 'hover:bg-gray-100'
              }`}
              title={item.label}
            >
              <Icon className="w-6 h-6" strokeWidth={2.5} />
              <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Settings at Bottom */}
      <nav className="flex flex-col items-center gap-2 mb-4">
        <Link
          href="/settings"
          className="p-3 rounded-full hover:bg-gray-100 transition-colors group relative"
          title="Cài đặt"
        >
          <Settings className="w-6 h-6" strokeWidth={2.5} />
          <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Cài đặt
          </span>
        </Link>
      </nav>
    </aside>
  );
}
