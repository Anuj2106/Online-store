import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agree) {
      alert('Form submitted successfully!');
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  return (
    <>
    <section className='login-section'>

    <div className="container">
      <div className="row ">

 <div className="col-12 ">


    <Form onSubmit={handleSubmit} className="w-50 border  mx-auto mt-5 p-5">
    < h1 className='text-center'> Sign-Up</h1>
      <Form.Group controlId="formName">
        <Form.Control
          type="text"
          className='p-3 my-3'
           placeholder="Enter your name"
           name="name"
           value={formData.name}
           onChange={handleChange}
           />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Control
          type="email"
          placeholder="Enter your email"
          className='p-3 my-3'
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Control
          type="password"
          className='p-3 my-3'
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          />
      </Form.Group>

      <Form.Group controlId="formCheckbox" className='m-0'>
        <Form.Check
          type="checkbox"
          label={
            <>
              By continuing, I agree to the <a href="/terms">terms of use</a>{' '}
              and <a href="/privacy">privacy policy</a>.
            </>
          }
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          />
      </Form.Group>
      <div className="row">

      <Button variant="primary" className='' type="submit">
        Submit
      </Button>
      </div>

    </Form>
          </div>
          </div>
        </div>
          </section>
          </>
  );
};

export default FormComponent;
