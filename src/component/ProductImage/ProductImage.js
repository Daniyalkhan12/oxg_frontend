import React, { useState, useEffect } from 'react';
import './ProductImage.css';

const ProductSection = () => {
  const [displayedImages, setDisplayedImages] = useState([]);

  useEffect(() => {
    const dummyImages = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg',
      'image5.jpg',
      'image6.jpg',
    ];
    setDisplayedImages(dummyImages.slice(0, 5));
  }, []); // Empty dependency array to run only once

  return (
    <div className="product-section">
      <div className="image-container">
        {displayedImages.map((image, index) => (
          <img key={index} src={image} alt={`Product image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;