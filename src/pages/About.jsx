import React from "react";
import "./About.css"
import haroonimg from "../images/haroon.jpg"
import Modal from "./Modal";

function About() {
    const [openModal,setOpenModal]=React.useState(false)
    return (
        <div  className="container about-container">
            <div className="about-img">
                <img src={haroonimg} alt=""></img>
            </div>
            <div className="about-info">
                <h2 className="about-title">Haroon Ahmadzai</h2>
                <h3 className="about-subtitle">Creative Desinger</h3>
                <p>My name is <strong>Haroon Ahmadzai</strong> i am a frontend web developer,
                    and i love my work however i am new to web development but i
                    know my skills and abilities that i can make any kind of
                    web projects
                </p>
                <a onClick={()=>{setOpenModal(true)}} className="btn" href="#">Learn More</a>
            </div>
            {openModal && <Modal closeModal={setOpenModal}/>}
        </div>
    )


}
export default About;