import React from "react" 
import MainMeme from "../../data/data-meme"
import "./MemeMain.css"


const MemeMain = () => {

      const [meme, setMeme] = React.useState({
         topText: "",
         bottomText: "",
         randomImage: "https://i.imgflip.com/30b1gx.jpg"
      })

      const allMemeImages = MainMeme.data.memes

      const handleClick = () => {
         const randomNum = Math.floor(Math.random() * allMemeImages.length)
         setMeme(oldMeme => {
             return {
                 ...oldMeme,
                 randomImage: allMemeImages[randomNum].url
             }
         })
      }


    // const [goOut, setGoOut] = React.useState(false)

    // const handleClick = () => {
    //     setGoOut(oldValue => !oldValue)
    // }

    // const [array, setArray] = React.useState(["thing 1", "thing 2"])

    // const handleClick = () => {
    //     setArray(prevArray => {
    //         return [...prevArray, "thing " + (prevArray.length + 1)]})
    // }

    // const element = array.map(thing => <p key={thing}>{thing}</p>)

    // const [count, setCount] = React.useState(0)

    // const add = () => {
    //     setCount(oldCount => oldCount + 1)
    // }

    // const substract = () => {
    //     setCount(oldCount => oldCount - 1)
    // }

    // const [contact, setContact] = React.useState({
    //     firstName: "John",
    //     isFavorite: false
    // }) 

    // const TogleFavourite = () => {
    //     setContact(oldContact => {
    //         return {
    //             ...oldContact,
    //             isFavorite: !oldContact.isFavorite
    //         }
    //     })
    // }

    // const [array, setArray] = React.useState(boxes)
    
    //  const changeColor = (id) => {
    //      setArray(oldArray => {
    //         return oldArray.map( square => {
    //             return square.id === id ? {...square, on: !square.on} : square
    //         })
    //      })
    //  }

    // const newElement = array.map( box => {
    //     return <Box key={box.id}
    //      on={box.on} handleclass={"box"}
    //       handleClick={changeColor} 
    //       id={box.id}/>
    // })

    // const [isShown, setIsShown] = React.useState(true)

    // const swichShow = () => {
    //     setIsShown(oldShow => !oldShow)
    // }

    return (
        <>
             <div className="main">
                <input type="text" ></input>
                <input type="text" ></input>
                <button className="button-main" onClick={handleClick} type="button">click for new meme</button>
            </div>
            <div className="main-picture">
                <img src={meme.randomImage} alt="img-meme" ></img>
            </div>  
        </>
    )
}


export default MemeMain