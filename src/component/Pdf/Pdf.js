import React, { useEffect, useState } from "react";
import "./Pdf.css";
import pdfIcon from "./pdf-icon.png"; // Add a small PDF icon image in your project folder

const DocumentSection = ({ categoryID }) => {
  const [pdfs, setPdfs] = useState([]);
  const [groupedPdfs, setGroupedPdfs] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPdfs = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/material/category-pdfs/?categoryID=${categoryID}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        console.log("pdf", responseData)
        if (!(typeof responseData === 'string' || responseData instanceof String)){
          setPdfs(responseData);
          groupPdfsByType(responseData);
        }
        else
          setPdfs({})
      } catch (err) {
        setError("Failed to load PDF files.");
      } finally {
        setLoading(false);
      }
    };

    if (categoryID) {
      fetchPdfs();
    }
  }, [categoryID]);

  const groupPdfsByType = (pdfList) => {
    const grouped = pdfList.reduce((acc, pdf) => {
      if (!acc[pdf.pdf_type]) {
        acc[pdf.pdf_type] = [];
      }
      acc[pdf.pdf_type].push(pdf);
      return acc;
    }, {});
    setGroupedPdfs(grouped);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const sectionHeaders = {
    datenblatter: "Datenblätter",
    montageanleitung: "Montageanleitung",
    prufzertifikate: "Prüfzertifikate",
    sonstiges: "Sonstiges",
  };

  return (
    <div className="document-section">
      {
      pdfs.length > 0 ? (
      Object.keys(groupedPdfs).map((pdfType) => (
        <div key={pdfType}>
          <div className="section-header">{sectionHeaders[pdfType]}</div>
          <div className="pdf-icons">
            {groupedPdfs[pdfType].map((pdf) => (
              <div key={pdf.id} className="pdf-icon">
                <a href={pdf.pdf_file} target="_blank" rel="noopener noreferrer">
                  {/* PDF Icon */}
                  <img style={{width: '30px', height: '30px'}}src={pdfIcon} alt="PDF Icon" />
                  {/* File Name */}
                  {pdf.pdf_file.split("/").pop()}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))): (
        <p>No pdfs available for this category.</p>)}
    </div>
  );
};

export default DocumentSection;
