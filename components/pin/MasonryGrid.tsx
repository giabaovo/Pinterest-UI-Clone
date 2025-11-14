'use client';

import { useEffect, useRef, useState } from 'react';
import PinCard from './PinCard';
import type { Pin } from '@/types';

interface MasonryGridProps {
  pins: Pin[];
}

export default function MasonryGrid({ pins }: MasonryGridProps) {
  const [isClient, setIsClient] = useState(false);
  const [columns, setColumns] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateColumns = useRef(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    if (width < 640) setColumns(2);
    else if (width < 1024) setColumns(3);
    else if (width < 1536) setColumns(4);
    else setColumns(5);
  });

  useEffect(() => {
    setIsClient(true);
    updateColumns.current();
    
    const handleResize = () => updateColumns.current();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isClient) {
    return <div ref={containerRef} className="w-full px-4" />;
  }

  const columnArrays: Pin[][] = Array.from({ length: columns }, () => []);
  pins.forEach((pin, index) => {
    columnArrays[index % columns].push(pin);
  });

  return (
    <div ref={containerRef} className="w-full px-4">
      <div className="flex gap-4 justify-center max-w-[1920px] mx-auto">
        {columnArrays.map((columnPins, columnIndex) => (
          <div key={columnIndex} className="flex-1 min-w-0">
            {columnPins.map((pin) => (
              <PinCard key={pin.id} pin={pin} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
