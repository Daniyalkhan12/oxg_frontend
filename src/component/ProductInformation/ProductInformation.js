import React, { useState, useEffect } from 'react';
import "./ProductInformation.css";

function Table({ categoryID }) {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products by categoryID using fetch API
    const fetchProducts = async () => {
      setLoading(true); // Set loading state
      setError(null); // Reset error state
      try {
        console.log(process.env.REACT_APP_API_URL)
        const response = await fetch(
          `http://127.0.0.1:8000/material/products/?categoryID=${categoryID}`,
          {          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        console.log("product information", data) 
        if (!(typeof data === 'string' || data instanceof String))
          setTableData(data); // Update table data with the fetched products
        else
          setTableData(null)
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load product data.");
      } finally {
        setLoading(false); // Reset loading state
        // console.log(tableData)
      }
    };

    if (categoryID) {
      fetchProducts();
    }
  }, [categoryID]); // Run when `categoryID` changes

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

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
        {tableData && tableData.length > 0 ? (
          tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.BestellnummerHersteller || "N/A"}</td>
              <td>{row.Type || "N/A"}</td>
              <td>{row.Kurztext || "N/A"}</td>
              <td>{row.Langtext || "N/A"}</td>
              <td>{row.BestellNr || "N/A"}</td>
            </tr>
          ))
        ) : (
          
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
