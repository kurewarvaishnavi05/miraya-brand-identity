"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

const filters = [
  {
    id: 'price',
    name: 'Price Range',
    options: [
      { value: 'under-50k', label: 'Under ₹50,000' },
      { value: '50k-100k', label: '₹50,000 - ₹1,00,000' },
      { value: '100k-200k', label: '₹1,00,000 - ₹2,00,000' },
      { value: 'above-200k', label: 'Above ₹2,00,000' },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'red', label: 'Crimson Red', colorCode: '#8B0000' },
      { value: 'gold', label: 'Champagne Gold', colorCode: '#C6A46A' },
      { value: 'ivory', label: 'Warm Ivory', colorCode: '#F8F5F0' },
      { value: 'black', label: 'Midnight Black', colorCode: '#0D0D0D' },
      { value: 'emerald', label: 'Emerald Green', colorCode: '#50C878' },
      { value: 'sapphire', label: 'Sapphire Blue', colorCode: '#0F52BA' },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: 'xxl', label: 'XXL' },
      { value: 'custom', label: 'Custom Fit' },
    ],
  },
  {
    id: 'fabric',
    name: 'Fabric',
    options: [
      { value: 'silk', label: 'Pure Silk' },
      { value: 'organza', label: 'Organza' },
      { value: 'georgette', label: 'Georgette' },
      { value: 'velvet', label: 'Velvet' },
      { value: 'cotton', label: 'Cotton' },
      { value: 'chanderi', label: 'Chanderi' },
    ],
  },
  {
    id: 'availability',
    name: 'Availability',
    options: [
      { value: 'in-stock', label: 'In Stock' },
      { value: 'pre-order', label: 'Pre Order' },
    ],
  },
];

const FilterSidebar = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    price: true,
    color: true,
    size: true,
    fabric: false,
    availability: false,
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full lg:w-64 flex-shrink-0 bg-miraya-white p-6 sticky top-24 border border-miraya-black/5 shadow-sm rounded-sm">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-miraya-black/10">
        <h3 className="font-serif text-xl text-miraya-black">Filters</h3>
        <button className="text-sm text-miraya-gold hover:text-miraya-burgundy transition-colors uppercase tracking-widest font-medium">
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        {filters.map((section) => (
          <div key={section.id} className="border-b border-miraya-black/5 pb-4 last:border-0 last:pb-0">
            <button
              onClick={() => toggleSection(section.id)}
              className="flex w-full items-center justify-between py-2 text-miraya-black hover:text-miraya-gold transition-colors"
            >
              <span className="font-medium tracking-wide">{section.name}</span>
              {openSections[section.id] ? (
                <ChevronUp size={18} className="text-miraya-black/50" />
              ) : (
                <ChevronDown size={18} className="text-miraya-black/50" />
              )}
            </button>

            {openSections[section.id] && (
              <div className="mt-4 space-y-3">
                {section.id === 'color' ? (
                  <div className="grid grid-cols-6 gap-2">
                    {section.options.map((option) => (
                      <button
                        key={option.value}
                        title={option.label}
                        className="w-6 h-6 rounded-full border border-miraya-black/20 flex items-center justify-center hover:scale-110 transition-transform"
                        style={{ backgroundColor: 'colorCode' in option ? option.colorCode : undefined }}
                      >
                        {/* Selected State Example - Hardcoded to false for UI prototyping */}
                        {false && <Check size={12} className={option.value === 'ivory' ? 'text-miraya-black' : 'text-miraya-white'} />}
                      </button>
                    ))}
                  </div>
                ) : section.id === 'size' ? (
                  <div className="grid grid-cols-3 gap-2">
                    {section.options.map((option) => (
                      <button
                        key={option.value}
                        className="border border-miraya-black/10 py-2 text-xs font-medium uppercase hover:border-miraya-gold hover:text-miraya-gold transition-colors"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                ) : (
                  section.options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`filter-${section.id}-${option.value}`}
                        name={`${section.id}[]`}
                        value={option.value}
                        type="checkbox"
                        className="h-4 w-4 rounded border-miraya-black/20 text-miraya-burgundy focus:ring-miraya-gold cursor-pointer"
                      />
                      <label
                        htmlFor={`filter-${section.id}-${option.value}`}
                        className="ml-3 text-sm text-miraya-black/70 cursor-pointer hover:text-miraya-black transition-colors"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
