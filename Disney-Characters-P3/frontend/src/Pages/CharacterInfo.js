import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function CharacterInfo() {
  // console.log(props.character)
  
  // const characterData = props.character
  // console.log(characterData)
  const [character, setCharacter] = useState({});

  const { id } = useParams()
  // console.log(params)

  const fetchDetails = () => {
    fetch(`https://api.disneyapi.dev/characters/${id}`)
    .then(res => res.json())
    .then (data => setCharacter(data))
  }

  useEffect(() => {
    fetchDetails()
  }, [])


  return (
    <main>
      <div>     
        <h2>Name: {character.name}</h2>
        <img src={character.imageUrl} alt={character.name}/>
        <h4>Films: {character.films}</h4>
        <h4>Short Films: {character.shortFilms}</h4>
        <h4>TV Shows: {character.tvShows}</h4>
        <h4>Video Games: {character.videoGames}</h4>
        <h4>Park Attractions: {character.parkAttractions}</h4>
        <h4>Allies: {character.allies}</h4>
        <h4>Enemies: {character.enemies}</h4>
      </div>        
    </main>
  )
}

export default CharacterInfo