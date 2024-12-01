import React from 'react';
import { Link } from 'react-router-dom';

const CartModal = ({ cartItems, removeFromCart, closeModal }) => {
    return (
        <div>
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-4 rounded shadow-lg w-80">
      <h2 className="text-lg font-bold">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.title}</span>
            
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                Remove
              </button>
           
            </li>
          ))}
        </ul>
      )}
      <button onClick={closeModal} className="bg-blue-500 text-white p-2 rounded mt-4">
        Close
      </button>
     
    </div>
  </div>
        </div>
    );
};

export default CartModal;