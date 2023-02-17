import React from "react";
import "./travelCards.css";

const TravelCards = (props) => {
  return (
    <div className="card">
        <img className="card-img"  src={props.card.img} alt="yea"></img>
        <div className="card-text">
            <p>
                {props.card.location} <a href={props.card.href}>View on google maps</a>
            </p>
            <h2>{props.card.title}</h2>
            <h5>{props.card.date}</h5>
            <p>
                {props.card.description}
            </p>
        </div>
    </div>
  );
};

export default TravelCards;
