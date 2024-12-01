import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div>
            <div className="border rounded-lg p-4 flex flex-col items-center">
    <img src={product.image} alt={product.title} className="h-48 w-full object-cover mb-2" />
    <h2 className="text-lg font-bold">{product.title}</h2>
    <p className="text-gray-700">${product.price}</p>
    <button onClick={() => addToCart(product)} className="bg-blue-500 text-white p-2 rounded mt-2">
      Add to Cart
    </button>
  </div>
        </div>
    );
};

export default ProductCard;