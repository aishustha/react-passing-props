import React from "react";
import Star from "../images/star.png"

export default function Card({item, openSpots, coverImg, stats, title, rating, reviewCount, price, location}) {
   
    let badgeText

    if (openSpots === 0 ) {
        badgeText = "S0LD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
   
   
    return (
        <div className="card_content">
            {/* if first statement is true, then the second statement run and display and hence if first statement is false then second statement never display*/}
            {/* When this condition is true, the code after && is executed, which renders a <div> element with the class "card--badge" containing the text "SOLD OUT." */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            {/* If badgetext has a real value, then display a badge  */}
            <img src={coverImg} className="card-img"/>
            <div className="card-stats">
                <img src={Star}/>
                <span>{stats.rating}</span>
                <span>({stats.reviewCount}).</span>
                <span>{location}</span>
            </div>
            <div className="card-desc">
                <p>{title}</p>
                {/* <p>{item.title}</p> */}
                <p><b>From ${price} </b>/ person</p>
            </div>
        </div>
    )
}
