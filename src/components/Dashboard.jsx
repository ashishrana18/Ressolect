// Dashboard.jsx
import React, { useState, useMemo } from "react";
import { FiMenu, FiUpload } from "react-icons/fi";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PortfolioTable from "./PortfolioTable.jsx";
import ColumnSelector from "./ColumnSelector.jsx";
import AdvancedFilters from "./AdvancedFilters.jsx";
import SelectedFilters from "./SelectedFilters.jsx";
import QuickSortBar from "./QuickSortBar.jsx";
import UploadModal from "./UploadModal.jsx";
import { columns as allColumns } from "../data/data";

function Dashboard() {
  // States for search, filters, columns, sorting, etc.
  const [searchTerm, setSearchTerm] = useState("");
  const [filterActive, setFilterActive] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState(
    allColumns.map((col) => col.field)
  );
  const [sortOption, setSortOption] = useState(null);
  const [uploadOpen, setUploadOpen] = useState(false);

  // Toggle for mobile sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  // Filter columns
  const displayedColumns = React.useMemo(
    () => allColumns.filter((col) => selectedColumns.includes(col.field)),
    [selectedColumns]
  );

  const removeFilter = (filterToRemove) => {
    setAdvancedFilters((prev) => prev.filter((f) => f !== filterToRemove));
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilterActive(false);
    setSelectedColumns(allColumns.map((col) => col.field));
    setAdvancedFilters([]);
    setSortOption(null);
  };

  const applyAdvancedFilters = (newFilters) => {
    setAdvancedFilters(newFilters);
  };

  const handleUploadSubmit = (uploadData) => {
    console.log("Upload Data:", uploadData);
    // TODO: Implement your file upload logic here
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="flex-none border-b border-gray-300">
        <Header>
          {/* Mobile menu icon */}
          <button
            onClick={() => setShowSidebar(true)}
            className="block md:hidden ml-4 p-2"
          >
            <FiMenu size={24} />
          </button>
        </Header>
      </div>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar on md+ screens */}
        <div className="hidden md:block md:w-64">
          <Sidebar />
        </div>

        {/* Mobile Sidebar Overlay */}
        {showSidebar && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            <div className="w-64 bg-white border-r border-gray-300">
              <Sidebar />
              <div className="p-2">
                <button
                  onClick={() => setShowSidebar(false)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
                >
                  Close
                </button>
              </div>
            </div>
            <div
              className="flex-1 bg-black opacity-50"
              onClick={() => setShowSidebar(false)}
            ></div>
          </div>
        )}

        {/* Page Content */}
        {/* On md+ screens, ml-64 to accommodate sidebar, mr-64 for symmetrical spacing */}
        <div className="flex-1 md:ml-2 md:mr-2 p-4 md:p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Portfolio</h2>

          {/* QuickSortBar */}
          <div className="mb-4">
            <QuickSortBar
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <input
              type="text"
              placeholder="Search Loan Number"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 rounded mb-2 md:mb-0 md:w-1/3"
            />
            <div className="flex space-x-2">
              <button
                onClick={() => setFiltersOpen(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                More Filters
              </button>
              <button
                onClick={() => setSelectOpen(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Select Columns
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Reset
              </button>
              {/* Upload Icon Button */}
              <button
                onClick={() => setUploadOpen(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center"
              >
                <FiUpload size={20} />
                <span className="ml-2">Upload</span>
              </button>
            </div>
          </div>

          {/* Advanced Filters as Chips */}
          <SelectedFilters
            advancedFilters={advancedFilters}
            removeFilter={removeFilter}
          />

          {/* Data Table */}
          <PortfolioTable
            searchTerm={searchTerm}
            filterActive={filterActive}
            displayedColumns={displayedColumns}
            advancedFilters={advancedFilters}
            sortOption={sortOption}
          />

          {/* Modals */}
          <ColumnSelector
            open={selectOpen}
            handleClose={() => setSelectOpen(false)}
            selected={selectedColumns}
            setSelected={setSelectedColumns}
          />
          <AdvancedFilters
            open={filtersOpen}
            onClose={() => setFiltersOpen(false)}
            onApply={applyAdvancedFilters}
          />
          <UploadModal
            open={uploadOpen}
            handleClose={() => setUploadOpen(false)}
            onSubmit={handleUploadSubmit}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none border-t border-gray-300">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
