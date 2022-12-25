import "./AboutContentStyle.css"

import React from 'react'
import { Link } from "react-router-dom"
import react1 from "../assets/project2.jpg"
import img5 from "../assets/Project5.jpg"
const AboutContent = () => {
  return (
    <div className="About">
      <div className="left">
         <h1> Who Am I</h1>
           <p>I'Am vikram singh  full stack developer i created responsive secure website for my client
            and also developed backed data base in node js using mondgo db and my sql
           </p>
           <Link to ="/contact">
            <button className="btn"> contact </button>
             </Link>
             
          </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack 
             top">
                <img src={react1} className="img" 
                alt="true"/>
            </div>
            <div className="img-stack 
             bottom">
                <img src={img5} className="img" 
                alt="true"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
