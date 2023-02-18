import React from "react";
import "./titleCard.css"

const TitleCard = () => {
    
    // const mobileWidth = props.width <= 400
    // const tabletWidth = props.width > 400 && props.width <= 600
    // const notebookWidth = props.width > 600 && props.width <= 1000
    // const compScreenWidth = props.width > 1000

    
    
    return (
        <>
            <div className="title-card">
                <img src="https://picsum.photos/400/300" alt="title" />
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
                libero quaerat blanditiis praesentium, facilis quia reiciendis quos
                sed repellendus quibusdam dolorum laudantium cupiditate eaque pariatur
                eos ad, reprehenderit atque inventore!
                </p>
            </div>
        </>
    )
}

export default TitleCard