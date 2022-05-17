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

  const mappingFilms = character.films.map((film) => {
    return (
      <li>{film}</li>
    )
  })
  return (
    <main>
      <div>     
        <h2 className='text-center display-2'>Name: {character.name}</h2>
        <img src={character.imageUrl} className="" alt={character.name}/>
        <h4 className="text-center" >Films: 
        <ul>{mappingFilms}</ul></h4>
        <h4 className="text-center" >Short Films: {character.shortFilms}</h4>
        <h4 className="text-center" >TV Shows: {character.tvShows}</h4>
        <h4 className="text-center" >Video Games: {character.videoGames}</h4>
        <h4 className="text-center" >Park Attractions: {character.parkAttractions}</h4>
        <h4 className="text-center" >Allies: {character.allies}</h4>
        <h4 className="text-center" >Enemies: {character.enemies}</h4>
      </div>        
    </main>
  )
}

export default CharacterInfo