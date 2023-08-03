import React from "react";
import "./Modal.css"
import haroonimg from "../images/haroon.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPerson,
    faCalendar,
    faPhone,
    faMessage,
    faLocationPin
}
    from "@fortawesome/free-solid-svg-icons"

function Modal(props) {
    return (
        <>
            <div className="pop-up">
                <button class="close-modal" onClick={() => { props.closeModal(false) }}>&times;</button>
                <div className="left">
                    <div className="left-head">
                        <img className="pop-img" src={haroonimg} alt=""></img>
                        <h3 className="pup-up-title">Haroon Ahmadzai</h3>
                        <h4 className="pup-up-sub-title">Creative Designer</h4>
                    </div>

                    <div class="left-info">
                        <div className="left-icons">
                            <FontAwesomeIcon className="icon-img" icon={faPerson}></FontAwesomeIcon><br></br>
                            <FontAwesomeIcon className="icon-img" icon={faCalendar}></FontAwesomeIcon><br></br>
                            <FontAwesomeIcon className="icon-img" icon={faLocationPin}></FontAwesomeIcon><br></br>
                            <FontAwesomeIcon className="icon-img" icon={faPhone}></FontAwesomeIcon><br></br>
                            <FontAwesomeIcon className="icon-img" icon={faMessage}></FontAwesomeIcon><br></br>
                        </div>
                        <div className="info">
                            <p className="par">Haroon Ahmadzai</p>
                            <p className="par">01.07.2002</p>
                            <p className="par">Kabul Afghanistan</p>
                            <p className="par">+93749070750</p>
                            <p className="par">haroonahmadzai001@gmail.com</p>

                        </div>


                    </div>
                    <a href="#" className="btn btn-modal">Download CV</a>
                </div>

                <div className="right">
                    <div className="about ">
                        <h2>About me</h2>
                        <p>Hello everybody! My name is Haroon Ahmadzai. I am a graphic designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge. </p>
                    </div>
                    <div className="Services ">
                        <h2>Quility services</h2>
                        <ul>
                            <li>Creative</li>
                            <li>Fast</li>
                            <li>On time</li>
                            <li>Reliable</li>
                        </ul>
                    </div>
                    <div class="programming-skills">
                        <h2>programming skill</h2>
                        <li>
                            <h3>html</h3>
                            <span class="bar bar-span"></span><span class="html"></span>
                        </li>
                        <br></br>

                        <li>
                            <h3>css</h3>
                            <span class="bar bar-span"></span><span class="css"></span>
                        </li>
                        <br></br>

                        <li>
                            <h3>javascript</h3>
                            <span class="bar bar-span"></span><span class="javascript"></span>
                        </li>
                        <br></br>

                        <li>
                            <h3>react</h3>
                            <span class="bar bar-span"></span><span class="react"></span>
                        </li>
                        <br></br>

                    </div>
                </div>



            </div>
            <div className="overlay" onClick={()=>{props.closeModal(false)}}></div>
        </>

    )
}
export default Modal;