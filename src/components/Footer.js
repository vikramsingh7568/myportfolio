import "./FooterStyle.css";

import { Link } from "react-router-dom";

import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
       <div className="footer-container">
        <div className="left">

        <div className="location">
        <FaHome size={20} style={{color :
        "#fff",marginRight: '2rem'}}/>
       <div>
        <p>123 Jalriya Chankhed Bhilwara. </p>
        <p> India (Rajasthan).</p>
       </div>
      </div>  

      <div className="phone">
     <h4>
     <FaPhone size={20} style={{color :
        "#fff",marginRight: '2rem'}}/>
        123-2323-323-12
     </h4>
      </div>

      <div className="email">
     <h4>
      <Link to="vikramsinghkhinchi5@gmail.com">  
         <FaMailBulk size={20} style={{color :
        "#fff",marginRight: '2rem'}}/>
        viksachouhanmewad@gmail.com
        </Link>

     </h4>
      </div>

      </div>
        
        <div className="right">
            <h4>About the company</h4>
            <p>This is me vikram singh full stack developer
                , i enjoy discussing new projects and 
                design challenges
            </p>
            <div className="social"> 
           <Link to="@vikram_.chouhan">
            <FaFacebook size={20} style={{color :
              "#fff",marginRight: '1rem'}}/>
                 </Link>
                 <FaTwitter size={20} style={{color :
              "#fff",marginRight: '1rem'}}/>
              <Link to="https://www.linkedin.com/in/vikram-singh-556ab2140">
                   <FaLinkedin size={20} style={{color :
              "#fff",marginRight: '1rem'}}/>
         </Link>
 
            </div>
        </div>
       </div>
    </div>
  )
}

export default Footer
