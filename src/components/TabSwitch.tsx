import React from 'react';

type Tab = {
  id: string;
  label: string;
};

type TabSwitchProps = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
};

export default function TabSwitch({ tabs, activeTab, onTabChange }: TabSwitchProps) {
  return (
    <div className="flex justify-center space-x-1 bg-gray-100 p-1 rounded-lg max-w-md mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}