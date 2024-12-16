import React, { useState, useEffect } from 'react';
import "./table.css";

function Table({ categoryID }) {
  const [tableData, setTableData] = useState([]); // Holds heading details
  const [groupedData, setGroupedData] = useState({}); // Groups data by headings

  const fetchHeadingDetails = async () => {
    const response = await fetch(`http://127.0.0.1:8000/material/heading-details/?categoryID=${categoryID}`);
    const data = await response.json();
    console.log(data);
   
    const fetchedData = data.map((item) => ({
      heading: item.heading.headingName,
      details: { generalInfo: item.generalInfo, DetailedInfo: item.DetailedInfo },
    }));
    
    if (!(typeof data === 'string' || data instanceof String))
      setTableData(fetchedData);
    else
      setTableData(null)
  };

  useEffect(() => {
    if (categoryID) fetchHeadingDetails();
  }, [categoryID]);

  useEffect(() => {
    const grouped = tableData.reduce((acc, item) => {
      if (!acc[item.heading]) acc[item.heading] = [];
      acc[item.heading].push(item.details);
      return acc;
    }, {});
    setGroupedData(grouped);
    console.log(grouped);
  }, [tableData]);

  return (
    <div className="heading-section-container">
      {Object.keys(groupedData).length > 0 ? (
        Object.entries(groupedData).map(([heading, details], index) => (
          <div key={index} className="heading-section-container">
            <h3>{heading}</h3>
            <table border={1} className="heading-section-table">
              <thead>
                <tr>
                  <th className="heading-section-table-header">Anforderung</th>
                  <th className="heading-section-table-header">Eigenschaften</th>
                </tr>
              </thead>
              <tbody>
                {details.map((detail, detailIndex) => (
                  <tr key={detailIndex}>
                    <td>{detail.generalInfo}</td>
                    <td>{detail.DetailedInfo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        
        <tr>
        <td colSpan="5" style={{ textAlign: "center" }}>No data available</td>
      </tr>
      )}
    </div>
  );
}

export default Table;
