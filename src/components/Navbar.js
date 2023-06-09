import React from "react";
import '../styles/Navbar.css';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <a href="#" className="logo">MARVEL</a>
                <div className="nav-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Heroes</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;