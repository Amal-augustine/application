import { Button } from 'react-bootstrap';
import '../src/bootstrap.css';
import './App.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
  });



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName) {
      toast.error('First name is required!');
      return;
    }

    if (!formData.lastName) {
      toast.error('Last name is required!');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9.]+@gmail\.com$/;
    if (!formData.email) {
      toast.error('Email is required!');
      return;
    } else if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid Gmail address!');
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phoneNumber) {
      toast.error('Phone number is required!');
      return;
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      toast.error('Phone number must be exactly 10 digits and contain only numbers!');
      return;
    }

    if (!formData.gender) {
      toast.error('Gender is required!');
      return;
    }

    if (!formData.dateOfBirth) {
      toast.error('Date of Birth is required!');
      return;
    }

   

    toast.success('Form submitted successfully!');

    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      email: '',
      phoneNumber: '',
    });

  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setFormData({ ...formData, phoneNumber: value });
  };

  return (
    <>
      <center>
        <h2 style={{ marginTop: '60px' }}>Application Form</h2>
        <p>Enter your information below</p>

        <Form onSubmit={handleSubmit}>
          <div className=" justify-content-center"/>
            <Col xs={6} lg={3} className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.firstName}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/[^a-zA-Z]/.test(value)) {
                    alert('Only alphabets are allowed in First Name!');
                  }
                  setFormData({
                    ...formData,
                    firstName: value.replace(/[^a-zA-Z]/g, ''),
                  });
                }}
                placeholder="First"
              />
            </Col>

            <Col xs={6} lg={3}className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.lastName}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/[^a-zA-Z]/.test(value)) {
                    alert('Only alphabets are allowed in Last Name!');
                  }
                  setFormData({
                    ...formData,
                    lastName: value.replace(/[^a-zA-Z]/g, ''),
                  });
                }}
                placeholder="Last"
              />
            </Col>

          <div className="d-flex justify-content-center mt-3">
            <div className="d-flex">
              <div className="me-5">
                <Form.Check
                  type="radio"
                  value="Male"
                  name="gender"
                  label="Male"
                  checked={formData.gender === 'Male'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
              </div>
              <div>
                <Form.Check
                  type="radio"
                  value="Female"
                  name="gender"
                  label="Female"
                  checked={formData.gender === 'Female'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
              </div>
            </div>
          </div>

          <Row className="d-flex justify-content-center mt-3 " >
            <Col xs={6} lg={4} className="mb-3">
             
              
              <Form.Group controlId="dateOfBirth"  >
  <Form.Label >Date of Birth</Form.Label>
  <ReactDatePicker  
    selected={formData.dateOfBirth ? new Date(formData.dateOfBirth) : null}
    onChange={(date) => 
      setFormData({ ...formData, dateOfBirth: date.toISOString().split("T")[0] })
    }
    placeholderText="Select Date"
    dateFormat="yyyy-MM-dd"
    className="form-control " 
  />
</Form.Group>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center mt-3">
            <Col xs={6} lg={3} className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="E-mail"
              />
            </Col>
          </Row>

          <Row className="d-flex justify-content-center mt-3">
            <Col xs={6} lg={3} className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={formData.phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Phone Number (10 digits)"
                maxLength={10}
              />
            </Col>
          </Row>

          
          

          <Button
            style={{ width: '150px', marginTop: '50px', borderRadius: '10px' }}
            type="submit" onClick={handleSubmit}
          >
            Submit
          </Button>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
          />
        </Form>
      </center>
    </>
  );
}

export default App;
