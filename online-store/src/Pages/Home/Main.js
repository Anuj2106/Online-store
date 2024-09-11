import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import  img from '../../images/model-img.png'
const Main = () => {
  return (
   <>
   <section className="banner">
   <div className="container-fluid mt-5">
    <div className="row ">
        <div className="col-12 col-lg-6 mt-5 text-center ">
        <h4> Newly Arivals Only </h4>
        <h1>
            New <br />Collection <br /> For everyone
        </h1>
        <button className=' btn btn-danger border-1 rounded-4 px-4 mt-2 '> Latest Collection <FaArrowRightLong/> </button>
        </div>
            
        <div className="col-12 col-lg-6 mt-1  ">
            <img src={img}  className="img-fluid "alt="" />
   </div>
    </div>
       
   </div>
   </section>
   </>
  )
}

export default Main