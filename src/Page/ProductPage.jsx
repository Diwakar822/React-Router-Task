import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Productpage = () => {

    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      };
      fetchProducts();
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">

        {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          <h2 className="text-lg font-bold mt-2">{product.title}</h2>
          <p>{product.description}</p>
          <p className="font-bold">${product.price}</p>
          {<Link to={`/`}>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4">Add to Cart</button>
            
          </Link>}
        
        </div>
      ))}
            
        </div>
    );
};

export default Productpage;