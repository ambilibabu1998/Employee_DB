import React from 'react'
import Header from './Header'
import {  Container } from "react-bootstrap";
import '../components/Employee.css'

function Empform() {
  return (
    <div>
        <Header></Header>
        <Container className="mt-3">
            <div className="auth-wrapper" >
                <div className="auth-inner">
      <form>
      <h3 className='emp-form'>Employe form</h3>

      <div className="mb-3">
       
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
         
        />
      </div>

      <div className="mb-3">
        
        <input type="text" className="form-control" 
        placeholder="Last Name" 
     
        />
      </div>

      <div className="mb-3">
        
        <input
          type="designation"
          className="form-control"
          placeholder="Designation"
          
        />
      </div>

      <div className="mb-3">
        <input
          type="location"
          className="form-control"
          placeholder="Location"
         
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </div>
      

    </form>
    </div>
    </div>
  </Container>
    </div>
  )
}

export default Empform
