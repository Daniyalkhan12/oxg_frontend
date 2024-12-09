import React, { useState } from 'react';
import "./ProductInformation.css";

function Table() {
  const [tableData, setTableData] = useState([
    { Hersteller: 'GM-Plast', Typ: 'Distribution', Produkt: 'Microdukt 12x 10/6mm', Beschreibung: 'Mantelfarbe orange - mit Farbstreifen auf Verbundrohrmantel mit 4x Farbstreifen und 10° versetzt (VDE DIN Farbcode)', BestellNr: 'nicht bekannt' },
    { Hersteller: 'EGE-Plast', Typ: 'Feeder', Produkt: 'Microdukt 4x 14/10mm', Beschreibung: '', BestellNr: '' },
    { Hersteller: 'Hexatronic', Typ: 'Agg Netz', Produkt: 'Microdukt 4x 14/10mm', Beschreibung: '', BestellNr: '' },
    { Hersteller: 'Rehau', Typ: 'Trench', Produkt: 'Singleduct 1x 10/6mm', Beschreibung: '', BestellNr: '' },
    { Hersteller: 'Acome', Typ: 'Inhausrohre', Produkt: 'Singleduct 1x 7/5mm (82ca)', Beschreibung: '', BestellNr: '' },
  ]);

  return (
    <table border={1} className="table">
      <thead>
        <tr>
          <th className="table-header">Hersteller</th>
          <th className="table-header">Typ</th>
          <th className="table-header">Produkt</th>
          <th className="table-header">Beschreibung</th>
          <th className="table-header">Bestell Nr.</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.Hersteller}</td>
            <td>{row.Typ}</td>
            <td>{row.Produkt}</td>
            <td>{row.Beschreibung}</td>
            <td>{row.BestellNr}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;