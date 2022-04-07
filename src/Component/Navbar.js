import React from 'react'
import {Link} from "react-router-dom";
import './Style/Navbar.css'
  
const Navbar = () => {
  return (
  

  <div className=" NAVBAR container-fluid navbar-dark bg-secondary position-relative">
    <Link  to="/"><img className='logo' src="https://i.pinimg.com/originals/4c/85/bc/4c85bc696afbfcc641e0d568c89078c7.jpg"  alt="logo" /></Link>
          <Link  to="/">Home</Link>
          <Link  className="position-absolute top-0 end-0 cart"   to="/summary"><i class="fa fa-shopping-cart"> </i></Link>
          <Link  to="/cartlist">Cart </Link>
          <Link  to="/service">Contact Us</Link>
        
 
  </div>

  )
}

export default Navbar