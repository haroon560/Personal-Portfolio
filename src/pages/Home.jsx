import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"

function Home(){
    const navigate=useNavigate()
    function handleClick(){
        navigate("/contact")
    }
    return(
        <main>
            <div className="container">
                <h1 className="home-title">Haroon Ahmadzai</h1>
                <h2 className="home-subtitle">Creative<strong></strong></h2>
                <a onClick={handleClick} className="btn" href="#">Get in touch</a>
            </div>
        </main>
    )
        
    
}
export default Home;