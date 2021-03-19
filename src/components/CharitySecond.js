import React from 'react';
import './AddDonor.css';






class CharitySecond extends React.Component {
  constructor(props) {
    super(props);
   
    
this.state={
    input: {},
    errors: {},
    hidden: true,                                        /* eye toggling*/
  };
   
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.toggleShow = this.toggleShow.bind(this);    
}
toggleShow() {                                                          /* eye toggling*/
  this.setState({ hidden: !this.state.hidden });                          /* eye toggling*/
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
      input["legal_nameofcharity"] = "";
      input["trading_name"] = "";
      input["nzbn_number"] = "";
      input["address"] = "";
      input["contact_person"] = "";
      input["mobile"] = "";
      input["email"] = "";
      input["confirm_email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      this.setState({input:input});

      this.props.history.push('/thank-you-charity')
  }
}

validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["legal_nameofcharity"]) {
      isValid = false;
      errors["legal_nameofcharity"] = "Please enter legal name of the charity.";
    }
   
    
    if (!input["trading_name"]) {
      isValid = false;
      errors["trading_name"] = "Please enter trading name.";
    }

    if (!input["nzbn_number"]) {
      isValid = false;
      errors["nzbn_number"] = "Please enter nzbn.";
    }
    if (!input["address"]) {
      isValid = false;
      errors["address"] = "Please enter your address.";
    }
    if (!input["contact_person"]) {
      isValid = false;
      errors["contact_person"] = "Please enter your name.";
    }
    if (!input["mobile"]) {
      isValid = false;
      errors["mobile"] = "Please enter your mobile number.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email.";
      }
    }

    if (typeof input["email"] !== "undefined" && typeof input["confirm_email"] !== "undefined") {
        
      if (input["email"] !== input["confirm_email"]) {
        isValid = false;
        errors["email"] = "emails don't match.";
      }
    }
    if (!input["confirm_email"]) {
      isValid = false;
      errors["confirm_email"] = "Please enter your confirm email.";
    }
   
   


    if (!input["password"] ) {

  // const strongRegex = new RegExp('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/');         //need to correct this
  // if (!strongRegex.test(input["password"])) {
      isValid = false;
      errors["password"] = "Please enter valid password.";
    
  }
  
  if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
        
    if (input["password"] !== input["confirm_password"]) {
      isValid = false;
      errors["password"] = "Passwords don't match.";
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
      
      

<div className="charitysignup">
<p style={{fontSize: "25px", color:"black",  fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
   fontWeight:"bold", marginTop:"10%"}}>CHARITY REGISTRATION </p><br/><br/><br/>

        <form  className="here_charity" onSubmit={this.handleSubmit} method="POST" >

        
        <div className="one-form">
            
            <input 
              type="text" 
              name="legal_nameofcharity" 
              value={this.state.input.legal_nameofcharity}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Legal name of the charity*" 
              id="legal_nameofcharity"/>


              <a href = "https://www.register.charities.govt.nz/CharitiesRegister/Search" style={{color:"blue"}} title="Follow the link">Click here to find your registered name</a><br/><br/>
              <div className="text-danger">{this.state.errors.legal_nameofcharity}</div>
          </div>

          <div className="one-form">
            
            <input 
              type="text" 
              name="trading_name" 
              value={this.state.input.trading_name}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Trading name*" 
              id="trading_name"/>
  
              

              <a href = "https://www.register.charities.govt.nz/CharitiesRegister/Search" style={{color:"blue"}} title="Follow the link">Click here to find your number</a><br/><br/>
          
              <div className="text-danger">{this.state.errors.trading_name}</div>
          </div>
          <div className="one-form">
            
            <input 
              type="text" 
              name="nzbn_number" 
              value={this.state.input.nzbn_number}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="NZBN*" 
              id="nzbn_number"/>
  
              
              <a href = "https://www.register.charities.govt.nz/CharitiesRegister/Search" style={{color:"blue"}} title="Follow the link">Click here to find your number</a><br/><br/>
          
              <div className="text-danger">{this.state.errors.nzbn_number}</div>
          </div>

          <div className="one-form">
            
            <input 
              type="text" 
              name="address" 
              value={this.state.input.address}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Address*" 
              id="address"/>
  
              <div className="text-danger">{this.state.errors.address}</div>
          </div>

          <div className="one-form">
            
            <input 
              type="text" 
              name="contact_person" 
              value={this.state.input.contact_person}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Contact Person*" 
              id="contact_person"/>
  
              <div className="text-danger">{this.state.errors.contact_person}</div>
          </div>

          <div className="one-form">
            
            <input 
              type="text" 
              name="mobile" 
              value={this.state.input.mobile}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Mobile number*" 
              id="mobile"/>
  
              <div className="text-danger">{this.state.errors.mobile}</div>
          </div>
  
          <div className="one-form">
           
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Email*" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div className="one-form">
           
           <input 
             type="text" 
             name="confirm_email" 
             value={this.state.input.confirm_email}
             onChange={this.handleChange}
             className="form-control" 
             placeholder="Confirm Email*" 
             id="confirm_email" />
 
             <div className="text-danger">{this.state.errors.confirm_email}</div>
         </div>
   
          <div className="one-form">
           
            <input 
               type={this.state.hidden ? 'password' : 'text'}                                    /* eye toggling*/
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Password *" 
              required
              id="password" />

<i  className="far fa-eye" onClick={this.toggleShow} style={{color:"grey"}}>   </i>       <br/><br/>

  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div className="one-form">
            
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Confirm password *" 
              id="confirm_password" />


              <div className="text-danger">{this.state.errors.confirm_password}</div><br/><br/>

              <input type="submit" value="Submit" className="btn5" />
          </div>

        

   
    </form>


     

</div>
<div className="footer" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p>
                   <p style={{color:"black"}}> DonatePlus - All Rights Reserved.</p>
                </div>        



                


               

</div>
  )}
  }
export default CharitySecond;