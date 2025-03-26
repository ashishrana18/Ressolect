// AdvancedFilters.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from "@mui/material";

// Example filter fields: Loan Type, Region, Min/Max DPD
const LOAN_TYPES = ["Home Loan", "Car Loan", "Personal Loan"];
const REGIONS = ["North", "South", "East", "West"];

function AdvancedFilters({ open, onClose, onApply }) {
  // Local state for filter fields
  const [loanType, setLoanType] = useState("");
  const [region, setRegion] = useState("");
  const [dpdMin, setDpdMin] = useState("");
  const [dpdMax, setDpdMax] = useState("");

  const handleApply = () => {
    // Build an array of active filters
    const newFilters = [];

    if (loanType) {
      newFilters.push({ field: "loanType", value: loanType });
    }
    if (region) {
      newFilters.push({ field: "region", value: region });
    }
    if (dpdMin) {
      newFilters.push({ field: "dpdMin", value: dpdMin });
    }
    if (dpdMax) {
      newFilters.push({ field: "dpdMax", value: dpdMax });
    }

    onApply(newFilters);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Advanced Filters</DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 300 }}
      >
        {/* Loan Type */}
        <FormControl fullWidth>
          <InputLabel>Loan Type</InputLabel>
          <Select
            value={loanType}
            label="Loan Type"
            onChange={(e) => setLoanType(e.target.value)}
          >
            <MenuItem value="">(Any)</MenuItem>
            {LOAN_TYPES.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Region */}
        <FormControl fullWidth>
          <InputLabel>Region</InputLabel>
          <Select
            value={region}
            label="Region"
            onChange={(e) => setRegion(e.target.value)}
          >
            <MenuItem value="">(Any)</MenuItem>
            {REGIONS.map((r) => (
              <MenuItem key={r} value={r}>
                {r}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* DPD Range */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <TextField
            label="Min DPD"
            type="number"
            value={dpdMin}
            onChange={(e) => setDpdMin(e.target.value)}
            fullWidth
          />
          <TextField
            label="Max DPD"
            type="number"
            value={dpdMax}
            onChange={(e) => setDpdMax(e.target.value)}
            fullWidth
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleApply}>
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AdvancedFilters;
