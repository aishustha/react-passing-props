import React from "react"
import ReactDOM from "react-dom"
import './index.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data";
function App() {

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                // item={item}

                {...item}
                //

                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots={item.openSpots}
            />
        )
    })

    return (
        <div className="container">
            <Navbar/>
            <Hero/>
            <section className="card-flex">
                {cards}
            </section>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))