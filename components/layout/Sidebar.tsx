'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

// Heroicons - Outline (inactive)
import { 
  HomeIcon as HomeOutline,
  MagnifyingGlassCircleIcon as SearchOutline,
  UserIcon as UserOutline,
  PlusIcon as PlusOutline,
  BellIcon as BellOutline,
  ChatBubbleLeftIcon as ChatOutline,
  Cog6ToothIcon as SettingsOutline
} from '@heroicons/react/24/outline';

// Heroicons - Solid (active)
import { 
  HomeIcon as HomeSolid,
  MagnifyingGlassCircleIcon as SearchSolid,
  UserIcon as UserSolid,
  PlusIcon as PlusSolid,
  BellIcon as BellSolid,
  ChatBubbleLeftIcon as ChatSolid
} from '@heroicons/react/24/solid';

const exploreCategories = [
  'Nghệ thuật',
  'Thú cưng',
  'Làm đẹp',
  'Thiết kế',
  'Ẩm thực',
  'Thời trang nữ',
  'Thời trang nam',
  'Trang trí nhà cửa',
  'DIY',
  'Lời hay ý đẹp',
  'Du lịch',
  'Tập luyện',
  'Đám cưới'
];

const navItems = [
  { 
    icon: HomeOutline, 
    iconActive: HomeSolid,
    label: 'Trang chủ', 
    href: '/',
    hasDropdown: false
  },
  { 
    icon: SearchOutline, 
    iconActive: SearchSolid,
    label: 'Khám phá', 
    href: '/explore',
    hasDropdown: true,
    isCustomIcon: false
  },
  { 
    icon: UserOutline, 
    iconActive: UserSolid,
    label: 'Hồ sơ', 
    href: '/profile',
    hasDropdown: false
  },
  { 
    icon: PlusOutline, 
    iconActive: PlusSolid,
    label: 'Tạo', 
    href: '/create',
    hasDropdown: false
  },
  { 
    icon: BellOutline, 
    iconActive: BellSolid,
    label: 'Thông báo', 
    href: '/notifications',
    hasDropdown: false
  },
  { 
    icon: ChatOutline, 
    iconActive: ChatSolid,
    label: 'Tin nhắn', 
    href: '/messages',
    hasDropdown: false
  },
];

export default function Sidebar() {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
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
      <Link 
        href="/" 
        className="flex items-center justify-center w-12 h-12 mb-4 hover:bg-gray-100 rounded-full transition-colors"
      >
        <Image
          src="/images/pinterest_logo.webp"
          alt="Pinterest"
          width={48}
          height={48}
          className="w-full h-full object-contain"
          priority
        />
      </Link>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center gap-2 mt-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const showDropdown = hoveredItem === item.href && item.hasDropdown;
          
          return (
            <div 
              key={item.href}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.href}
                className="p-3 rounded-full hover:bg-gray-200 transition-colors group relative block"
                title={item.label}
              >
                {(() => {
                  const IconComponent = isActive ? item.iconActive : item.icon;
                  return <IconComponent className="w-6 h-6 text-black" />;
                })()}
              </Link>

              {/* Dropdown Menu for Explore */}
              {showDropdown && (
                <div className="absolute left-full ml-2 -top-35 w-56 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50">
                  {exploreCategories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/explore/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2.5 hover:bg-gray-100 text-sm font-semibold text-black transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Settings at Bottom */}
      <nav className="flex flex-col items-center gap-2 mb-4">
        <Link
          href="/settings"
          className="p-3 rounded-full hover:bg-gray-200 transition-colors group relative"
          title="Cài đặt"
        >
          <SettingsOutline className="w-6 h-6 text-black" />
        </Link>
      </nav>
    </aside>
  );
}
