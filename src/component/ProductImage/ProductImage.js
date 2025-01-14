import React, { useState, useEffect } from 'react';
import './ProductImage.css';

const ProductSection = ({ categoryID }) => {
  const [displayedImages, setDisplayedImages] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null); // For the modal
  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await fetch(`${process.env.REACT_APP_API_URL}/material/category-images/?categoryID=${categoryID}`, {
  //       });

  //       if (!response.ok) {
  //         console.error("Error fetching product images");
  //         return;
  //       }

  //       const responseData = await response.json();
  //       if (responseData.error) {
  //         console.error("Error in response: ", responseData.error);
  //         return;
  //       }
  //       console.log(responseData)
  //       // Limit to first 5 images for display, modify this logic if needed
  //       setDisplayedImages(responseData.slice(0, 5));
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   fetchImages();
  // }, [categoryID]); // Dependency array with categoryID

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products by categoryID using fetch API
    const fetchProducts = async () => {
      setLoading(true); // Set loading state
      setError(null); // Reset error state
      try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/material/category-images/?categoryID=${categoryID}`, {
          });
  
          if (!response.ok) {
            console.error("Error fetching product images");
            return;
          }


          const responseData = await response.json();
          if (responseData.error) {
            console.error("Error in response: ", responseData.error);
            return;
          }
          console.log("images",responseData)
          
        if (!(typeof responseData === 'string' || responseData instanceof String))
          // Limit to first 5 images for display, modify this logic if needed
          setDisplayedImages(responseData.slice(0, 5));
        else
          setDisplayedImages({})
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
  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the clicked image to show in the modal
  };

  const closeModal = () => {
    setSelectedImage(null); // Close the modal
  };

  return (
    <div className="product-section">
      <div className="image-container">
        {displayedImages.length > 0 ? (
          
          displayedImages.map((image, index) => (
            <div
              key={index}
              className="image-wrapper"
              onClick={() => handleImageClick(image.image)}
            >
              <img
                src={`${process.env.REACT_APP_API_URL}${image.image}`}
                alt={`Product ${index + 1}`}
                className="thumbnail"
              />
              <div className="hover-overlay">
                <span className="zoom-icon">🔍</span>
              </div>
            </div>
          ))
        ) : (
          <p>No images available for this category.</p>
        )}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={`${process.env.REACT_APP_API_URL}${selectedImage}`} alt="Enlarged" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSection;
