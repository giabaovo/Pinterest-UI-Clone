'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { EllipsisHorizontalIcon as MoreHorizontal, ArrowDownTrayIcon as Download, LinkIcon, ShareIcon as Share } from '@heroicons/react/24/outline';
import type { Pin } from '@/types';

interface PinCardProps {
  pin: Pin;
  onClick?: () => void;
}

export default function PinCard({ pin, onClick }: PinCardProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div
      className="relative group cursor-zoom-in break-inside-avoid mb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative rounded-2xl overflow-hidden bg-gray-100">
        <Image
          src={pin.imageUrl}
          alt={pin.title}
          width={pin.width}
          height={pin.height}
          className={`w-full h-auto transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />

        {/* Hover Overlay */}
        {isMounted && isHovered && (
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-200">
            {/* Top Actions */}
            <div className="absolute top-3 right-3 flex gap-2">
              <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors">
                Lưu
              </button>
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Actions */}
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
              <div className="flex gap-2">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Download className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <LinkIcon className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Share className="w-5 h-5" />
                </button>
              </div>
              
              {pin.author && (
                <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                  {pin.author}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Title (optional, shown below image) */}
      {pin.title && (
        <div className="mt-2">
          <p className="text-sm font-semibold text-black line-clamp-2">
            {pin.title}
          </p>
        </div>
      )}
    </div>
  );
}
