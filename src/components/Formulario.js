import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function Formulario() {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    age: ''
  });
  const [submittedData, setSubmittedData] = useState(null);  
  const [errors, setErrors] = useState({});  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }

    if (!formData.fullName) {
      newErrors.fullName = 'FullName is required';
    }

    if (!formData.age || isNaN(formData.age)) {
      newErrors.age = 'Age must be a number';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);  
    } else {
      setErrors({});  
      setSubmittedData(formData);

      // el JSON en un alert
      alert(JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div className="p-4" style={{ maxWidth: '400px', margin: 'auto' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>FullName:</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            isInvalid={!!errors.fullName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.fullName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Age:</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {submittedData && (
        <div className="mt-4">
          <h4>Request Sent to DB with below request data</h4>
          <ul>
            <li><strong>UserName:</strong> {submittedData.username}</li>
            <li><strong>FullName:</strong> {submittedData.fullName}</li>
            <li><strong>Age:</strong> {submittedData.age}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Formulario;
