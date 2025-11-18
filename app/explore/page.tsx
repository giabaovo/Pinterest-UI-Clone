import MasonryGrid from '@/components/pin/MasonryGrid';
import TabNavigation from '@/components/layout/TabNavigation';
import { mockPins } from '@/lib/mockData';

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-white">
      <TabNavigation />
      <div className="pt-6 pb-12">
        <h1 className="text-2xl font-bold text-center mb-6">Khám phá</h1>
        <MasonryGrid pins={mockPins} />
      </div>
    </div>
  );
}
