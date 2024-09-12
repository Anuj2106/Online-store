import React from 'react'
import Home from './Pages/Home';
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shopcatigorie from './Pages/Shopcatigorie';
import Shop from './Pages/Shop';
import Products from './Pages/Products';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
const Routerpage = () => {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/men' element={<Shopcatigorie/>}/>
      <Route path='/women' element={<Shop/>}/>
      <Route path='/kids' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>

   </>
  )
}

export default Routerpage