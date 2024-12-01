import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Modle from './Page/Modle';


const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      alert('Item already added to the cart');
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar cartCount={cart.length} openCart={() => setIsModalOpen(true)} />
        <Routes>
           {/* <Route path='/' element={<ProductList />}/>  */}
          <Route path='/Cart' element={<CartModal />} />
          {/* <Route path='/modle' element={<Modle />}/> */}
        </Routes>
        </BrowserRouter>
        
      <ProductList products={products} addToCart={addToCart} />
      {isModalOpen && (
        <CartModal 
          cartItems={cart} 
          removeFromCart={removeFromCart} 
          closeModal={() => setIsModalOpen(false)} 
        />
           
      )}
      
    </div>
  );
};

export default App;