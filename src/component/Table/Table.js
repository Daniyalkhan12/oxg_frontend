import React, { useState } from 'react';
import "./table.css";

function Table() {
  const [tableData, setTableData] = useState([
    { Produkt: 'Microdukt 12x 10/6mm', Beschreibung: 'Mantelfarbe orange - mit Farbstreifen auf Verbundrohrmantel mit 4x Farbstreifen und 10° versetzt (VDE DIN Farbcode)' },
  ]);

  return (
    <table border={1} className="table">
      <thead>
        <tr>
          <th className="table-header">Produkt</th>
          <th className="table-header">Beschreibung</th>
          
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
       
            <td>{row.Produkt}</td>
            <td>{row.Beschreibung}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;