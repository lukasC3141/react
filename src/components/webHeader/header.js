import React from "react"
import "./header.css"
import { Link } from "react-router-dom"

const Header = (props) => {
    
    // const [sidebarButton, setSidebarButton] = React.useState(false)
    
   
    
     const mobileWidth = props.width <= 400
     const tabletWidth = props.width > 400 && props.width <= 600
     const notebookWidth = props.width > 600 && props.width <= 1000
     const compScreenWidth = props.width > 1000


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
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header