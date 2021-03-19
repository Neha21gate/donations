import React, { useState } from 'react';
import './Form.css';
import CharitySecond from './CharitySecond';




const FormCharity = () => {

 
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  
  return (
    <>
      <div className='formcontain'>
        
        {!isSubmitted ? (
          <CharitySecond submitForm={submitForm} />
        ) : (
          
          <div className='formright'>
      <h1 className='form-success'> Sent!</h1><br/><br/>
      <h2> we will get back to you as soon as possible.</h2> <br/><br/>
    <h3 style={{color:"#4a544d"}} className="number">T: (027)-678-4966</h3><br/><br/>
    <h3  style={{color:"#4a544d"}} className="chat">E: chiragsolanki@donateplus.co.nz</h3>    <br/><br/><br/>
        {/*add email id*/ }
    </div>
        )}

       
      </div>
    </>
  );
};

export default FormCharity;