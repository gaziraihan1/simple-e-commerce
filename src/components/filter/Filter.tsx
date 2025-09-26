"use client";

import { useState } from "react";

type FilterProps = {
  onFilter: (category: string) => void;
}

export default function Filter({ onFilter }: FilterProps) {
  const [category, setCategory] = useState("");

  const handleFilter = () => {
    onFilter(category);
  };

  return (
    <div className="flex gap-2 my-4">
      <input
        type="text"
        placeholder="Filter by category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Apply
      </button>
    </div>
  );
}
