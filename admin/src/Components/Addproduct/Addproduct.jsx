import React, { useState } from 'react';
import { Form, Button, Col, Row, Container, Card, Image } from 'react-bootstrap';
import { BsUpload } from 'react-icons/bs';

const ProductForm = () => {
  const [validated, setValidated] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    newPrize: "",
    oldPrize: "",
  });


  const addProduct = async () => {
    console.log(productDetails); // Log product details for debugging
  
    // Create FormData to send with the fetch request
    let formData = new FormData();
    
    // Append product details to the FormData
    formData.append('name', productDetails.name);
    formData.append('oldPrize', productDetails.oldPrize);
    formData.append('newPrize', productDetails.newPrize);
    formData.append('category', productDetails.category);
    
    // Append the image file to the FormData
    if (imageFile) {
      formData.append('image', imageFile); // Use the image file selected
    }
  
    try {
      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });
  
      // Check if the response is OK (status in the range 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the JSON response if needed
      const responseData = await response.json();
      console.log('Response Data:', responseData); // Log the response data
  
      // Optionally handle success (like showing a success message or redirecting)
    } catch (error) {
      console.error('Error uploading product:', error); // Log any error
    }
  };
  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file)); // Generate the image preview URL
      // Set the image file name to the product details
      setProductDetails({ ...productDetails, image: file.name });
    }
  };

  const checkHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  
  return (
    <Container fluid className="d-flex justify-content-center align-content-center" style={{ backgroundColor: '#f8f9fa' }}>
      <Row className="w-100">
        <Col md={6} lg={5} className="mx-auto">
          <Card className="shadow-sm p-4" style={{ minHeight: '500px' }}>
            <Card.Body>
              <Card.Title className="text-center mb-4">Product Form</Card.Title>
              <Form noValidate validated={validated} >
                {/* Product Title (Full Row) */}
                <Form.Group controlId="productTitle">
                  <Form.Label>Product Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    value={productDetails.name}
                    onChange={checkHandler}
                    placeholder="Enter product title"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a product title.
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Offer Price and New Price (Same Row) */}
                <Row>
                  <Col>
                    <Form.Group controlId="offerPrice">
                      <Form.Label>Offer Price</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        name="oldPrize"
                        value={productDetails.oldPrize}
                        onChange={checkHandler}
                        placeholder="Enter offer price"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide an offer price.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="newPrice">
                      <Form.Label>New Price</Form.Label>
                      <Form.Control
                        required
                        name="newPrize"
                        type="number"
                        value={productDetails.newPrize}
                        onChange={checkHandler}
                        placeholder="Enter new price"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a new price.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Image Upload and Category */}
                <Row>
                  <Col>
                    <Form.Group controlId="productImage">
                      <Form.Label>Upload Product Image</Form.Label>
                      <div className="d-flex align-items-center">
                        {/* Hidden File Input */}
                        <Form.Control
                          type="file"
                          accept="image/*"
                          style={{ display: 'none' }}
                          id="hiddenFileInput"
                          onChange={handleImageChange}
                        />
                        
                        {/* If Image Preview is available, show it, otherwise show the upload icon */}
                        {imagePreview ? (
                          <Image src={imagePreview} rounded style={{ width: '50px', height: '50px' }} />
                        ) : (
                          <Button
                            variant="outline-secondary"
                            className="d-flex align-items-center"
                            onClick={() => document.getElementById('hiddenFileInput').click()}
                          >
                            <BsUpload className="me-2" />
                            Upload Image
                          </Button>
                        )}

                        {/* Display Selected File Name */}
                        {imageFile && <span className="ms-3">{imageFile.name}</span>}
                      </div>
                      <Form.Control.Feedback type="invalid">
                        Please upload a product image.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="productCategory">
                      <Form.Label>Product Category</Form.Label>
                      <Form.Control
                        as="select"
                        name="category"
                        value={productDetails.category}
                        onChange={checkHandler}
                        required
                      >
                        <option value="">Choose...</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Please select a product category.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Submit Button */}
                <div className="d-flex justify-content-center mt-4">
                  <Button type="submit" onClick={addProduct} variant="primary">Submit</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductForm;
