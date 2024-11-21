import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <button className='font-bold'>Welcome to My shope</button>
            <div className='font-bold'>
            <Link to={"/cart"}>Cart</Link>
            </div>
        </div>
    );
};

export default Navbar;