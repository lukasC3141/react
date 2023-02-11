import React from "react"
import "./joke.css"

const Joke = (props) => {
    return (
        <div>
            <div className="setup"> {props.setup}</div>
            <div>{props.punchline}</div>  
        </div>
    )
}

export default Joke