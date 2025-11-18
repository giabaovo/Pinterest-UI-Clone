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

const navItems = [
  { 
    icon: HomeOutline, 
    iconActive: HomeSolid,
    label: 'Trang chủ', 
    href: '/' 
  },
  { 
    icon: SearchOutline, 
    iconActive: SearchSolid,
    label: 'Khám phá', 
    href: '/explore' 
  },
  { 
    icon: UserOutline, 
    iconActive: UserSolid,
    label: 'Hồ sơ', 
    href: '/profile' 
  },
  { 
    icon: PlusOutline, 
    iconActive: PlusSolid,
    label: 'Tạo', 
    href: '/create' 
  },
  { 
    icon: BellOutline, 
    iconActive: BellSolid,
    label: 'Thông báo', 
    href: '/notifications' 
  },
  { 
    icon: ChatOutline, 
    iconActive: ChatSolid,
    label: 'Tin nhắn', 
    href: '/messages' 
  },
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
          const IconComponent = isActive ? item.iconActive : item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="p-3 rounded-full hover:bg-gray-200 transition-colors group relative"
              title={item.label}
            >
              <IconComponent 
                className="w-6 h-6 text-black"
              />
            </Link>
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
