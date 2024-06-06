// src/context/ProductContext.js
import React, { createContext, useReducer } from "react";

const initialState = {
  products: [],
  cart: [],
};

const ProductContext = createContext(initialState);

const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [
          ...state.products,
          { ...action.payload, id: state.products.length + 1 },
        ],
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const addProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <ProductContext.Provider value={{ ...state, addProduct, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
