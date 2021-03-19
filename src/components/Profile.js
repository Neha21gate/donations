import React from 'react';
import './Form.css';
import {Link } from "react-router-dom";
import axios from 'axios'



class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registration:'',
      nzbn:'',
      physical_address:'',
      postal_address:'',
     
    }
  }
    //The following code snippet makes sure the code is correct and the action is initiated when the button is pressed.
              
    handleSubmit(e) {
      e.preventDefault();
    
      axios({
        method: "POST", 
        url:"http://localhost:3040/send", 
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success') {
          alert("Login Successful."); 
          this.resetForm()
        } else if(response.data.status === 'fail') {
          alert("Login failed.")
        }
      })
    }

    resetForm(){
      this.setState({ registration:'',
      nzbn:'',
      physical_address:'',
      postal_address:'',})
    }

  


  render() {
    return (
     
      
  <>    

<div>
       

        <form action="mailto:nehachoudhary@gmail.com" className="form" onSubmit={this.handleSubmit.bind(this)} method="POST" >
<br/><br/><br/><br/>
        
      <p style={{fontWeight:"600", fontSize:"23px"}}>Complete  Your Profile Please</p><br/><br/><br/><br/>

      


      
      <input type="text" required value={this.state.registration} onChange={this.onRegistrationChange.bind(this)} placeholder="Charity Registartion Number *"/>
<Link>click here to find your registration number</Link><br/><br/>
       

      
      <input type="text"  required value={this.state.nzbn} onChange={this.onNZBNChange.bind(this)} placeholder="NZBN *"/>
      <Link>click here to find your NZBN number</Link><br/><br/>
      
      <input type="address" required value={this.state.physical_address} onChange={this.onPhysicalAddressChange.bind(this)}  placeholder="Physical Address *"/>

      
      <input type= "address" value={this.state.postal_address} onChange={this.onPostalAddressChange.bind(this)}   placeholder="Postal Address (If diffrent)"/>

      
     

    <Link to="/details-charity" style={{textDecoration:'none'}}> <button type="submit" className="btn1" style={{width:"500px"}}>
      
     Submit</button> </Link> <br/><br/><br/>

   
    </form>


</div>
<div className="footer" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p>
                   <p style={{color:"black"}}> DonatePlus - All Rights Reserved.</p>
                </div>           


   </>            


   
)}

              
onRegistrationChange(event) {
  this.setState({registration: event.target.value})
}
onNZBNChange(event) {
  this.setState({nzbn: event.target.value})
}
onPhysicalAddressChange(event) {
  this.setState({physical_address: event.target.value})
}

onPostalAddressChange(event) {
  this.setState({postal_address: event.target.value})
}


          

}
export default Profile;
