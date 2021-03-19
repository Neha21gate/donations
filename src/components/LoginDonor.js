import React from 'react';
import './LoginDonor.css';
import {   Link } from "react-router-dom";


class LoginDonor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {},
      errors: {},
      hidden: true,    /* eye toggling*/
    
    }
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);              /* eye toggling*/
    
  }
  toggleShow() {                                                          /* eye toggling*/
    this.setState({ hidden: !this.state.hidden });                          /* eye toggling*/
  }                                                                           /* eye toggling*/
  
 
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["email"] = "";
        input["password"] = "";

        this.setState({input:input});

      this.props.history.push('/payment-to-chaity')
  }
}

validate(){
  let input = this.state.input;
  let errors = {};
  let isValid = true;

  if (!input["email"]) {
    isValid = false;
    errors["email"] = "Please enter your correct email.";
  }
 
  
  if (!input["password"]) {
    isValid = false;
    errors["password"] = "Please enter your correct password.";
  }

  this.setState({
    errors: errors
  });

  return isValid;

}

   
    


  render() {

    return (
   
     < div className="wrapper">
      
      

<div className="main3">
       
<h1 style={{fontSize: "30px",  color: "black", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",marginTop:"10%"}}>DONOR LOG IN</h1><br/><br/><br/>


        <form  className="form" onSubmit={this.handleSubmit} method="POST" >

      <br/><br/><br/>


      <div className="form-group">
      <input
       type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              
              placeholder="Email *" 
        />
         <div className="text-danger">{this.state.errors.email}</div>

</div>

<div className="form-group">
      <input
       
       type={this.state.hidden ? 'password' : 'text'}                                   /* eye toggling*/
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              
              placeholder="Password *" 
              required
              id="password" 
        />

<i  className="far fa-eye" style={{color:"grey"}} onClick={this.toggleShow}>  </i>                        {  /* eye toggling*/}
 
 {/* eye toggling*/}    

        

        <div className="text-danger">{this.state.errors.password}</div>
</div>

<br/><br/><br/>



    <button type="submit" className="btn1"  >Log In</button><br/>

      <Link  to="/reset-password" style={{textDecoration:"none"}} ><span style={{fontSize:"17px", color:"blue", textDecoration:"none"}}  >Forgotten Password?</span></Link>
      <br/>
     
      
      <Link to="/donor-signup" style={{textDecoration:"none"}}><button className="btn2" >Create New Account</button></Link> <br/><br/><br/> 


    </form>


        </div>

        <div className="footer" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p>
                   <p style={{color:"black"}}> DonatePlus - All Rights Reserved.</p>
                </div>          
     </div>   
 )}

 }
export default LoginDonor;
