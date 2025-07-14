'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const DIET_TYPES = [
  { label: 'Vegetarian', value: 'vegetarian' },
  { label: 'Vegan', value: 'vegan' },
  { label: 'Gluten-Free', value: 'gluten free' },
];
const CUISINE_TYPES = [
  { label: 'Italian', value: 'italian' },
  { label: 'Mexican', value: 'mexican' },
  { label: 'Asian', value: 'asian' },
];
const MEAL_TYPES = [
  { label: 'Breakfast', value: 'breakfast' },
  { label: 'Lunch', value: 'lunch' },
  { label: 'Dinner', value: 'dinner' },
];

interface FilterState {
  diet: string;
  cuisine: string;
  meal: string;
}

interface SidePanelProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  onFilter: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ filters, setFilters, onFilter }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-full z-40 bg-white shadow-lg transition-all duration-300 ${collapsed ? 'w-12' : 'w-64'} group`}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <div className="flex flex-col h-full p-2">
        {/* Filter Button */}
        <button
          className="mb-4 flex items-center gap-2 px-3 py-2 bg-secondary text-white rounded hover:bg-secondary/90 transition"
          onClick={onFilter}
          title="Apply Filters"
        >
          <span className="text-lg">🔍</span>
          {!collapsed && <span>Filter</span>}
        </button>
        {/* Favorite Button */}
        <Link href="/favorites" className="mb-6 flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition" title="Go to Favorites">
          <span className="text-lg">❤️</span>
          {!collapsed && <span>Favorites</span>}
        </Link>
        {/* Filters */}
        <div className="flex-1 overflow-y-auto">
          <div className="mb-4">
            <h3 className="font-semibold text-secondary mb-2">Diet Type</h3>
            {DIET_TYPES.map(opt => (
              <label key={opt.value} className="flex items-center mb-1 cursor-pointer">
                <input
                  type="radio"
                  name="diet"
                  value={opt.value}
                  checked={filters.diet === opt.value}
                  onChange={() => setFilters({ ...filters, diet: opt.value })}
                  className="mr-2"
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-secondary mb-2">Cuisine Type</h3>
            {CUISINE_TYPES.map(opt => (
              <label key={opt.value} className="flex items-center mb-1 cursor-pointer">
                <input
                  type="radio"
                  name="cuisine"
                  value={opt.value}
                  checked={filters.cuisine === opt.value}
                  onChange={() => setFilters({ ...filters, cuisine: opt.value })}
                  className="mr-2"
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-secondary mb-2">Meal Type</h3>
            {MEAL_TYPES.map(opt => (
              <label key={opt.value} className="flex items-center mb-1 cursor-pointer">
                <input
                  type="radio"
                  name="meal"
                  value={opt.value}
                  checked={filters.meal === opt.value}
                  onChange={() => setFilters({ ...filters, meal: opt.value })}
                  className="mr-2"
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel; 