import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function CharacterInfo() {
  // console.log(props.character)
  
  // const characterData = props.character
  // console.log(characterData)
  const [character, setCharacter] = useState(null);

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

  const mappingFilms = character ? character.films.map((film, index) => {
    return (
      <div key={index}>
        <li>{film}</li>
      </div>
    )})
  : <h2>Loading...</h2>

  const mappingShortFilms = character ? character.shortFilms.map((shortFilms, index) => {
    return (
      <div key={index}>
        <li>{shortFilms}</li>
      </div>
    )})
  : <h2>Loading...</h2>

  const mappingTVShows = character ? character.tvShows.map((tvShows, index) => {
    return (
      <div key={index}>
        <li>{tvShows}</li>
      </div>
    )})
  : <h2>Loading...</h2>

  const mappingVideoGames = character ? character.videoGames.map((videoGames, index) => {
    return (
      <div key={index}>
        <li>{videoGames}</li>
      </div>
    )})
  : <h2>Loading...</h2>

  const mappingParkAttractions = character ? character.parkAttractions.map((parkAttractions, index) => {
    return (
      <div key={index}>
        <li>{parkAttractions}</li>
      </div>
    )})
  : <h2>Loading...</h2>
  
  const mappingAllies = character ? character.allies.map((allies, index) => {
    return (
      <div key={index}>
        <li>{allies}</li>
      </div>
    )})
  : <h2>Loading...</h2>

  const mappingEnemies = character ? character.enemies.map((enemies, index) => {
    return (
      <div key={index}>
        <li>{enemies}</li>
      </div>
    )})
  : <h2>Loading...</h2>
 



  return (
    <main className='App-show'> {character ? 
    
      <div className='text-center'>     
        <h2 className='display-2'>Name: {character.name}</h2>
        <img src={character.imageUrl} className="rounded hover-shadow" alt={character.name}/>
        <h4 className="display-6" >Films: <ul className='fs-5 text'>{mappingFilms}</ul></h4>
        <h4 className="display-6" >Short Films: <ul className='fs-5 text'>{mappingShortFilms}</ul></h4>
        <h4 className="display-6" >TV Shows: <ul className='fs-5 text'>{mappingTVShows}</ul></h4>
        <h4 className="display-6" >Video Games: <ul className='fs-5 text'>{mappingVideoGames}</ul></h4>
        <h4 className="display-6" >Park Attractions: <ul className='fs-5 text'>{mappingParkAttractions}</ul></h4>
        <h4 className="display-6" >Allies: <ul className='fs-5 text'>{mappingAllies}</ul></h4>
        <h4 className="display-6" >Enemies: <ul className='fs-5 text'>{mappingEnemies}</ul></h4>
      </div>  

    : null}
    </main>
  )
}

export default CharacterInfo