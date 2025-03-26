// PortfolioTable.jsx
import React, { useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows as allRows } from "../data/data";

function PortfolioTable({
  searchTerm,
  filterActive,
  displayedColumns,
  advancedFilters,
  sortOption
}) {
  const filteredRows = useMemo(() => {
    let temp = [...allRows];

    // 1. Search by loan number
    if (searchTerm) {
      temp = temp.filter((row) =>
        row.loanNo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Basic toggle filter
    if (filterActive) {
      temp = temp.filter((row) => row.currentDPD > 90);
    }

    // 3. Advanced filters
    advancedFilters.forEach((filter) => {
      switch (filter.field) {
        case "loanType":
          temp = temp.filter((row) => row.loanType === filter.value);
          break;
        case "region":
          temp = temp.filter((row) => row.region === filter.value);
          break;
        case "dpdMin":
          temp = temp.filter(
            (row) => row.currentDPD >= parseInt(filter.value, 10)
          );
          break;
        case "dpdMax":
          temp = temp.filter(
            (row) => row.currentDPD <= parseInt(filter.value, 10)
          );
          break;
        default:
          break;
      }
    });

    // 4. Sorting
    switch (sortOption) {
      case "loanDesc":
        // Sort by sanctionAmount descending
        // Assuming row.sanctionAmount is a number or a numeric string
        temp.sort(
          (a, b) =>
            parseAmount(b.sanctionAmount) - parseAmount(a.sanctionAmount)
        );
        break;
      case "loanAsc":
        temp.sort(
          (a, b) =>
            parseAmount(a.sanctionAmount) - parseAmount(b.sanctionAmount)
        );
        break;
      case "dpdDesc":
        temp.sort((a, b) => b.currentDPD - a.currentDPD);
        break;
      case "dpdAsc":
        temp.sort((a, b) => a.currentDPD - b.currentDPD);
        break;
      default:
        // No sorting
        break;
    }

    return temp;
  }, [searchTerm, filterActive, advancedFilters, sortOption]);

  return (
    <div style={{ height: 500, width: "100%", backgroundColor: "#fff" }}>
      <DataGrid
        rows={filteredRows}
        columns={displayedColumns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        sx={{
          "& .MuiDataGrid-cell": {
            fontSize: "0.8rem",
            whiteSpace: "normal",
            wordBreak: "break-word"
          },
          "& .MuiDataGrid-columnHeaders": {
            fontSize: "0.85rem"
          }
        }}
      />
    </div>
  );
}

// Helper function to parse the 'sanctionAmount' if it's a string like "₹ 1,843,068"
function parseAmount(amount) {
  return parseFloat(amount.replace(/[^\d.-]/g, "")) || 0;
}

export default PortfolioTable;
