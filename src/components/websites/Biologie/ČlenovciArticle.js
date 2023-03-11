import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../webHeader/header'
import Sidebar from '../../webSidebar/sidebar'
import DropdowItem from '../../webSidebar/dropdownItem'
import dataBiologySidebar from '../../data/dataBiologySidebar'
import Footer from '../../webFooter/footer'
import ArticleForNotes from '../../webArticle/articleForNotes'
import {Členovci} from '../../webArticle/ArticlesBiology'


function ČlenovciArticle(props) {
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
        <ArticleForNotes article={Členovci} title="Členovci" />
        <Footer />
    </>
  )
}

export default ČlenovciArticle