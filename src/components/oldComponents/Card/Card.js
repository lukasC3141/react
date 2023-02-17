import React from "react"
import "./Card.css"

const Card = (props) => {

    const timeTell = () => {
        const date = new Date()
        let timeMessage = null

        if (date.getHours() > 5 && date.getHours() <= 11) {
            timeMessage = "Morning"
        }
    
        else if (date.getHours() > 11 && date.getHours() <= 17) {
            timeMessage = "afternoon"
        }
    
        else if (date.getHours() > 17 && date.getHours() <= 21) {
            timeMessage = "evening"
        }

        else if (date.getHours() > 21 && date.getHours() <= 5) {
            timeMessage = "night"
        }
        return timeMessage
    }
    
    let badgeText 
    if (props.item.openSpots === 0) {
        badgeText = "SOLD"
    }
    else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <p className="sold">{badgeText}</p>}
            {props.item.location === "Online" && <p className="sold">{badgeText}</p>}
            <img className="card-inst-img" src={props.item.coverImg} alt="img"></img>
            <div className="card-inst">
                <p>{props.item.stats.rating} ({props.item.stats.reviewCount}) {props.item.location}</p>
                <p>{props.item.title}</p>
                <p>from ${props.item.price}/person</p>
                <p>good {timeTell()} my friend</p>
            </div>
        </div>
    )
}

export default Card