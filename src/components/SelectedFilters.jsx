// SelectedFilters.jsx
import React from "react";
import { Chip } from "@mui/material";

function SelectedFilters({ advancedFilters, removeFilter }) {
  const getLabel = (filter) => {
    switch (filter.field) {
      case "loanType":
        return `Loan Type: ${filter.value}`;
      case "region":
        return `Region: ${filter.value}`;
      case "dpdMin":
        return `Min DPD: ${filter.value}`;
      case "dpdMax":
        return `Max DPD: ${filter.value}`;
      default:
        return `${filter.field}: ${filter.value}`;
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {advancedFilters.map((f, idx) => (
        <Chip
          key={idx}
          label={getLabel(f)}
          onDelete={() => removeFilter(f)}
          color="primary"
          variant="outlined"
        />
      ))}
    </div>
  );
}

export default SelectedFilters;
