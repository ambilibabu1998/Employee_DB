import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Card, Button, Modal } from "react-bootstrap";
import Header from "./Header";

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleViewProfile = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  return (
    <div>
      <Header />
      <Container className="mt-3">
        <h2 className="employ-list">Employee List</h2>
        <div className="row">
          {employees.map((employee) => (
            <div key={employee.id} className="col-md-4">
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>{employee.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {employee.username}
                  </Card.Subtitle>
                  <Card.Text>
                    <p>Email: {employee.email}</p>
                    <p>Phone: {employee.phone}</p>
                    <p>Website: {employee.website}</p>
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleViewProfile(employee)}
                  >
                    View Profile
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
      {selectedEmployee && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedEmployee.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Username: {selectedEmployee.username}</p>
            <p>Email: {selectedEmployee.email}</p>
            <p>Phone: {selectedEmployee.phone}</p>
            <p>Website: {selectedEmployee.website}</p>
            <hr />
            <h4>Address:</h4>
            <p>
              {selectedEmployee.address.street},{" "}
              {selectedEmployee.address.suite}, {selectedEmployee.address.city}
            </p>
            <p>Zipcode: {selectedEmployee.address.zipcode}</p>
            <hr />
            <h4>Company:</h4>
            <p>Name: {selectedEmployee.company.name}</p>
            <p>Catchphrase: {selectedEmployee.company.catchPhrase}</p>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default EmployeeDashboard;
