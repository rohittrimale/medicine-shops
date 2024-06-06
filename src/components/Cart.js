// src/components/Cart.js
import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ProductContext } from "../context/ProductContext";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-md mx-auto p-4 h-96 overflow-auto ">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="flex justify-between items-center border-t mt-4 pt-4">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
