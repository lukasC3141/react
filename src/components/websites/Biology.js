import React from 'react'
import Header from '../webHeader/header'
import Sidebar from '../webSidebar/sidebar'
import dataBiologySidebar from '../data/dataBiologySidebar'
import DropdowItem from '../webSidebar/dropdownItem'
import { Link } from 'react-router-dom'



const WebsiteBiology = (props) => {

  
  const sidebarElement = dataBiologySidebar.map( list => { 
   return (
    <DropdowItem name={list.name}  altlist={list.altLinks.map(child => {
     return <li className='alt-sidebar-link'><Link to={child.to}>{child.altname}</Link></li>
    })} 
    />)})
    
  return (
      <>
        <Header width={props.width}/>
        <Sidebar title={"Biologie"} lists={sidebarElement}  />
      </>
    )
  }

export default WebsiteBiology