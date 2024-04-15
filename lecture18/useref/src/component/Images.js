import React, { useState } from 'react';

function Images() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Define image URLs for girls' shoes and kids' shoes
  const girlsShoesImages = [
    'girls_shoes_image1.jpg',
    'girls_shoes_image2.jpg',
    // Add more image URLs as needed
  ];

  const kidsShoesImages = [
    'kids_shoes_image1.jpg',
    'kids_shoes_image2.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div>
      <button onClick={() => setSelectedCategory('girls')}>Girls Shoes</button>
      <button onClick={() => setSelectedCategory('kids')}>Kids Shoes</button>

      {selectedCategory === 'girls' && (
        <div>
          {girlsShoesImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Girls Shoes ${index + 1}`} />
          ))}
        </div>
      )}

      {selectedCategory === 'kids' && (
        <div>
          {kidsShoesImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Kids Shoes ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Images;
