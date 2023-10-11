import React from "react"
import Logo from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav className="navbar_content">
            <img src={Logo}/>
        </nav>
    )
}