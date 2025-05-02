import React from "react";

type Props = {
  onSearch: (text: string) => void;
  onRegionChange: (region: string) => void;
  onCategoryChange: (category: string) => void;
};

function Filters({ onSearch, onRegionChange, onCategoryChange }: Props) {
  return (
    <div className="p-4 bg-white shadow-md rounded-md flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search destination..."
        onChange={(e) => onSearch(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-64"
      />

      {/* 🌍 Region Filter */}
      <select
        onChange={(e) => onRegionChange(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2"
      >
        <option value="">All Regions</option>
        <option value="Amhara">Amhara</option>
        <option value="Tigray">Tigray</option>
        <option value="Oromia">Oromia</option>
        <option value="SNNPR">SNNPR</option>
      </select>

      {/* 🗂️ Category Filter */}
      <select
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2"
      >
        <option value="">All Categories</option>
        <option value="Nature">Nature</option>
        <option value="Historical">Historical</option>
        <option value="Religious">Religious</option>
      </select>
    </div>
  );
}

export default Filters;
