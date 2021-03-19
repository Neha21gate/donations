
import React, {useState} from "react";
import Data from './Data.js';
import "./components/Navbar.css";
import { Switch,  BrowserRouter, Route, Link } from "react-router-dom";
import Faqs from './components/Faqs';
import Signupform from "./components/Signupform";
import oneonate from "./Images/oneonate.png";
import Taxform from './components/Taxform';
import LoginDonor from './components/LoginDonor';
import AddDonor from "./components/AddDonor";
import LoginCharity from  "./components/CharityFirst";
import CharitySecond from './components/CharitySecond';
import Profile from './components/Profile';
import Reset from './components/Reset';
import CharityBankDetail from './components/CharityBankDetail';
import CharityaddDonor from './components/CharityaddDonor';
import Payment from './components/Payment';
import FinalPage from './components/FinalPage';
import ThankYou from "./components/ThankYou.js";
import LogoutDonor from "./components/LogoutDonor.js";
import LogoutCharity from "./components/LogoutCharity";
import Thankyoucharity from "./Thankyoucharity.js";




const App=() =>{

  const [click, setClick] = useState(false);



const handleClick = () => setClick (!click)

const closeMobileMenu =()=> setClick(false);


  return (
   <>
   <BrowserRouter>



   <nav className="navbar" >

<div className="nav-logo">

<Link to='/' className="navbar-logo">

<h1 ><img src={oneonate} width="300px" height="250px" style={{marginLeft:"2px", marginTop:"30px"}} alt="donateplus"/></h1>

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
           <Link to="/donor-login" className="nav-links" onClick={closeMobileMenu}> DONOR LOGIN </Link>
            </li>
</ul>


</nav>

   

    <Switch>
   
    <Route path="/" exact component={Data} /> 
    <Route path="/donations" exact component={Data} /> 
    <Route path="/donations/" exact component={Data} /> 
    <Route path="/donation" exact component={Data} /> 
    <Route path="/donation/" exact component={Data} /> 
    <Route path="donation/" exact component={Data} /> 
    <Route path="/charity" exact component={Data} /> 
    <Route path="/charity/" exact component={Data} /> 
    <Route path="/donate/" exact component={Data} /> 
    <Route path="/donate" exact component={Data} />
    <Route path="/home" exact  component={Data}/>
    <Route path="/donateplus/" exact  component={Data}/>
    <Route path="/donateplus" exact  component={Data}/>  
    <Route path="/charity" component={Data}/>
        <Route path='/faqs' component={ Faqs} /> 
        <Route path='/charity-login' component={LoginCharity} /> 
        <Route path="/charity-signup" component={CharitySecond}/>
        <Route path="/donor-login" component={LoginDonor}/>
        <Route path='/contactus' component={Signupform} /> 
        <Route path="/tax-form" component ={Taxform}/>
        <Route path="/donor-signup" component={AddDonor}/>
        <Route path="/logind" component={LoginDonor}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/reset-password" component={Reset}/>
        <Route path="/charity_add_donor" component={CharityaddDonor}/>
        <Route path="/details-charity" component={CharityBankDetail}/>
        <Route path="/payment-to-chaity" component={Payment}/>
        <Route path="/final_page" component={FinalPage}/>
        <Route path="/thank-you" component={ThankYou}/>
        <Route path="/thank-you-charity" component={Thankyoucharity}/>
        <Route path="/logout-donor" component={LogoutDonor}/>
        <Route path="/logout-charity" component={LogoutCharity}/>

        
    </Switch>
    </BrowserRouter>


    </>
  );
}

export default App;