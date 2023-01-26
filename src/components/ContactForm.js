import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
    return <div class="container">
    <h1>Contact us!</h1>
    <div className="contact"> 
    <form target="_blank" action="https://formsubmit.co/umKvFL6HsSQ7hfkS@gmail.com" method="POST">
      <div class="form-group">
        <div class="form-row">
          <div class="col">
            <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
          </div>
          <div class="col">
            <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
            <input type="hidden" name="_autoresponse" value="Thank you for your inquiry! We will get back to you shortly."/>
          </div>
        </div>
      </div>
      <div class="form-group">
        <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
      </div>
      <button type="submit" id="submit-btn" class="btn btn-lg btn-dark btn-block">Submit Form</button>
    </form>
  </div>
  </div>


};

export default ContactForm;