import React from "react"
import "./meme-header.css"

const MemeHeader = () => {
    return (
        <div className="header">
            <div className="left-header">
                <img className="header-img" alt="img" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png" ></img>
                <h3>Meme Generator</h3>
            </div>
            <h4>React course - Project 3</h4>
        </div>
    )
}

export default MemeHeader
