'use client';

import { useState } from 'react';

const tabs = [
  { id: 'all', label: 'Tất cả' },
  { id: 'vo-tru', label: 'Vô trụ' },
];

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="flex justify-center gap-4 py-4 border-b border-gray-200 bg-white">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-full font-semibold transition-colors ${
            activeTab === tab.id
              ? 'bg-black text-white'
              : 'hover:bg-gray-100'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
