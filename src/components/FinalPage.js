import React from 'react'
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import FormPayment from './FormPayment';
import "./Form.css"


const PUBLIC_KEY ="pk_test_51IUMjrE9BSuOW8HAgMhIupy5k3jhrjXtxeAXEx05RPaWTVi3zC5KLrE11CI6j1MCl69nCjri2bfq1XNIGEBLf6Md00I2wMfyvZ"

const stripe = loadStripe(PUBLIC_KEY);

const  FinalPage=() =>{



    const [charities] =React.useState({
        name:"RangManch",
        amount:'100',
    }

    )

    return (
        <div className="givecharityhere">
        

        <div className="charityhere">
            <h1>Donate to : {charities.name}</h1>
            <h2>Donation ${charities.amount}</h2>
            </div><br/><br/><br/>
      <div>
           <div> <p style={{fontSize:"20px"}}> Donations of over $5 are eligible for a New Zealand charitable giving tax credit</p></div><br/><br/>
                      
                       
           

            <Elements stripe = {stripe}>
                          <FormPayment/>
            </Elements>

          
            </div>

        
        </div>
    )
}

export default FinalPage
