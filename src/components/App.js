import React from 'react'
import "./app.css"
import { Routes, Route } from 'react-router-dom'
import Header from './webHeader/header'
import MainWebsite from './websites/main'
import WebsiteBiology from './websites/Biology'


const App = () => {


    // set width of screen
    const [width, setWidth] = React.useState(window.innerWidth)
    React.useEffect(() => {
        console.log("reset effect")
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
      <>
         <Routes>
            <Route path='/' element={<MainWebsite width={width}/>} />  
            <Route path='/biologie' element={<WebsiteBiology width={width} />} />
        </Routes> 
      </>
    )
  }

export default App