import React from 'react'
import web from '../src/images/home-bg.jpg'
// import { NavLink } from 'react-router-dom'
import Common from './Common'

const About = () => {
  return (
    <>

      <Common
        name="Welcome To About Page"
        imgsrc={web} visit="/service"
        btname="Contact Now"
      />
    </>
  )
}

export default About;