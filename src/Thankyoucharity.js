import React from 'react'
import {Link} from "react-router-dom";
import "./components/AddDonor.css"

const Thankyoucharity=() =>{
    return (
        <>
       
        <div className="wrapper">
        <div className="thankyou">
            <p style={{fontSize:"22px"}}> Thank you for the registration</p>
            <Link to="./charity-login" style={{textDecoration:"none", color:"black"}}> <p>Click <span style={{color:"blue"}}>here</span> to go back to Login page.</p></Link>
        </div>
       
      
        </div>
        </>


       
    )
}

export default Thankyoucharity;
