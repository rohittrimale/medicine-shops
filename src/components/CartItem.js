// src/components/CartItem.js
import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-gray-500">Size: {item.selectedSize}</p>
        <p className="text-gray-500">Quantity: {item.quantity}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
