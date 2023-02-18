import React from "react"
import "./header.css"
import { Link } from "react-router-dom"

const LessonsNav = () => {
    return (
        <>
            <nav>
                <ul className="lessons-nav" >
                        <li><Link to="/biologie">Biologie</Link></li>
                        <li><Link to="/">Chemie</Link></li>
                        <li><Link to="/">Český jazyk</Link></li>
                        <li><Link to="/">Zeměpis</Link></li>
                        <li><Link to="/">ZSV</Link></li>
                        <li><Link to="/">Dějepis</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default LessonsNav