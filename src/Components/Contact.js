import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nxdxx7e', 'template_5nkg80u', form.current, 'bNJAsFIgDQUbwIxVT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const showHidden = () => {
    const submitted = document.getElementById("submitted");
    if (submitted.style.visibility === "hidden") {
      submitted.style.visibility = "visible"
    } else {
      submitted.style.visibility = "hidden"
    }
  }

    return (
        <div id="contact">
          <div id="contact-container">
          <h1 className="headers">Contact Me</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div id="first-last">
              <div className="names">
            <label className="label" for="fname">First Name</label>
            <input 
              type="text" 
              id="fname" 
              name="firstname" 
              placeholder="Obito"></input>
              </div>
              <div className="names">
            <label className="label" for="lname"> Last Name</label>
            <input 
              type="text" 
              id="lname" 
              name="lastname" 
              placeholder="Uchiha"></input>
              </div></div>
            <label className="label" for="email">E-mail</label>
            <input 
              className="long"
              type="text" 
              id="email" 
              name="email" 
              placeholder="youremail@gmail.com"></input>
            <label className="label" for="subject">Subject</label>
            <input
              className="long"
              type="text" 
              id="subject"
              name="subject"
              placeholder="Regarding..."></input>
            <label className="label" for="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              className="long"
              placeholder="Write something.." ></textarea>
            <div id="sub-row"><h3 id="submitted">Message Sent!</h3>
           <div id="submit"><input type="submit" value="send" onClick={showHidden}></input></div></div>
          </form>
          </div>
        </div>
    )
}