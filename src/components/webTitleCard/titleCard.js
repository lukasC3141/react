import React from "react";
import "./titleCard.css"

const TitleCard = (props) => {
    
    const mobileWidth = props.width <= 400
    const tabletWidth = props.width > 400 && props.width <= 600
    const notebookWidth = props.width > 600 && props.width <= 1000
    const compScreenWidth = props.width > 1000


    
    
    return (
        <>
            { !mobileWidth && <div className="title-card">
                <img src="https://picsum.photos/400/300" alt="image" />
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
                libero quaerat blanditiis praesentium, facilis quia reiciendis quos
                sed repellendus quibusdam dolorum laudantium cupiditate eaque pariatur
                eos ad, reprehenderit atque inventore!
                </p>
            </div>}
            <button><a href="index2.html" >index2</a></button>
        </>
    )
}

export default TitleCard