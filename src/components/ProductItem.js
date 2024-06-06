// src/components/ProductItem.js
import React, { useState } from "react";

const ProductItem = ({ product, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, selectedSize });
    } else {
      alert("Please select a size.");
    }
  };

  return (
    <div className=" mt-4 bg-slate-100 grid text-center md:grid-cols-5 md:justify-center gap-2 p-6 rounded   mb-4">
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="mb-2">{product.description}</p>
      <p className="mb-2">Price: {product.price}</p>
      <div className="mb-4">
        {product.sizes.map((size) => (
          <label key={size} className="inline-flex items-center mr-4">
            <input
              type="radio"
              name={`${product.name}-size`}
              value={size}
              checked={selectedSize === size}
              onChange={() => setSelectedSize(size)}
              className="form-radio"
            />
            <span className="ml-2">{size}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
