import React from "react"
import "./header.css"
import { Link } from "react-router-dom"

const Header = (props) => {
    
    // const [sidebarButton, setSidebarButton] = React.useState(false)
    
   
    
    //  const mobileWidth = props.width <= 400
    //  const tabletWidth = props.width > 400 && props.width <= 600
    //  const notebookWidth = props.width > 600 && props.width <= 1000
    //  const compScreenWidth = props.width > 1000


    // const dropdown = () => {
    //     setSidebarButton(oldButton => !oldButton)
    // }

    

    return (
        <>
            <header> 
                <nav className="navbar">
                    <Link to="/" className="logo">LOGO</Link>
                    
                    <div className="menu-mobile">
                        <ul className="list">
                            <li><Link to="/">Úvod</Link></li>
                            <li><a href="https://github.com/lukasC3141/react">GitHub</a></li>
                            <li className="lessons" onClick={props.func}><i class={ props.lessonsOpen ? "bi bi-caret-down-fill" : "bi bi-caret-right-fill"}></i>Předměty</li>
                        </ul>
                    </div>
                </nav>
            </header>
           { props.lessonsOpen && <ul className="lessons-dropdown">
                <li><Link to="/biologie">Biologie</Link></li>
                <li><Link to="/chemie">Chemie</Link></li>
                <li><Link to="/český_jazyk">Český jazyk</Link></li>
                <li><Link to="/zeměpis">Zeměpis</Link></li>
                <li><Link to="/ZSV">ZSV</Link></li>
                <li><Link to="/dějepis">Dějepis</Link></li>
            </ul>}
        </>
    )
}

export default Header