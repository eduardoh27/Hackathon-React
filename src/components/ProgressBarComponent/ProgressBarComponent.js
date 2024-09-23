import React, { useState } from 'react';
import { ProgressBar, Form } from 'react-bootstrap';
import './ProgressBarComponent.css';  

function ProgressBarComponent() {
  const [percentage, setPercentage] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setPercentage(Math.min(100, Math.max(0, value)));
  };

  return (
    <div className="d-flex flex-column align-items-center p-4 border rounded" style={{ maxWidth: '400px', margin: 'auto' }}>
      <h3>Progress bar</h3>
      
      <ProgressBar now={percentage} label={`${percentage}%`} className="w-100 mb-3 custom-progress-bar" />
      
      <Form.Group className="w-100 d-flex justify-content-center align-items-center" controlId="formPercentage">
        <Form.Label className="me-2 mb-0">Input Percentage:</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter percentage"
          value={inputValue}
          onChange={handleInputChange}
          style={{ width: '80px' }} 
        />
      </Form.Group>
    </div>
  );
}

export default ProgressBarComponent;
