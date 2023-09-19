import React from 'react'

const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-secondary bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">
      <img src="/public/logo.jpg" className='rounded-circle mx-1' style={{width:"45px"}}  alt="" /> 
      MovieMela</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/">Home</a>
        </li>

        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/about">About</a>
        </li>

        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/contact">Contact</a>
        </li>

        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/services">Services</a>
        </li>

        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" to="#">Action</a></li>
            <li><a className="dropdown-item" to="#">Another action</a></li>
          </ul>
        </li> */}

      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
