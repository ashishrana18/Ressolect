// ColumnSelector.jsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
  DialogActions,
  Button
} from "@mui/material";
import { columns as allColumns } from "../data/data";

function ColumnSelector({ open, handleClose, selected, setSelected }) {
  const handleToggle = (field) => {
    if (selected.includes(field)) {
      setSelected(selected.filter((col) => col !== field));
    } else {
      setSelected([...selected, field]);
    }
  };

  const handleReset = () => {
    // Reset selected columns to include all columns
    setSelected(allColumns.map((col) => col.field));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Select Columns</DialogTitle>
      <DialogContent>
        <FormGroup>
          {allColumns.map((col) => (
            <FormControlLabel
              key={col.field}
              control={
                <Checkbox
                  checked={selected.includes(col.field)}
                  onChange={() => handleToggle(col.field)}
                />
              }
              label={col.headerName}
            />
          ))}
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ColumnSelector;
