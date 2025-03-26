// QuickSortBar.jsx
import React from "react";

function QuickSortBar({ sortOption, setSortOption }) {
  // Replace 'Newest'/'Oldest' with 'Highest Loan'/'Lowest Loan'
  const options = [
    { label: "Highest Loan", value: "loanDesc" },
    { label: "Lowest Loan", value: "loanAsc" },
    { label: "Highest DPD", value: "dpdDesc" },
    { label: "Lowest DPD", value: "dpdAsc" }
  ];

  return (
    <div className="flex space-x-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          className={`px-3 py-1 rounded border transition-colors ${
            sortOption === opt.value
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
          onClick={() => setSortOption(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default QuickSortBar;
