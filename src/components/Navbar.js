import React,{useState} from 'react';
import oneonate from "../Images/oneonate.jpg";
import {Link} from "react-router-dom";
import "./Navbar.css";






const Navbar =()=>{

const [click, setClick] = useState(false);



const handleClick = () => setClick (!click)

const closeMobileMenu =()=> setClick(false);






return(
 




<nav className="navbar" >

<div className="nav-logo">

<Link to='/' className="navbar-logo">

<div className="imagesdonate">
<img src={oneonate}  width="300px" height="250px" style={{marginLeft:"2px"}} alt="donateplus"/>
</div>

</Link>
</div>

<div className="menu-icon" onClick={handleClick}>

<i className={click ? 'fas fa-times' : 'fas fa-bars'} />         
</div>

<ul className={click ? 'nav-menu active' : 'nav-menu'}>
           
           <li className="nav-item">
           <Link to="/home" className="nav-links" onClick={closeMobileMenu}> HOME</Link>
            </li>

            

            <li className="nav-item">
           <Link to="/faqs" className="nav-links" onClick={closeMobileMenu}>FAQs </Link>
            </li>

            <li className="nav-item">
           <Link to="/tax-form" className="nav-links" onClick={closeMobileMenu}>IR526 </Link>
            </li>

            <li className="nav-item">
           <Link to="/contactus" className="nav-links" onClick={closeMobileMenu}> CONTACT US</Link>
            </li>
           

            <li className="nav-item">
           <Link to="/charity-login" className="nav-links" onClick={closeMobileMenu}> CHARITY LOGIN </Link>
            </li>

            <li className="nav-item">
           <Link to="/donor-login" className="nav-links" onClick={closeMobileMenu}> DONOR REGISTER </Link>
            </li>
</ul>


</nav>





    
  

   




 )
};
export default Navbar;