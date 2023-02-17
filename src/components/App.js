import React from 'react'
import "./app.css"
import Header from './webHeader/header'
import TitleCard from './webTitleCard/titleCard'
import Card from './webCard/card'
import cardData from './data/cardData'


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

    const cardElement = cardData.map( card => <Card card={card} />)

    
    return (
      <>
        <Header width={width}/>
        <TitleCard/>
        <div className='card-container' >
          {cardElement}
        </div>  
      </>
    )
  }

export default App