import React from 'react';
import './Form.css';
import {Link} from "react-router-dom";
import SearchResultDonor  from "./SearchResultDonor";
import moment from "moment";





class CharityaddDonor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      input: {},
      errors: {},
      donationDate: moment()
      .locale('en')
      .format('YYYY-MM-DD')
  
    
    }
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
   
 
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
        input["company_name"] = "";
        input["email"] = "";
        input["contact"] = "";
        input["donation"] = "";
       

        this.setState({input:input});

     alert("Form submitted successfully, thank you")
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
  if (!input["email"]) {
    isValid = false;
    errors["email"] = "Please enter your email.";
  }
 
  if (!input["contact"]) {
    isValid = false;
    errors["contact"] = "Please enter your mobile number.";
  }
 
  if (!input["donation"]) {
    isValid = false;
    errors["donation"] = "Please enter the donation in digits.";
  }


  this.setState({
    errors: errors
  });

  return isValid;

}


  
   

  render() {

    let {donationDate} = this.state
    
    return (
      <div className="wrapper">

  <div className="fulldiv">
  

      
            

            <form action="" className="form" onSubmit={this.handleSubmit}  method="POST" >

        
      
            <h1 className="add-donor">
            ADD DONOR</h1><br/><br/><br/>
      

            <div className="form-group">
      <input
       type="text" 
              name="fname" 
              value={this.state.input.fname}
              onChange={this.handleChange}
              
              placeholder="First name*" 
        />
         <div className="text-danger">{this.state.errors.fname}</div>

</div>


<div className="form-group">
      <input
       type="text" 
              name="mname" 
              value={this.state.input.mname}
              onChange={this.handleChange}
              
              placeholder="Middle name" 
        />
         <div className="text-danger">{this.state.errors.mname}</div>

</div>

<div className="form-group">
      <input
       type="text" 
              name="lname" 
              value={this.state.input.lname}
              onChange={this.handleChange}
              
              placeholder="Last name*" 
        />
         <div className="text-danger">{this.state.errors.lname}</div>

</div>

<div className="form-group">
      <input
       type="text" 
              name="company_name" 
              value={this.state.input.company_name}
              onChange={this.handleChange}
              
              placeholder="Company name" 
        />
         <div className="text-danger">{this.state.errors.company_name}</div>

</div>

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
       type="text" 
              name="contact" 
              value={this.state.input.contact}
              onChange={this.handleChange}
              
              placeholder="Mobile number*" 
        />
         <div className="text-danger">{this.state.errors.contact}</div>

</div>
<div className="form-group">
      <input
       type="text" 
              name="donation" 
              value={this.state.input.donation}
              onChange={this.handleChange}
              
              placeholder="Donation*" 
        />
         <div className="text-danger">{this.state.errors.donation}</div>

</div>







<br/><br/>
<button type="submit" className="btn1">Submit
</button><br/><br/><br/>


</form>

<br/><br/><br/><br/>

<hr/>


<div className="donationentry">
            <h1>Enter Details of Donation</h1>

           <br/><br/><br/><br/>
           
            <input  type="text" 
        placeholder="Search for donor"
        />
        <SearchResultDonor />

        <input type="text" pattern="[0-9]*" placeholder="Enter donation received"
     />



                <input type="date"
          name="date"
          value={donationDate}
          onChange={this.handleChange}/>

          <br/><br/><br/>

                <h4> Receipt to the donor (form)</h4>

           </div><br/><br/><br/><br/>
            

            
<div className="clickforcontact">

<p style={{fontWeight:"700px", fontSize:"25px"}}>Click <Link to="/contactus" style={{textDecoration:"none", fontWeight:"bold", fontSize:"25px"}}>here </Link>for contact us.</p></div>

<br/><br/><br/><br/>


<div className="footer" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p>
                   <p style={{color:"black"}}> DonatePlus - All Rights Reserved.</p>
                </div>    
        
</div>

</ div>


 )}


 
 
           
 
 }

export default CharityaddDonor;
