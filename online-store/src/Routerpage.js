import React from 'react';
import Home from './Pages/Home';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shopcatigorie from './Pages/Shopcatigorie';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import man_banner from './images/mens-banner.jpeg';
import women_banner from './images/womens-banner.jpg';
import kids_banner from './images/kids-banner.jpg';

const Routerpage = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path='/' element={<Home />} />

          {/* Category Routes */}
          <Route path='/men' element={<Shopcatigorie banner={man_banner} category="men" />} />
          <Route path='/women' element={<Shopcatigorie banner={women_banner} category="women" />} />
          <Route path='/kids' element={<Shopcatigorie banner={kids_banner} category="kids" />} />

          {/* User Account Routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />

          {/* Product Routes */}
          {/* Static product list route, if needed */}
          <Route path='/product' element={<Product />} />
          {/* Dynamic product route that takes productId */}
          <Route path='/product/:productId' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routerpage;
