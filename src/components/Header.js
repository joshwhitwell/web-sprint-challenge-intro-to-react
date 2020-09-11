//Imports
import React from 'react'
import styled from 'styled-components'

//Header Component
export default function Header() {
    return (
        <div>
             <h1>Rick & Morty Characters</h1>
             <form>
                <input
                    type="text"
                    placeholder='Search'
                    // onChange={onChange} //Sets date slice to input
                    // value={inputValue}//Sets input field value to date slice
                />
            </form>
        </div>
    )
}