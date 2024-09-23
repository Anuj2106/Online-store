import React from 'react';
import Card from 'react-bootstrap/Card';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const handleImageClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds smooth scrolling effect
    });
  }
  return (
    <>
      <div className="col-12 col-lg-3 mx-auto mt-5 Card">
        <Card style={{ width: '20rem', height: '40rem' }} className='shadow-lg p-3 mb-5 bg-body rounded'>
          <Link to={`/product/${props.id}`}> {/* Corrected Link */}
            <Card.Img variant="top"   onClick={handleImageClick} src={props.image} style={{ height: '23rem' }} />
          </Link>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              <p>{props.description}</p>
            </Card.Text>
          </Card.Body>
          <Card.Body className='d-flex justify-content-evenly'>
            <p><strike> ${props.oldPrize}</strike></p>
            <p className='text-danger'> ${props.newPrize}</p>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Item;
