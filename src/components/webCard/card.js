import React from "react"
import "./card.css"

const Card = (props) => {
    return (
        <>
            <div class="card-container">
                <div className="card-item">
                    <h3>Title</h3>
                    <p className="main-content-card">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe
                            aut minima dicta sunt rerum expedita soluta sit minus harum!
                    </p>
                    <p class="card-footer">foot-text</p>
                </div>
                <div class="card-item">
                    <h3>Title</h3>
                    <p class="main-content-card">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe
                        aut minima dicta sunt rerum expedita soluta sit minus harum!
                    </p>
                    <p class="card-footer">foot-text</p>
                </div>
                <div class="card-item">
                    <h3>Title</h3>
                    <p class="main-content-card">
                        a! Eligendi nisi doloremque vel, mollitia sunt dolores optio ad sit
                        laborum odio accusamus illo rerum sed? ipsum dolor sit amet
                        consectetur adipisicing elit. Illo saepe aut minima dicta sunt rerum
                        expedita soluta sit minus harum!
                    </p>
                    <p class="card-footer">foot-text</p>
                </div>
            </div>
        </>
    )
}

export default Card