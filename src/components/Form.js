import "./FormStyle.css";

import React from 'react'

const Form = () => {
  return (
    <div>
      <form>
        <label>your Name </label>
        <input type="text"></input>
        <label> email </label>
        <input type="email"></input>
        <label> subject </label>
        <input type="text"></input>
        <label> message </label>
        <textarea rows="6" placeholder="type your message here "/>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
  }

export default Form
