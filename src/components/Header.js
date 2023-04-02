import React from 'react'

function Header() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light nav-head">
  <a className="navbar-brand" href="/">Employee-App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      
      <li className="nav-item">
        <a className="nav-link" href="/">HOME</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="employee-form">EMPLOYE FORM</a>
      </li>
      
      
    </ul>
 
  </div>
</nav>
    </div>
  )
}

export default Header
