import { Button } from 'react-bootstrap';
import '../src/bootstrap.css';
import './App.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

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
      toast.error("First name is required!");
      return;
    }

    if (!formData.lastName) {
      toast.error("Last name is required!");
      return;
    }

    if (!formData.email) {
      toast.error("Email is required!");
      return;
    }

    if (!formData.phoneNumber) {
      toast.error("Phone number is required!");
      return;

    }
    if(!formData.gender){
      toast.error("gender is required")
      return
    }

    if (formData.phoneNumber.length !== 10) {
      alert("Phone number must be exactly 10 digits!");
      return;
    }

    toast.success("Form submitted successfully!");
    
    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      email: '',
      phoneNumber: '',
    })
  };

  return (
    <>
      <center>
        <h2 style={{ marginTop: '60px' }}>Application Form</h2>
        <p>Enter your information below</p>

        <Form onSubmit={handleSubmit}>
          <Row className="d-flex justify-content-center">
            <Col xs={6} className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="First"
              />
            </Col>

            <Col xs={6} className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Last"
              />
            </Col>
          </Row>

          <div className="d-flex justify-content-center mt-3">
            <div className="d-flex">
              <div className="me-5">
                <Form.Check
                  type="radio"
                  value="Male"
                  name="gender"
                  aria-label="radio 1"
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
                  aria-label="radio 2"
                  label="Female"
                  checked={formData.gender === 'Female'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
              </div>
           
                    <Row className="d-flex  col-sm-2 col-lg-12">
            <Col xs={12} className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
              />
            </Col>
          </Row>
          </div>
          </div>

          <Row className="d-flex justify-content-center mt-3">
            <Col xs={6} className="mb-3">
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
            <Col xs={6 } className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="Phone Number (10 digits)"
                maxLength={10}
              />
            </Col>
          </Row>

          <Button
            style={{ width: '150px', marginTop: '50px', borderRadius: '10px' }}
            type="submit"
          >
            Submit
          </Button>
          <ToastContainer/>
        </Form>
      </center>
    </>
  );
}

export default App;
