import React from 'react'
import Home from './Pages/Home';
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shopcatigorie from './Pages/Shopcatigorie';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import man_banner from './images/mens-banner.jpeg'
import women_banner from './images/womens-banner.jpg'
import kids_banner from './images/kids-banner.jpg'
const Routerpage = () => {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/men' element={<Shopcatigorie banner={man_banner} category="men"/>}/>
      <Route path='/women' element={<Shopcatigorie banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<Shopcatigorie banner={kids_banner} category="kids"/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>

   </>
  )
}

export default Routerpage