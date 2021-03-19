import React from 'react'
import {Link} from "react-router-dom";
import "./AddDonor.css"

const ThankYou=() =>{
    return (
        <>
       
        <div className="wrapper">
        <div className="thankyou">
            <p style={{fontSize:"22px"}}> Thank you for the registration</p>
            <Link to="./donor-login" style={{textDecoration:"none", color:"black"}}> <p>Click <span style={{color:"blue"}}>here</span> to go back to Login page.</p></Link>
        </div>
       
      
        </div>
        </>


       
    )
}

export default ThankYou;
