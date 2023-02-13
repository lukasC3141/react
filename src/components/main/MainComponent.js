import React from "react"
import "./MainComponent.css"
import Joke from "../joke/joke"

const MainCpomponent = () => {
    
    const [count, setCount] = React.useState(0)

    const add = () => {
        setCount(oldCount => oldCount + 1)
    }

    

    React.useEffect(() => {
        	
    }, [count])

    return (
        <div >
            <h3>gi</h3>
            <button onClick={add} >add</button>
            <h3>{count}</h3>
        </div>
    )
}

export default MainCpomponent