
import React from "react";
import "./Project.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


import img1 from "../images/img-1.jpg"
import img2 from "../images/img-2.jpg"
import img3 from "../images/img-3.jpg"
import img4 from "../images/img-4.jpg"
import img5 from "../images/img-5.jpg"
import img6 from "../images/img-6.jpg"
import img7 from "../images/img-7.jpg"
import img8 from "../images/img-8.jpg"
import img9 from "../images/img-9.jpg"

export default function Project() {
    function slideLift() {
       
        var carousel = document.querySelector("#carousel")
        var firstImg = document.querySelector("#image")
        var arrowIcons = document.querySelectorAll(".icon-imgg");
        console.log(carousel)
        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                var firstImgWidth = firstImg.clientWidth + 5;
                carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            })
        })

    }
    function slideRight() {
        
        var carousel = document.querySelector("#carousel")
        var firstImg = document.querySelector("#image")
        var arrowIcons = document.querySelectorAll(".icon-imgg");
        console.log(carousel)
        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                var firstImgWidth = firstImg.clientWidth + 5;
                carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            })
        })

    }

    return (
        <div className="container">
            <div className="wrapper">

                <FontAwesomeIcon id="left" className="icon-imgg" onClick={slideRight} icon={faChevronLeft}></FontAwesomeIcon>
                <div id="carousel">
                    <img id="image" src={img1} alt="img"></img>
                    <img id="image" src={img2} alt="img"></img>
                    <img id="image" src={img3} alt="img"></img>
                    <img id="image" src={img4} alt="img"></img>
                    <img id="image" src={img5} alt="img"></img>
                    <img id="image" src={img6} alt="img"></img>
                    <img id="image" src={img7} alt="img"></img>
                    <img id="image" src={img8} alt="img"></img>
                    <img id="image" src={img9} alt="img"></img>
                </div>

                <FontAwesomeIcon id="right" className="icon-imgg" onClick={slideLift} icon={faChevronRight}></FontAwesomeIcon>
            </div>
        </div>
    )
}