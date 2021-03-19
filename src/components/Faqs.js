import React from 'react'; 
import "./Faqs.css";
import {Link} from "react-router-dom";


const Faqs = () => { 

    return (
        < div className="wrapper">
       
       
     
        <div className="donor">
        
       
     
     <h1 classname="heading_details" >FREQUENTLY ASKED QUESTIONS</h1>
      <br/><br/><br/><br/>

    <h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold" }}> Can I claim a tax credit? </h2>
    <p style={{fontSize:"18px", color:"#232423" , lineHeight:"28pt"}}> <br/><br/>
    You can claim a tax credit if you’re an individual (not a company, trust or partnership) and 
    you: earned taxable income (e.g., salary, wages, benefit, self-employed income,interest) in the income year
     you’re claiming for, and 
were a New Zealand resident for tax purposes at any 
time during the tax year.</p><br/><br/><br/>

<h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold"  }}> What can I claim as a tax credit?</h2>
    <p style={{fontSize:"18px", color:"#232423" , lineHeight:"28pt" }}><br/><br/>
    <span style={{color:"black", fontWeight:"bold"}}>Donations</span><br/><br/>

A donation is a gift of money made voluntarily to a school/kindergarten or a donee organisation, where there

 is no identifiable direct benefit to the donor, or the donor's family.<br/>

To claim a tax credit, a receipt must have the word <i>"donation"</i> written on it.

    <br/>
    </p><br/><br/><br/>

    <h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold"  }}>What I can not claim as a tax credit? </h2>
    <p style={{fontSize:"18px", color:"#232423", lineHeight:"28pt" }}><br/><br/>
    Childcare and/or housekeeper payments from 1 April 2012 
 tuition, exam, tertiary education, private school fees or extracurricular activities, e.g., music lessons
donations you've made through payroll giving at your workplace.<br/>
 
Payments made where there is direct benefit to the donor or the donor’s family. 
  
    </p><br/><br/><br/>

    <h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold"  }}>How much can I claim?</h2><br/><br/>
    <p style={{fontSize:"18px", color:"#232423" , lineHeight:"28pt"  }}>
    You can claim the lesser of: 

33.3333% of the total donations you’ve made, or $ 33.3333% of your taxable income.

Go to <a href = "https://www.ird.govt.nz/donations" style={{color:"black",textDecoration:"none"}} title="Follow the link">ird.govt.nz/donations</a> for more information.

</p><br/><br/><br/>


<h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold"  }}>
What is the minimum donation amount required to claim tax credits?
</h2>
    <p style={{fontSize:"18px", color:"#232423", lineHeight:"28pt"  }}><br/><br/>
    If you have receipts, you can claim a tax credit for donations of $5 or more. 

Go to <a href = "https://www.ird.govt.nz/donations" style={{color:"black",textDecoration:"none"}} title="Follow the link">ird.govt.nz/donations</a> &nbsp;

 for a list of approved donee organisations.
    </p><br/><br/><br/>


    <h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold"  }}>What are the criteria to claim tax credits? </h2>
    <p style={{fontSize:"18px", color:"#232423" , lineHeight:"26pt"  }}><br/><br/>
    <span style={{ color:"black", fontWeight:"bold"  }} >CLAIMING DONATIONS</span><br/>

 The total donations you claim can't be more than your taxable income for the year.<br/>

If you need to file an IR3 income tax return, IRD will need your return to check your taxable income before IRD can process your claim.<br/>

If you have losses brought forward greater than your taxable income, you have no taxable income, so the credit cannot be claimed.<br/>

 To avoid delays file your claim at the same time as you file your IR3.<br/>

 IRD will not process your claim before the end of the income year which it relates to. <br/>

    </p><br/><br/><br/>


    <h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold"  }}>When will the Charity Organisation get the benefit of my tax credit?</h2>
    <p style={{fontSize:"18px", color:"#232423" , lineHeight:"26pt"   }}><br/>
    

 IRD will not process your claim before the end of the income year which it relates to.  <br/>

   IRD will need your return to check your taxable income before IRD can process your claim.  <br/>

 
    </p><br/><br/><br/>


    <h2 style={{fontSize:"20px", color:"#1c1b1b", fontWeight:"bold"  }}>What are the criteria for a donation receipt?</h2>
    <p style={{fontSize:"18px", color:"#232423" , lineHeight:"26pt"   }}> <br/><br/>
    All receipts must show:<br/><br/>

   Your and/or your spouse/partner’s name.  <br/>
   The amount and date of the donation.  <br/>
    A clear statement that it is a donation. <br/>
   The signature of an authorised person.  <br/>
    An official stamp with the name of the donee organisation. <br/>
    The word "copy" or "replacement" if it's a replacement receipt.  <br/>
       </p><br/><br/><br/>

 

   <div className="btn-faq">
  <Link to="./contactus" ><button style={{width:"220px", height:"40px", fontSize:"14px", marginLeft:"0px", backgroundColor:"purple"}}>For more information contact us</button></Link>

</div>
    <br/><br/><br/>



    


        </div>
   
        <div className="footer" style={{backgroundColor:"white"}}>
                  
                  <p style={{color:"black"}}>Copyright © 2021</p>
                   <p> <span style={{color:'black'}}>DonatePlus - All Rights Reserved.</span></p>
                </div>    
        
        
</div>


 )
};
  
export default Faqs;