import React, {useState, useEffect} from 'react'
import "./CountButton.css"


const CountButton = (props) => {

    const [currentCount, setCurrentCount] = useState(0)
    const [anotherCounter, setAnotherCounter] = useState(false)
    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    useEffect(() => {
        console.log(anotherCounter)
        if (currentCount === 10) {
            setAnotherCounter(true)
        }
    }, [currentCount])

    return (
    <div>
        <button onClick={handleClick}>+{props.incrementBy}</button>
        <div className="count-display">{currentCount}</div>
        {anotherCounter && <div className="count-display">{currentCount}</div>}
    </div>)
}

export default CountButton