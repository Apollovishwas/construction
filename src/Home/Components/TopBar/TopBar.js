import React from "react";
import './TopBar.css';


export default function TopBar() {
    return (
        <div className="TopBarContainer">
<div className="navContainer">
    <div className="logo">
        <img className = "theLogo" src = {'https://i.ibb.co/k8cgrkt/Untitled-Artwork-1.png'} alt = 'bad internet dood'/>
    </div>

    <div className="navOptionsContainer">
        <ul className="navOptions">
            <li>Contact Us</li>
            <li>Our Work</li>
        </ul>
    </div>
    
</div>
        </div>
    )
}
