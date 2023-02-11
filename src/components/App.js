import React from 'react'
import MemeHeader from './meme-header/MemeHeader'
import MemeMain from './memeMain/MemeMain'
import "./app.css"

const App = () => {

  	// const CardElment = data.map((card) => {
    //   return <Card 
    //       key={card.id} //for identifying every card
    //       item={card}
    //     />
    // })

    // const TravelCardsElement = TravelData.map((card) => {
    //   return <TravelCards 
    //     id={card.id}
    //     card={card}
    //     />
    // })


    return (
      <>
        <MemeHeader />
        <MemeMain darkMode={false} />
      </>
    )
  }

export default App