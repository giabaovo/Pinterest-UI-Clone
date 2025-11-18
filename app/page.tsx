'use client';

import { useState, useEffect, useRef } from 'react';
import MasonryGrid from '@/components/pin/MasonryGrid';
import TabNavigation from '@/components/layout/TabNavigation';
import { mockPins } from '@/lib/mockData';
import type { Pin } from '@/types';

export default function Home() {
  const [pins, setPins] = useState<Pin[]>(mockPins);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Function to generate more pins
  const generateMorePins = (pageNum: number): Pin[] => {
    const startId = pageNum * 36;
    return Array.from({ length: 36 }, (_, i) => ({
      id: `${startId + i + 1}`,
      imageUrl: `https://picsum.photos/400/${450 + (i % 8) * 30}?random=${startId + i + 1}`,
      title: `Pin ${startId + i + 1}`,
      author: i % 3 === 0 ? `User ${(i % 10) + 1}` : '',
      width: 400,
      height: 450 + (i % 8) * 30,
    }));
  };

  // Load more pins
  const loadMorePins = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const newPins = generateMorePins(page);
      setPins(prev => [...prev, ...newPins]);
      setPage(prev => prev + 1);
      setIsLoading(false);
    }, 1000);
  };

  // Setup Intersection Observer for infinite scroll
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMorePins();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isLoading, page]);

  return (
    <div className="min-h-screen bg-white">
      <TabNavigation />
      <div className="pt-6 pb-12">
        <MasonryGrid pins={pins} />
        
        {/* Invisible trigger for infinite scroll */}
        <div ref={loadMoreRef} className="h-20" />
      </div>
    </div>
  );
}
