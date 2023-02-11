import React from "react";

const Box = (props) => {

    // let Sudé
    // if (array.length % 2 === 0 ) {
    //     Sudé = true
    // } else if (array.length % 2 !== 0 ) {
    //     Sudé = false
    // }

 
    const styles = {
        backgroundColor: props.on ? "#222222" : "#cccccc"
    }

    return (
        <div>
            <div style={styles} 
            className={props.handleclass} 
            onClick={() => props.handleClick(props.id)} ></div>
        </div>
    )
}

export default Box