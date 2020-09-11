//Imports
import React from 'react'
import styled from 'styled-components'

//Styled Character Card
const StyledCharacter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    margin: 2.5%;
    padding: 2.5%;
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 10px;

    img {
        width: 300px;
        border-radius: 10px;
    }

    div.info {
        width: 90%;
        display: block;
        margin-top: 2.5%;
        padding: 2.5%;
        border: 1px solid #d2d2d2;
        box-shadow: 0px 1px 6px -2px #807f7f;
        border-radius: 10px;
    }
`

// Write your Character component here
export default function Character(props) {
    const { name, status, species, gender, origin, image, episode } = props.characterInfo

    //Return Character
    return (
        <StyledCharacter>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <div className='info'>
                <p><span>Species:</span> {species}</p>
                <p><span>Gender:</span> {gender}</p>
                <p><span>Status:</span> {status}</p>
                <p><span>Origin:</span> {origin.name}</p>
                <p><span>Appearances:</span> {episode.length}</p>
            </div>
        </StyledCharacter>
    )
}