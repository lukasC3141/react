import React from 'react'
import "./app.css"
import { Routes, Route } from 'react-router-dom'
import MainWebsite from './websites/main'
import WebsiteBiology from './websites/Biologie/Biology'
import BiologyBakerie2 from './websites/Biologie/BiologyBakerie2'
import SorryBanner from './webSorryBanner/sorryBanner'

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
            <Route path='/biologie/bakterie2' element={<BiologyBakerie2 width={width} />} />
            <Route path='*' element={<SorryBanner />}/>
        </Routes> 
      </>
    )
  }

export default App