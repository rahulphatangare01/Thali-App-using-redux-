import React, { useState } from 'react'
import './Style/Home.css';
import {Link} from "react-router-dom";
function Home() {
  const [display,setdisplay]=useState("none")
  function menubtn(){
    display==="none"? setdisplay("block"):setdisplay("none")
  }
  return (
    <div className='Home'>
      <div className='rpRestaurant'>
        <h1>RP Restaurant</h1> 
        </div>
      <div className='jumbo'>
      {/* menu */}
      <div onClick={menubtn} className='Menuitem '>
      <h1>Menu</h1>
      <div style={{display:display}}>
      <ul>
      <h4>* Thali</h4>
        <li>Paneer Dish  <span>110</span></li>
        <li>Daal <span>80</span></li>
        <li>Curd <span>60</span></li>
        <li>Sweet(gulab jamun) <span>30</span></li>
        <li>Chapati <span>10</span></li>
      </ul>
      </div>
      
      </div>
      {/* order */}
      <div className='Orderhome'>
        <h1 className='orderNow'>Order Now <span>
        <Link to="/cartlist"> <i className="fa fa-shopping-cart"></i></Link>
       </span>
       
        </h1> 
       <img src="https://b.zmtcdn.com/data/pictures/4/18877494/0d662b73e14b5efcc455bc2097391d17.jpg" alt="" />
       
      </div>
      
      </div>
      
    </div>
  )
}

export default Home