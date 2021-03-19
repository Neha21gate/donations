
import React, {useState} from 'react'
import StripeCheckout from "react-stripe-checkout";


function FormPayment() {


    const [donation] = useState({
    name:"RangManch",
    price:100,
donationto:"RangManch",
charge:100,
phone_number:""
    });

    

    const makePayment =token=>{

      const body ={
        token,
         donation,
         
      }

      const headers = {
        "Content-Type" : "application/json"
      }

      return fetch(`http://localhost:3040/payment`,{
        method:'POST',
        headers,
        body:JSON.stringify(body)

      }).then(response=>{
        console.log("RESPONSE", response)

        const {status} = response;
        console.log ("STATUS", status)
      })
      .catch (error =>
        console.log("error")
      )
    }

    return (
      <div className="App" >
       <StripeCheckout
       className="checkout"
          stripeKey="pk_test_51IUMjrE9BSuOW8HAgMhIupy5k3jhrjXtxeAXEx05RPaWTVi3zC5KLrE11CI6j1MCl69nCjri2bfq1XNIGEBLf6Md00I2wMfyvZ"
          token={makePayment}
          name={donation.name}
          amount={donation.charge * 100}
       >


      


       <button className="button_donation" style={{width:"120px", height:"40px"}}> Donate ${donation.charge} </button>

    

      </StripeCheckout>
      </div>
    );
  }
  

export default FormPayment;

