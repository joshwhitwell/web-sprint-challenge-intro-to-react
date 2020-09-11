//Imports
import React, { useState } from 'react'
import styled from 'styled-components'


//Styled Header
const StyledHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    input {
        border-color: dodgerblue;
        border-radius: 10px;
        outline: none;
    }
`

//Header Component
export default function Header(props) {
    const { searchTerm, setSearchTerm } = props

    const onChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <StyledHeader>
             <h1>Rick & Morty Characters</h1>
             <form>
                <input
                    type="text"
                    placeholder='Search'
                    onChange={onChange}
                    value={searchTerm}
                />
            </form>
        </StyledHeader>
    )
}