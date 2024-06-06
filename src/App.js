// src/App.js
import React, { useContext, useState } from "react";
import { ProductContext, ProductProvider } from "./context/ProductContext";
import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useContext(ProductContext);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl">buy App</h1>
          <button
            onClick={handleCartOpen}
            className="bg-blue-800 px-4 py-2 rounded"
          >
            Cart {cart.length}
          </button>
        </header>
        <main className="p-4">
          <AddProductForm />
          <ProductList />
        </main>
        <Modal isOpen={isCartOpen} onClose={handleCartClose}>
          <Cart />
        </Modal>
      </div>
    </>
  );
};

export default App;
