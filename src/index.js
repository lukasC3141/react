// import './styles/navbar.css'
// import './styles/cards.css'
// import './global.css'
// import './styles/footer.css'
// import './styles/title_card.css'
// import './styles/texts_and_articles.css'

// const h1 = document.createElement("h1")
// h1.textContent = "way of program "
// h1.className = "headers"
// document.getElementById("root").append(h1)

import React from "react"
import  ReactDOM  from "react-dom"
import "./global.css"
import App from "./components/App.js"
import { HashRouter } from "react-router-dom"


const Page = () => {
    return (
    <HashRouter>
        <App />
    </HashRouter>
    )
}

const root = document.getElementById("root")
ReactDOM.render(<Page />, root)