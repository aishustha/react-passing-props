import React from "react";
import PhotoGrid from "../images/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero_content">
            <img src={PhotoGrid} />
            <h1>Online Experience</h1>
            <p>Join unique interactive activities led 
                by one-of-a-kind hosts—all without leaving 
                home.</p>
        </section>
    )
}