import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Addproduct from '../../Components/Addproduct/Addproduct';
import Listproduct from '../../Components/Listproduct/Listproduct';
import Header from '../../Header';

const Admin = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/listproduct" element={<Listproduct />} />
      </Routes>
    </>
  );
};

export default Admin;
