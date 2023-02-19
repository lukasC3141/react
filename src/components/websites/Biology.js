import React from 'react'
import Header from '../webHeader/header'
import Sidebar from '../webSidebar/sidebar'
import dataBiologySidebar from '../data/dataBiologySidebar'
import DropdowItem from '../webSidebar/dropdownItem'
import { Link } from 'react-router-dom'
import Article from '../webArticle/article'



const WebsiteBiology = (props) => {

  
  const sidebarElement = dataBiologySidebar.map( list => { 
   return (
    <DropdowItem name={list.name}  altlist={list.altLinks.map(child => {
     return <li className='alt-sidebar-link'><Link to={child.to}>{child.altname}</Link></li>
    })} 
    />)})

    const [lessonsOpen, setLessonOpen] = React.useState(false)

    const LessonsOpen = () => {
        setLessonOpen(oldvalue => !oldvalue)
    }
    
  return (
      <>
        <Header func={LessonsOpen} lessonsOpen={lessonsOpen} width={props.width}/>
        <Sidebar navbar={lessonsOpen} title={"Biologie"} lists={sidebarElement}  />
        <Article />

      </>
    )
  }

export default WebsiteBiology