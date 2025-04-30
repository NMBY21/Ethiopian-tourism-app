import { useState } from "react";

type FiltersProps = {
  onSearch: (text: string) => void;
  onRegionChange: (region: string) => void;
  onCategoryChange: (category: string) => void;
};

function Filters({ onSearch, onRegionChange, onCategoryChange }: FiltersProps) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search destinations..."
        value={search}
        onChange={handleSearchChange}
        className="p-2 border rounded w-full md:w-1/3"
      />

      {/* 🌍 Region */}
      <select
        onChange={(e) => onRegionChange(e.target.value)}
        className="p-2 border rounded w-full md:w-1/3"
        defaultValue=""
      >
        <option value="">All Regions</option>
        <option value="Amhara">Amhara</option>
        <option value="Oromia">Oromia</option>
        <option value="Tigray">Tigray</option>
        <option value="SNNPR">SNNPR</option>
        {/* Add more regions */}
      </select>

      {/* 🗂️ Category */}
      <select
        onChange={(e) => onCategoryChange(e.target.value)}
        className="p-2 border rounded w-full md:w-1/3"
        defaultValue=""
      >
        <option value="">All Categories</option>
        <option value="Nature">Nature</option>
        <option value="History">History</option>
        <option value="Culture">Culture</option>
        {/* Add more categories */}
      </select>
    </div>
  );
}

export default Filters;
