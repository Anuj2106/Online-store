import React from 'react'
import img from "../../images/img2.png"
const Offers = () => {
  return (
 <>
 <section className="banner">
  <div className="container mt-5">
    <div className="row ">
        <div className="col-12 col-lg-6 mt-5 text-center ">
        <h1>  Exclusive   </h1>
        <h1> Offer For You </h1>
        <h6 className='text-capitalize'>  only on sellers products </h6>
        <button className=' btn btn-danger border-1 rounded-4 px-4 mt-2 '>  Check Now   </button>
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

export default Offers