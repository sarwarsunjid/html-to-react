import React from 'react'
import web from '../src/images/home-bg.jpg'
import { NavLink } from 'react-router-dom'
import Common from './Common'

const About = () => {
  return (
    <>
      {/* <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Welcome to About page
                        <strong className="brand-name"> Sunshine Technology
                        </strong>
                  </h1>
                  <h6 className="my-3">
                    We are the team of talented developer making websites
                    </h6>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn-get-start">
                      Get Started
                      </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={web} className="img-fluid animated" alt="Aboutimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Common
        name="Welcome To About Page"
        imgsrc={web} visit="/service"
        btname="Contact Now"
      />
    </>
  )
}

export default About;