// src/components/ProductList.js
import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { products, addToCart } = useContext(ProductContext);

  return (
    <div className="bg-white rounded shadow-md mb-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
