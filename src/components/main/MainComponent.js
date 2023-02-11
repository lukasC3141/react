import React from "react"
import "./MainComponent.css"
import Joke from "../joke/joke"

const MainCpomponent = () => {
    const colors = 
        [<h3>red</h3>,
        <h3>orange</h3>,
        <h3>yellow</h3>,
        ]

    const jokesData = [
        {
            setup: "I got fridge?",
            punchline: "fun pun"
        },
        {
            setup: "I got an elephant in a fridge?",
            punchline: "fun pun without elephant"
        },
        {
            setup: "I got bees in a fridge?",
            punchline: "now its driping from an elephant as well"
        },
    ]
    const jokeElements = jokesData.map((joke) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })

    return (
        <div className="main">
            {jokeElements}
        </div>
    )
}

export default MainCpomponent