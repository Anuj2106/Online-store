import React from 'react'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';
import Review from "./Card"


const Description = () => {
    const [key, setKey] = useState('description');
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3 "
                        >
                            <Tab eventKey="description" title="Description">
                                <p>
                                    Clothing is an essential part of human culture and expression, playing a vital role in how we present ourselves to the world. From everyday wear to special occasions, clothes combine function and style to meet different needs and preferences. Whether it’s for comfort, performance, or aesthetics, each piece of clothing serves a purpose that goes beyond just covering the body.
                                </p>
                                <ListGroup  as="ol" numbered>
      <ListGroup.Item>Fabric: Clothes are crafted from various materials, each offering its own set of properties. Cotton is soft and breathable, making it ideal for everyday wear, while polyester is durable and quick-drying, often used in sportswear. Silk, known for its luxurious feel, is common in formal attire, and wool provides warmth for cold climates.</ListGroup.Item>
      <ListGroup.Item>Style: Styles in clothing vary depending on trends, personal taste, and occasion. Casual styles like jeans, t-shirts, and hoodies are popular for relaxed settings. For professional environments, formal clothing such as tailored suits and dresses are standard. Activewear and athleisure focus on comfort and flexibility, blending style with functionality.</ListGroup.Item>
      <ListGroup.Item>Fit: The way clothes fit the body can dramatically change their appearance and feel. Tight or tailored fits, such as those found in formal wear, create a sharp, structured look. Loose and relaxed fits, common in casual or loungewear, prioritize comfort and ease of movement.</ListGroup.Item>
      <ListGroup.Item>Design: The design of clothing often features elements like patterns, colors, and textures that enhance its visual appeal. Some pieces are minimalistic, with clean lines and solid colors, while others are adorned with intricate details like embroidery, prints, or embellishments that make a bold statement.</ListGroup.Item>
    </ListGroup>
                            </Tab>
                            <Tab eventKey="revives" title="Reviews">
                           <Review/>
                                
                            </Tab>
                        </Tabs>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Description