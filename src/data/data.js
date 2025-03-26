// data.js

// Columns definition
export const columns = [
  { field: "loanNo", headerName: "Loan No.", flex: 1 },
  { field: "loanType", headerName: "Loan Type", flex: 1 },
  { field: "borrower", headerName: "Borrower", flex: 1 },
  { field: "borrowerAddress", headerName: "Borrower Address", flex: 1 },
  { field: "coBorrowerName", headerName: "Co-Borrower 1 Name", flex: 1 },
  { field: "coBorrowerAddress", headerName: "Co-Borrower 1 Address", flex: 1 },
  { field: "currentDPD", headerName: "Current DPD", flex: 1 },
  { field: "sanctionAmount", headerName: "Sanction Amount", flex: 1 },
  { field: "region", headerName: "Region", flex: 1 }
];

const generateLoanNo = (num) =>
  `L28U${(num + 3240).toString().padStart(4, "0")}`;

const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const coBorrowerFirstNames = [
  "Aarav",
  "Vivaan",
  "Aditya",
  "Sai",
  "Arjun",
  "Rohan"
];
const coBorrowerLastNames = [
  "Sharma",
  "Patel",
  "Verma",
  "Reddy",
  "Gupta",
  "Singh"
];
const streets = [
  "Main Street",
  "Park Avenue",
  "Elm Street",
  "Maple Road",
  "Oak Street"
];

const regions = ["North", "South", "East", "West"];
const loanTypes = ["Home Loan", "Car Loan", "Personal Loan"];

export const rows = Array.from({ length: 50 }, (_, i) => {
  const id = i + 1;
  const loanType = randomFrom(loanTypes);
  const region = randomFrom(regions);
  const currentDPD = Math.floor(Math.random() * 121);
  const sanctionValue = Math.floor(Math.random() * 4000000) + 1000000;

  // Always generate co-borrower details
  const coBorrowerName = `${randomFrom(coBorrowerFirstNames)} ${randomFrom(
    coBorrowerLastNames
  )}`;
  const coBorrowerAddress = `${Math.floor(Math.random() * 1000)} ${randomFrom(
    streets
  )}, City ${id}`;

  return {
    id,
    loanNo: generateLoanNo(i),
    loanType,
    borrower: `Borrower ${id}`,
    borrowerAddress: `${id * 10} Main Street, City ${id}`,
    coBorrowerName,
    coBorrowerAddress,
    currentDPD,
    sanctionAmount: `₹ ${sanctionValue.toLocaleString()}`,
    region
  };
});
