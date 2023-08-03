import React from "react";
import "./Contact.css"

function Contact() {
    return (
        <div className="container contact-container">
            <h1 className="contact-title">GET IN TOUCH</h1>
            <input className="input address" type="text" placeholder="Kabul,Afghanistan"></input>
            <input className="input phone" type="text" placeholder="+93749070750"></input>
            <input className="input myemail" type="text" placeholder="haroonahmadzai001@gmail.com"></input>
            <input className="input social" type="text" placeholder="@facebook Haroon"></input>
            <input className="input name" type="text" placeholder="name"></input>
            <input className="input email" type="text" placeholder="email"></input>
            <input className="input message" type="text" placeholder="message"></input>
            <a href="#" class=" btn">message</a>


        </div>
    )
}
export default Contact;