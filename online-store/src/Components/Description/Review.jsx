import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ReviewCard = (props) => {
  return (
    <Card className="mb-3 shadow-sm me-4 w-100" style={{width:"30rem", height:"20rem"}}>
      <Card.Body>
        <Card.Title>{props.reviewerName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.reviewDate}</Card.Subtitle>
        
        <Card.Text>{props.reviewText}</Card.Text>
        <Button variant="primary" className='justify-content-baseline'>Read more</Button>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
