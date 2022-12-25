import "./FormStyle.css";

import React from 'react'

const Form = () => {
  return (
    <div>
      <form method="post" action="https://formspree.io/f/xeqwjvpn">
        <label>your Name </label>
        <input type="text" name="value"></input>
        <label> email </label>
        <input type="email" name="value"></input>
        <label> subject </label>
        <input type="text" name="value"></input>
        <label> message </label>
        <textarea rows="6" placeholder="type your message here" name="value"/>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
  }

export default Form
