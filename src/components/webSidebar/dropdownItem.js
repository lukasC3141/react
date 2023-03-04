import React from 'react'
import "./sidebar.css"

const DropdowItem = (props) => {

    const [openAltlist, setOpenAltlist] = React.useState(false)

    const OpenFunc = () => {
        setOpenAltlist(oldvalue => !oldvalue)
    }

    return (
        <>
            <li className='sidebar-link' onClick={OpenFunc} ><i class={ openAltlist ?"bi bi-caret-down-fill" : "bi bi-caret-right-fill" }></i>{props.name}</li>
            {openAltlist && <ul>
                {props.altlist}
            </ul>}
        </>
    )
}

export default DropdowItem