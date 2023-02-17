import React from "react"
import "./header.css"

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-item">
                    <img src="logo512.png" className="nav-img"></img>
                    <h4>ReactFacts</h4>
                </div>
                <p className="nav-item">React Course - Project 1</p>
            </nav>
        </header>
    )
}

export default Header