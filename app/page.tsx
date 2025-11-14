import MasonryGrid from '@/components/pin/MasonryGrid';
import TabNavigation from '@/components/layout/TabNavigation';
import { mockPins } from '@/lib/mockData';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TabNavigation />
      <div className="pt-6 pb-12">
        <MasonryGrid pins={mockPins} />
      </div>
    </div>
  );
}
