//Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'
import Character from './components/Character'
import styled from 'styled-components'
import Header from './components/Header'

//Styled App
const StyledApp = styled.div`
    div {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      margin: 2.5%;
    }
`

//App Component
const App = () => {
  //Set State
  const [allCharacters, setAllCharacters] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filtered, setFiltered] = useState(allCharacters)

  //Fetch Characters from API
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setAllCharacters(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  //Set Filtered Characters
  useEffect(() => {
    setFiltered(allCharacters.filter(character => {
      return character.name === searchTerm || character.species === searchTerm
      }))
  }, [searchTerm, allCharacters])

  //Return App
  return (
      <StyledApp>
      <Header />
      <div>
      {
        allCharacters.map(character => 
          <Character characterInfo={character} key={character.id}/>
        )
      }
      </div>
    </StyledApp>
  )
}

//Export App
export default App;
