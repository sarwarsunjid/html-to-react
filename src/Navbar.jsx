import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink class="navbar-brand" to="/">Navbar</NavLink>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link" to="/service">Service</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                  </li>
                </ul>

              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;