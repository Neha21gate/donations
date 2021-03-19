import React from 'react';
import './AddDonor.css';


class AddDonor extends React.Component {
  constructor(props) {
    super(props);
   
    
this.state={
    input: {},
    errors: {},
    hidden: true,    /* eye toggling*/
                                
  };
   
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
      input["fname"] = "";
      input["mname"] = "";
      input["lname"] = "";
      input["contact"] = "";
      input["email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      this.setState({input:input});

      this.props.history.push('/thank-you')
  }
}

validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["fname"]) {
      isValid = false;
      errors["fname"] = "Please enter your first name.";
    }
   
    
    if (!input["lname"]) {
      isValid = false;
      errors["lname"] = "Please enter your last name.";
    }
    if (!input["contact"]) {
      isValid = false;
      errors["contact"] = "Please enter your contact number.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (typeof input["password"] !== "undefined") {

      const strongRegex = new RegExp(["^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,32})"]);
  if(strongRegex.test(input["password"])) {
      isValid = false;
      errors["password"] = "Please enter valid password.";
  }
}
  

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
        
      if (input["password"] !== input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    } 

    this.setState({
      errors: errors
    });

    return isValid;
}
   
render() {



    return (


      
      <div className="wrapper">
      
      

<div className="main1">
<h1 style={{fontSize: "30px",  color: "black", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>DONOR REGISTRATION </h1>

        <form  className="form_input_here" onSubmit={this.handleSubmit} method="POST" >

        
        <div className="group-one">
            
            <input 
              type="text" 
              name="fname" 
              value={this.state.input.fname}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="First name *" 
              id="fname"

              required
              />
          
  
              <div className="text-dangerousous">{this.state.errors.fname}</div>
          </div>

          <div className="group-one">
            
            <input 
              type="text" 
              name="mname" 
              value={this.state.input.mname}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Middle name" 
              id="mname"/>
  
             
          </div>
          <div className="group-one">
            
            <input 
              type="text" 
              name="lname" 
              value={this.state.input.lname}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Last name *" 
              id="lname"
              required
              />
  
              <div className="text-dangerous">{this.state.errors.lname}</div>
          </div>

          <div className="group-one">
            
            <input 
              type="text" 
              name="contact" 
              value={this.state.input.contact}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Mobile number *" 
              id="contact"
              required
              />
  
              <div className="text-dangerous">{this.state.errors.contact}</div>
          </div>
  
          <div className="group-one">
           
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Email *" 
              id="email"
              required
               />
  
              <div className="text-dangerous">{this.state.errors.email}</div>
          </div>
   
          <div className="group-one">
           
            <input 
              type={this.state.hidden ? 'password' : 'text'}                                   /* eye toggling*/
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Password *" 
              required
              id="password" 
              />

<i  className="far fa-eye" style={{color:"#3d3d3b"}} onClick={this.toggleShow}>   </i>                        {  /* eye toggling*/}
 
     {/* eye toggling*/}    

  
              <div className="text-dangerous">{this.state.errors.password}</div>
          </div>

          <br/><br/>
  
          <div className="group-one">
            
            <input 
              type="password"
              name="confirm_password" 
                 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Confirm password *" 
              id="confirm_password" 
              required
              />





              <div className="text-dangerous">{this.state.errors.confirm_password}</div>

              <br/>

              <input type="submit" value="Submit" className="btn5" />
          </div>

      
    </form><br/><br/>


     

</div>
<div className="footer_one" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p>
                   <p style={{color:"black"}}> DonatePlus - All Rights Reserved.</p>
</div>        



                


               

</div>
  )}
  }
export default AddDonor;

