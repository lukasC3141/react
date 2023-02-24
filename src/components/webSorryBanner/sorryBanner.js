import React from 'react'
import "./sorryBanner.css"
import { Link } from 'react-router-dom'


function SorryBanner() {
  return (
    <>
        <div className='sorry-banner'>
            <h2>Error 404</h2>
            <h5>Sorry, but this path of this domain leads nowhere</h5>
            <button className='home-button'><Link to="/">Home</Link></button>
        </div>
    </>
  )
}

export default SorryBanner