import React from 'react'
import Card from 'react-bootstrap/Card';
import './Item.css'

const Item = (props) => {
  return (
    <>
      <div className="col-12 col-lg-3 mx-auto Card">
    <Card style={{ width: '20rem'  }} className='shadow-lg p-3 mb-5 bg-body rounded'>
      <Card.Img variant="top" src={props.image} style={{ height: '23rem'  }} />
      <Card.Body >
        <Card.Title> {props.name}</Card.Title>
        <Card.Text>
            <p>
            {props.description}
            </p>

          </Card.Text>
      </Card.Body>
      <Card.Body className='d-flex justify-content-evenly'>
         <p> <strike> {props.oldPrize}</strike></p>
         <p> {props.newPrize}   </p>
      </Card.Body>
    </Card>

  </div>
    </>
  )
}

export default Item