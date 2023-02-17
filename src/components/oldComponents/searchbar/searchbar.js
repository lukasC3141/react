import React, { useState } from 'react'
import './searchbar.css'

const SearchBar = (props) => {

    // const searchValue = "the search value"
    const [searchValue, setSearchValue] = useState("")

    

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)

    }
    
    const handleClearClick = () => {
        setSearchValue("") 
    }

    const shouldDisplayButton = searchValue.length > 0

    const filteredProducts = props.searchItems.filter((product) => {
        return if (searchValue !== ""){
             product.includes(searchValue)
            }
        
    })

    return (
        <div>
            <input type="text" placeholder='search' value={searchValue} onChange={handleInputChange}></input>
            {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>} 

        <div>
            <ul>
            {filteredProducts.map((product) => {
                return <li key={product}>{product}</li>
            })}
        </ul>
        </div>

        </div>
    )
}

export default SearchBar