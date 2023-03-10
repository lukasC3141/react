import React from 'react'
import "./sidebar.css"

function Sidebar(props) {
  
    const [mainSidebar, setMainSidebar] = React.useState(false)

    const Sidebar = () => {
        setMainSidebar(oldvalue => !oldvalue)
    }

   
    return (
    <>
        <div className='sidebar'>
            <h3 className='title-of-sidebar' onClick={Sidebar} ><i class={mainSidebar ? "bi bi-caret-down-fill" : "bi bi-caret-right-fill"}></i>{props.title}</h3>
            { mainSidebar && <ul>
                {props.lists}
            </ul>}
        </div>
    </>
  )
}

export default Sidebar