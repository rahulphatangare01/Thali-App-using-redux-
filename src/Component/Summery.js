import React, { useState ,useEffect} from 'react'
import './Style/Summary.css';
import { useSelector} from "react-redux";

function Summery() {
const [total,setTotal]=useState()

  useEffect(()=>{
    let totalprice=state.map((data)=>{
      return data.totalp
 
  })
  var lodash = require('lodash');
   
   let sum = lodash.sum(totalprice,"dgfd");
   setTotal(sum)
  })
  const selectedThali =useSelector((state)  => state.counter.thali)
console.log(selectedThali,"shgad")

  const order = selectedThali.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);
  
  const[state,setState]=useState(order)

    function deletitem(id){
   
    var newstate=state.filter((item)=>{
      console.log(item)
     return item.id!==id;
    
   })
   setState(newstate)

      
  }
  return (
    <div className='Summary'>
    <div className='container-fluid '>  
     <table className=" table">
            <tr>
              <th>image</th>
              <th> Dish</th>
              <th>dish price</th>
              <th>Quntity </th>
              <th>price</th>
              <th>Delete</th>
           

            </tr>
            {
              state.map((data,i)=>{
                return(<tr  key={data.id}>
               <td><img src={data.image} alt="" width='80px' className=" img" /></td>
               <td>{data.dish}</td>
              <td>{data.price}</td>
               <td>{data.Quntity}</td>
               <td>{data.totalp}</td>
               <td onClick={()=>{deletitem(data.id)}}>delete</td>
                </tr>
                )
              })
            }
            <tr className='total'>
      <th scope="row"></th>
      <td colspan="2" ></td>
    
      <td >total</td>
      <td>{total}</td>
    </tr>
            
            </table>
          </div></div>
  )
}

export default Summery