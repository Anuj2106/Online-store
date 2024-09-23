import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Table from 'react-bootstrap/Table';
import './cartItem.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const CartItems = () => {
  const { all_product, cartItems, RemovefromCart,getTotalAmount } = useContext(ShopContext);
  
  console.log(getTotalAmount());
  const shippingFees=()=>{
    let total=getTotalAmount();
    if(total<=140){
      return 40
      
    }
    else {
      return 0;
    }
  }
  const totalAmount=()=>{
    if(shippingFees()==="Free"){
      return getTotalAmount();
    }
    else{
      let finalAmount=getTotalAmount()+shippingFees();
      return finalAmount;
    }
  }
  return (
    <section className='cartItem'>
        
    <Table responsive="sm">
      <thead>
        <tr>
          <th>Products</th>
          <th>Title</th>
          <th>Prize</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {all_product.map((product) => {
          // Check if the product exists in the cart
          if (cartItems[product.id] > 0) {
              return (
                  <>

              <tr key={product.id}>
                <td><img src={product.image} alt={product.name}/></td>
                <td className='fw-bold'>{product.name}</td>
                <td className='fw-bold'> ${product.newPrice}</td>
                <td className='fw-bold'>{cartItems[product.id]}</td>
                <td className='fw-bold'>${product.newPrice * cartItems[product.id]}</td>
                <td className='fw-bold'><button onClick={() => RemovefromCart(product.id)} className='btn btn-danger text-white'>X</button></td>
              </tr>
              </>
               
            );
        }
        return null;
    })}
      </tbody>
    </Table>
    <section className='cart-total'>
<div className="container mt-5">
  <div className="row">
    <div className="col-12 col-lg-6 text-center ">
    <h4 className='text-center'>Cart Totals</h4>
    <ListGroup as="ul" >
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Sub Total</div>
        
        </div>
        <p className='fw-bolder'>${getTotalAmount()}</p>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
        Shipping Fees
         </div>
        </div>
        <p className='fw-bold'>${shippingFees()}</p>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
       Total Amount 
         </div>
        </div>
        <p className='fw-bold'>${totalAmount()}
         
          </p>
      </ListGroup.Item>
    </ListGroup>
      <button className='btn btn-danger w-50 mt-5 '> Procced To Checkout</button>
    </div>
    <div className="col-12 col-lg-6 text-center ">
       <small>if you have promo code ,Enter it here </small>
       <Form inline>
        <Row>
          <Col className='d-flex'>
            <Form.Control
              type="text"
              placeholder="Enter here"
              className=" mr-sm-2 w-50 ms-5"
            />
            <Button type="submit" className='btn btn-secondary'>Submit</Button>
          </Col>
          
        </Row>
      </Form>

    </div>
  </div>
  </div>  
      


    </section>
   
      
 
    </section>
  );
};

export default CartItems;
