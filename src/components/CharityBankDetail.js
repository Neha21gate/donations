import React from 'react';
import './Form.css';
import axios from 'axios'





class CharityBankDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gst: '',
      bank:'',
      account:''
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
      this.setState({ gst: "", bank: "", account:''})
    }

  


  render() {




    return (
     
      
  <>    

<div>
       

        <form  className="form" onSubmit={this.handleSubmit.bind(this)} method="POST" >
<br/><br/><br/><br/>
        
      <p style={{fontWeight:"600", fontSize:"23px"}}>Tax Credits will be deposited in to the below account</p><br/><br/><br/><br/>

      
      <input type= "text" required value={this.state.gst} onChange={this.onGstChange.bind(this)}  placeholder="GST Number *"/>

      
      <input type= "text" required value={this.state.bank} onChange={this.onBankChange.bind(this)}  placeholder="Bank Name *"/>

      
      <input type= "text" required value={this.state.account} onChange={this.onAccountChange.bind(this)}  placeholder="Account Number *"/>

      <button type="submit" className="btn1">
      
     Submit</button><br/><br/><br/>

   
    </form>


</div>
<div className="footer" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p>
                   <p style={{color:"black"}}> DonatePlus - All Rights Reserved.</p>
                </div>           


   </>            


   
)}

              
onGstChange(event) {
  this.setState({gst: event.target.value})
}

onBankChange(event) {
  this.setState({bank: event.target.value})
}
onAccountChange(event) {
  this.setState({account: event.target.value})
}


          

}
export default CharityBankDetail;