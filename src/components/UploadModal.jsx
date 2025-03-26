// UploadModal.jsx
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
import { toast } from "react-toastify";

function UploadModal({ open, handleClose, onSubmit }) {
  const [documentName, setDocumentName] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentRemarks, setDocumentRemarks] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    if (!file) {
      console.error("File is required.");
      return;
    }

    const uploadData = { documentName, documentType, documentRemarks, file };

    // Call the parent's onSubmit function
    if (onSubmit) {
      onSubmit(uploadData);
    }

    // Show success toast
    toast.success("Uploaded Successfully!", {
      position: "top-right"
    });

    // Reset form fields
    setDocumentName("");
    setDocumentType("");
    setDocumentRemarks("");
    setFile(null);

    // Close the modal
    handleClose();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      console.log("File selected:", e.target.files[0]);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Upload Document</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="normal">
          <InputLabel id="doc-name-label">Document Name</InputLabel>
          <Select
            labelId="doc-name-label"
            label="Document Name"
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
          >
            <MenuItem value="Aadhaar Card">Aadhaar Card</MenuItem>
            <MenuItem value="PAN Card">PAN Card</MenuItem>
            <MenuItem value="Driving License">Driving License</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="doc-type-label">Document Type</InputLabel>
          <Select
            labelId="doc-type-label"
            label="Document Type"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
          >
            <MenuItem value="ID Proof">ID Proof</MenuItem>
            <MenuItem value="Address Proof">Address Proof</MenuItem>
            <MenuItem value="Financial">Financial</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          margin="normal"
          label="Document Remarks"
          value={documentRemarks}
          onChange={(e) => setDocumentRemarks(e.target.value)}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel shrink className="pb-2">
            Choose File:
          </InputLabel>
          <label className="inline-block bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 mt-2">
            Select File
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              required
            />
          </label>
          {file ? (
            <p className="text-sm mt-2">{file.name}</p>
          ) : (
            <p className="text-sm text-red-500 mt-2">No file chosen yet</p>
          )}
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit">
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSubmit} disabled={!file}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UploadModal;
