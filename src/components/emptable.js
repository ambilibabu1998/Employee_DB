import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Table } from "react-bootstrap";
import Header from "./Header";



function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);
  return (
    <div>

        <div>
            <Header></Header>
        </div>
      
      <Container className="mt-3">
        <h2>Employee List</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.username}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.website}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default EmployeeDashboard;