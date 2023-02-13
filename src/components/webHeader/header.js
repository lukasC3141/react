import React from "react"
import "./header.css"

const Header = (props) => {
    
    const [sidebarButton, setSidebarButton] = React.useState(false)
    
   
    
    const mobileWidth = props.width <= 400
    const tabletWidth = props.width > 400 && props.width <= 600
    const notebookWidth = props.width > 600 && props.width <= 1000
    const compScreenWidth = props.width > 1000

    

    const dropdown = () => {
        console.log("click")
        setSidebarButton(oldButton => !oldButton)
    }

    return (
        <>
            <header> 
                <nav className={mobileWidth ? "navbar-mobile navbar container" : "navbar container"}>
                    <a href="#" className="logo">LOGO</a>
                    { mobileWidth && <i className="bi bi-justify" onClick={dropdown} ></i>}

                    { (tabletWidth || notebookWidth || compScreenWidth || sidebarButton) && <div className={mobileWidth && "menu-mobile"}>
                       <ul className={mobileWidth ? "list-mobile" : "list"}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>}
                </nav>
            </header>
        </>
    )
}

export default Header