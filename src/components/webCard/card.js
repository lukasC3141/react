import React from "react"
import "./card.css"

const Card = (props) => {
    return (
        <>
            <div className="card-item">
                <h3>{props.card.title}</h3>
                <p className="main-content-card">
                    {props.card.content}
                </p>
                <p class="card-footer">{props.card.footer}</p>
            </div>
        </>
    )
}

export default Card