import React from 'react'
import Header from '../webHeader/header'
import TitleCard from '../webTitleCard/titleCard'
import Card from '../webCard/card'
import cardData from '../data/cardData'
import Article from '../webArticle/article'
import Footer from '../webFooter/footer'
import LessonsNav from '../webHeader/header2'




const MainWebsite = (props) => {

    const cardElement = cardData.map( card => <Card card={card} />)

    const [lessonsOpen, setLessonOpen] = React.useState(false)

    const LessonsOpen = () => {
        setLessonOpen(oldvalue => !oldvalue)
    }

    return (
      <>  
        <Header width={props.width} func={LessonsOpen} lessonsOpen={lessonsOpen}/>
          <main>
          <TitleCard/>
          <LessonsNav />
          <div className='card-container' >
            {cardElement}
          </div>
          <Article />
        </main>
        <Footer />
      </>
    )
  }

export default MainWebsite