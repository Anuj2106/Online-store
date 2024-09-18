import React, { useContext } from 'react';
import "./productdisplay.css"
import star from  '../../images/star.png'
import { ShopContext } from '../../Context/ShopContext';
const Productdisplay = ({ product }) => {
  const{addTocart}=useContext(ShopContext);
  return (
    <>
  <section className="productdisplay mt-4">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 col-lg-7 d-lg-flex">
        {/* Images that should only be visible on large devices */}
        <div className="d-none d-lg-flex flex-column w-25 align-items-start">
          <img src={product.image} className='rounded mt-0' alt="" />
          <img src={product.image} className='rounded' alt="" />
          <img src={product.image} className='rounded' alt="" />
          <img src={product.image} className='rounded' alt="" />
        </div>
        {/* Main image */}
        <div className="col-12 col-lg-6">
          <img src={product.image} className='main-img ' alt="" />
        </div>
      </div>
      <div className="col-12 col-lg-5 ">
        <h1>{product.name}</h1>
        <div>
          <img src={star} className='star' alt="" />
          <img src={star} className='star' alt="" />
          <img src={star} className='star' alt="" />
          <img src={star} className='star' alt="" />
          <img src={star} className='star' alt="" />
          (125)
        </div>
        <div className="prizelist d-flex flex-row justify-content-start mt-4">
          <h5 className='mx-2'><strike>{product.oldPrice}</strike></h5>
          <h5  className='text-danger fw-bolder'>{product.newPrice}</h5>
        </div>
        <br />
        <h6>{product.description}</h6>
      <h5>Select Size</h5>
     <div className="size align-content-lg-start mt-3  ">
      <button className='mx-2 p-2 btn-outline-dark' >S</button>
      <button className='mx-2 p-2 btn-outline-dark'>M</button>
      <button className='mx-2 p-2 btn-outline-dark'>L</button>
      <button className='mx-2 p-2 btn-outline-dark'>XL</button>
      <button className='mx-2 p-2 btn-outline-dark'>XXl</button>
     </div>
     <button className='btn btn-danger mt-5 ms-4 ps-4 pe-4 pt-3 pb-3  fw-bolder' onClick={()=>{addTocart(product.id)}}>Add To Cart</button>
      <div className="catergory mt-5  ">
        <h6 className='text-capitalize'>Category: {product.category}</h6>
      </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
}

export default Productdisplay;
