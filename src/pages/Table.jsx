import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const Table = () => {
  //   const [rowData] = useState([
  //     { make: "Toyota", model: "Celica", price: 35000 },
  //     { make: "Ford", model: "Mondeo", price: 32000 },
  //     { make: "Porsche", model: "Boxster", price: 72000 },
  //   ]);

  const [rowData, setRowData] = useState();

  // never changes, so we can use useMemo
  const columnDefs = useMemo(
    () => [
      { field: "athlete" },
      { field: "country" },
      { field: "year" },
      { field: "date" },
      { field: "sport" },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" },
      { field: "total" },
    ],
    []
  );

  // never changes, so we can use useMemo
  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
    }),
    []
  );

  //   const [columnDefs] = useState([
  //     { field: "make" },
  //     { field: "model" },
  //     { field: "price" },
  //   ]);

  // gets called once, no dependencies, loads the grid data
  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        defaultColDef={defaultColDef}
        columnDefs={columnDefs}
      ></AgGridReact>
    </div>
  );
};

export default Table;
