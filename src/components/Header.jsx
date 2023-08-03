import React from "react";
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"


function Header() {
    const activeStyle = {
        color: "#1792d2",

    }
    const [open, setOpen] = React.useState(false)
    return (
        <header>
            <div className="container container-flex">
                <div className="header-logo">
                    <h1 className="header-title" >HaroOn</h1>
                </div>

                <nav>
                    <ul className={open ? "show" : "hide"}>
                        <li onClick={()=>{setOpen(false)}}><NavLink to="/" style={({ isActive }) => isActive ? activeStyle : null}>Home</NavLink></li>
                        <li onClick={()=>{setOpen(false)}}><NavLink to="about" style={({ isActive }) => isActive ? activeStyle : null}>About</NavLink></li>
                        <li onClick={()=>{setOpen(false)}}><NavLink to="project" style={({ isActive }) => isActive ? activeStyle : null}>Project</NavLink></li>
                        <li onClick={()=>{setOpen(false)}}><NavLink to="contact" style={({ isActive }) => isActive ? activeStyle : null}>Contact</NavLink></li>

                    </ul>
                    <label id="icon">
                        <FontAwesomeIcon icon={faBars} onClick={() => setOpen(pre => !pre)}></FontAwesomeIcon>
                    </label>
                </nav>
            </div>
        </header>
    )
}
export default Header;