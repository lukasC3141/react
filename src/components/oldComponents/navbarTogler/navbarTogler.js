import React, {useState} from 'react'
import './navbarTogler.css'

const NavbarTogler = () => {

    const [Clicked, SetClicked] = useState(false)

    const clickFunct = () => {
        alert("hi")
    }

    return (
        <i className="bi bi-justify" onClick={clickFunct}></i>
    )
}

export default NavbarTogler