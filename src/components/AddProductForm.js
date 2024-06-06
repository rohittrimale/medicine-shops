// src/components/AddProductForm.js
import React, { useState, useRef, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const AddProductForm = () => {
  const { addProduct } = useContext(ProductContext);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);

  const [sizes, setSizes] = useState({
    M: false,
    L: false,
    XL: false,
  });

  const handleSizeChange = (e) => {
    const { name, checked } = e.target;
    setSizes((prevSizes) => ({ ...prevSizes, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const availableSizes = Object.keys(sizes).filter((size) => sizes[size]);
    addProduct({
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: parseFloat(priceRef.current.value),
      sizes: availableSizes,
    });
    nameRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
    setSizes({
      M: false,
      L: false,
      XL: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white grid text-center md:grid-cols-5 md:justify-center gap-2 p-6 rounded shadow-md mb-4"
    >
      <div className="mb-4">
        <input
          type="text"
          ref={nameRef}
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          ref={descriptionRef}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          ref={priceRef}
          placeholder="Price"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4 flex justify-center items-center">
        <label className="inline-flex items-center justify-center mr-4">
          <input
            type="checkbox"
            name="M"
            checked={sizes.M}
            onChange={handleSizeChange}
            className="form-checkbox"
          />
          <span className="ml-2">M</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            name="L"
            checked={sizes.L}
            onChange={handleSizeChange}
            className="form-checkbox"
          />
          <span className="ml-2">L</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="XL"
            checked={sizes.XL}
            onChange={handleSizeChange}
            className="form-checkbox"
          />
          <span className="ml-2">XL</span>
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 h-10 flex justify-center items-center py-1 rounded"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
