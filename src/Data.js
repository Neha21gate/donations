import React from "react";
import "./Data.css";
import Signupform from "./components/Signupform";





const Data =()=> {



    return (
        <>
      
        {/* main div */}
        <div className="wrapper">
        
   
        
        {/* first body div */}
        
                  <div className="first-content" >    
                  <p className="para" >GOD LOVES CHEERFUL GIVER</p><br/><br/>                       
                  </div>

                 
        
        
        {/* second body div */} 
        <div className="butterfly-catterpillar">
        
                  <div className="second-content">
                     
        
                       <h2 >WHAT IS OUR OBJECTIVE </h2><br/><br/><br/>
                       <p  >To be a humble member of your charity family<br/><br/> HELP your charity <br/><br/>Spread care and love within our community. </p><br/>
                       
                     
                    
                  </div>
                  <div className="secondscontent" >
                     
        
                       <h2 >WHAT WE DO</h2><br/><br/><br/>
                       <p >We are the link between the DONOR - IRD - CHARITY <br/><br/>
                       Donor has the power to automatically redonate their<br/>

                        Tax- Credit to the Charity<br/><br/> This Act of Kindness can increase the original donation <br/>
                        by 48%.  </p><br/>
                       
                     
                    
                  </div>
                  </div>
        
          
                 
        {/* third div   */ }
                  
                  <div  className="about-us" >

                      <h1 style={{fontSize: "30px", color:"black",
                      fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
}}>HOW IT WORKS</h1><br/><br/><br/>


<table className="simple-board" >
        <tbody >
          <tr className="row0" >
            <td className="cell0-00" style={{color:"black"}}>$100.00</td>
            <td className="cell0-11">&nbsp;</td>
            <td className="cell0-22" style={{color:"black"}}>Donation by a cheerful donor</td>
          </tr>
          <tr className="row1">
            <td className="cell1-00"></td>
            <td className="cell1-11" style={{color:"grey"}}>&nbsp;&nbsp;$100.00 &nbsp;&nbsp;</td>
            <td className="cell1-22" style={{color:"grey"}}>Receipt issued by the Charity via DonatePlus</td>
          </tr>
          <tr className="row2">
            <td className="cell2-00" style={{color:"black", fontSize:"20px"}}>$33.33</td>
            <td className="cell2-11"></td>
            <td className="cell2-22" style={{color:"black"}}>Charity receives from DonatePlus.</td>
          </tr>
          <tr className="row2">
            <td className="cell2-00"></td>
            <td className="cell2-11" style={{color:"grey"}}>&nbsp;&nbsp;$33.33</td>
            <td className="cell2-22" style={{color:"grey"}}>Receipt issued by the Charity via DonatePlus</td>
          </tr>
          <tr className="row2">
            <td className="cell2-00" style={{color:"black"}}>$11.11 </td>
            <td className="cell2-11"></td>
            <td className="cell2-22" style={{color:"black"}}>Charity receives from DonatePlus</td>
          </tr>
          <tr className="row2">
            <td className="cell2-00"></td>
            <td className="cell2-11" style={{color:"grey"}}>&nbsp;&nbsp;$11.11</td>
            <td className="cell2-22" style={{color:"grey"}}>Receipt issued by the Charity via DonatePlus</td>
          </tr>
          <tr className="row2" >
            <td className="cell2-00" style={{color:"black"}}>$3.70 </td>
            <td className="cell2-11"></td>  
            <td className="cell2-22" style={{color:"black"}}> Charity receives from DonatePlus</td>  
          </tr>

          </tbody> 
          </table>
          <br/>
          
          
<hr className="horizontal-line"/>
          <table style={{ width:"auto", height:"60px"}}>
          
          
          <tbody>
         
          <tr className="row2" >
        
         <td className="cell2-0" >$148.14</td>
         <td className="cell2-1" ></td>  
         <td className="cell2-2" >Total Donation received by the Charity</td>
          </tr>
          </tbody>
</table>

      
<br/><br/> <br/><br/>
       
                  </div>

                 
                  <hr/><hr/>
        
    
                            
                 
        {/* seventh body div in which contact us detail available */ }
                 
                      
                          <div className="login-box2" >
                            
                           <Signupform/>
                          </div>
      
        
        </div>
      
        </>
            
        );
        };
    
export default Data;