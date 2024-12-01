import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = ({ cartCount, openCart }) => {
    return (
        <div>
                
                
             <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
    <h1 className="text-lg font-bold">My Store</h1>
    <h1 className='text-lg font-bold'>
       <Link to={'/Cart'}>viewCart</Link> 
     <Outlet /></h1> 
    
   
    <button onClick={openCart} className="bg-transparent border-none cursor-pointer font-bold">
      Cart ({cartCount})
    </button>
  </nav>
            
        </div>
    );
};

export default Navbar;