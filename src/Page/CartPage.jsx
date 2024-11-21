import React, { useState } from 'react';

const CartPage = () => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
        setCart(cart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    };
  
    const removeFromCart = (id) => {
      setCart(cart.filter(item => item.id !== id));
    };
  
    const updateQuantity = (id, quantity) => {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      ));
    };
  
    const calculateTotalPrice = () => {
      const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return total - (total * 0.10); // 10% discount
    };

    return (
        <div className="p-4">
             <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className='font-bold text-gray-600'>your cart is empty.....</p>
      ) : (
        <div>
             <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3>{item.title}</h3>
                  <p>${item.price} + {item.quantity}</p>
                  <button onClick={() => addToCart(product)} className="bg-blue-500 text-white p-2 rounded mt-2">
      Add to Cart
    </button>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
                </div>
                <div>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-green-500 text-white px-2 py-1 mr-2">+</button>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-yellow-500 text-white px-2 py-1">-</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="font-bold">Total Price: ${calculateTotalPrice().toFixed(2)}</h2>
          </div>
          
        </div>
      )}
            
        </div>
    );
};

export default CartPage;