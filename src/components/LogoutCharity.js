import React from 'react'
import {Link} from "react-router-dom";
import "./Payment.css"

function LogoutCharity() {
    return (
        <div className="wrapper">
        <div className="logout">
            <p style={{fontWeight:"700px", fontSize:"32px", color:"black"}}>Log out</p><br/><br/>

            <p style={{fontWeight:"500px", fontSize:"22px", color:"black"}}>You are now logged out</p><br/><br/>

            <p style={{fontWeight:"700px", fontSize:"18px", color:"black"}}>Click <Link to="/charity-login" style={{textDecoration:"none", fontWeight:"bold", fontSize:"18px"}}>here </Link>to return to the application</p>
        
        

        </div>
        <div className="footer" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p>
                   <p style={{color:"black"}}> DonatePlus - All Rights Reserved.</p>
                </div> 
        </div>

    )
}


export default LogoutCharity;
