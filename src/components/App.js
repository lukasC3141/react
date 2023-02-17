import React from 'react'
import "./app.css"
import Header from './webHeader/header'
import TitleCard from './webTitleCard/titleCard'
import Card from './webCard/card'


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
        <Header width={width}/>
        <TitleCard/>
        <Card />
      </>
    )
  }

export default App