import React from 'react'
import { Link } from 'react-router-dom';
import "./Form.css";
import FormPayment from './FormPayment';


function Payment() {


    return (
        <div  className="wrapper">
       
<div className="payment">
<div className="fill-your-details">

 <div className="one">



   {/*<div className="searchbar">
        <input  type="text" 
        placeholder="Search Charity" 
        onChange={inputEvent}
            value= {charity}
        />
        <SearchResult name={charity}/>
    </div>*/}

  
        
</div >


  <div className="cheerful">
            <h1>Your Cheerful Giving Summary</h1><br/><br/>
           <h2 >Number of counts donations</h2>
           
<br/><br/><br/><br/><br/>
<div className="form_payment">
           
           <FormPayment />
           </div>
 </div>
           
        <br/><br/><br/><br/><br/><br/>
 <div className="clickforcontact">

<p style={{fontWeight:"600px", fontSize:"20px"}}>Click <Link to="/contactus" style={{textDecoration:"none", fontWeight:"600px", fontSize:"20px"}}>here </Link>for contact us.</p></div>

 </div>

<br/><br/><br/><br/>


<div className="footer" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p>
                   <p style={{color:"black"}}> DonatePlus - All Rights Reserved.</p>
                </div>    
</div>
</div>
    )
}

export default Payment
