import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productpage from './Page/Productpage';
import CartPage from './Page/CartPage';
import Navbar from './Component/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Productpage />}/>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;