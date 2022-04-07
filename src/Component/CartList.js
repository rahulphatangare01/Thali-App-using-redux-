import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import './Style/CartList.css';

import {addtothali} from "../reducers";
function CartList() {
  const [thali,setThali]=useState([{"totalp":"","id":1,"dish":"paneer dish","price":110,"Quntity":1,"image":"https://www.whiskaffair.com/wp-content/uploads/2019/05/Paneer-Masala-1-3.jpg"},
  {"totalp":"","id":2,"dish":"Dal","price":80,"Quntity":1,"image":"https://spicecravings.com/wp-content/uploads/2021/05/Dal-Tadka-Featured.jpg"},
  {"totalp":"","id":3,"dish":"Curd","price":60,"Quntity":1,"image":"https://www.mycookingjourney.com/wp-content/uploads/2014/02/HOMEMADE-YOGURT-2.jpg"},
   {"totalp":"","id":4,"dish":"sweet","price":30,"Quntity":1,"image":"https://www.funfoodfrolic.com/wp-content/uploads/2020/07/Gulab-Jamun-Thumbnail.jpg"},
   {"totalp":"","id":5,"dish":"chapati","price":10,"Quntity":1,"image":"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Chapati-Breads_EXPS_FT20_136906_F_0721_1.jpg"}       ])

//add customer selected ordder
   const[tquntity,setTquntity]=useState(1)
const dispatch = useDispatch()        
     const addtotable=(ele)=>{
       ele.Quntity=tquntity;
       ele.totalp=Number(ele.Quntity)*Number(ele.price)
          dispatch(addtothali(ele))
         }
//function decrement
         function decrement(){
           if(tquntity>1){
     setTquntity(tquntity-1)
           }   
         }
  //function increment
         function increment(){
           
     setTquntity(tquntity+1)
             
         }
         function clickchekoute(){
           alert("your order pass sucssesfully")
         }
  return (
    <div className='CARTLIST'>
<div className='d-flex m-5 '>
  {
    thali.map((data)=>{
      return(
       <div class=" m-5 cardSHOW float-sm-start"  key={data.id}>
           
            <div>
              <img class="card-img-top" src={data.image} alt="" />
            </div>
            <h3 class="card-title">{data.dish}</h3>
            <h5 class="card-text">Price: <span className='green'>{data.price}</span> </h5>
         <div className='quntity'><button onClick={decrement}>-</button> <input   type="text" value={tquntity}/><button onClick={increment}>+</button></div> 
           <button onClick={()=>addtotable(data)} class="fa fa-shopping-cart">Add to cart</button>
       </div>
      )
    })
  }
  
</div>
      
<div className='text-center m-5'>
     <Link to="/summary" onClick={clickchekoute} > <button className='btn btn-primary' >checkoute</button></Link>
     </div>
    </div>
  )
}

export default CartList