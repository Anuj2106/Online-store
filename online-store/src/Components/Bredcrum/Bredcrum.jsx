import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
export const Breadcrum = ({ product }) => {
  return (
    <>
      <h5>Home <IoIosArrowForward/> Shop <IoIosArrowForward/> {product?.name}</h5>
      {console.log(product)}
    </>
  );
};
