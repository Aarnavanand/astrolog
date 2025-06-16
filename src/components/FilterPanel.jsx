import React, { useState } from 'react';

function FilterPanel({ setFilter }) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setFilter(value.toLowerCase());
  };

  return (
    <div className="mb-6 p-4 bg-slate-800 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-lg font-bold mb-2 m-5 text-blue-500">🔍 Filter Launches</h2>
      <input
        type="text"
        placeholder="Search Launches..."
        className="w-full p-3 mb-4 border rounded-xl shadow focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-white placeholder:opacity-70"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default FilterPanel;
