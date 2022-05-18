import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function CharacterInfo(props) {
  
  const infoImage = "https://i.pinimg.com/originals/22/6f/fe/226ffe282cdc507a9516219f827111fb.jpg"
  if (props.bg !== infoImage) {
    props.setBG(infoImage)
  }
  
  const [character, setCharacter] = useState(null);

  const { id } = useParams()
  

  const fetchDetails = () => {
    fetch(`https://api.disneyapi.dev/characters/${id}`)
    .then(res => res.json())
    .then (data => {
      setCharacter(data)
    })
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
    <main className='show'> {character ? 
    
      <div className='text-center'>     
        <h2 className='display-2 text-danger'>Name: {character.name}</h2>
        <img src={character.imageUrl} className="rounded hover-shadow" alt={character.name}/>
        <h4 className="display-5 text-danger" >Films: <ul className='fs-4 text text-info'>{mappingFilms}</ul></h4>
        <h4 className="display-5 text-danger" >Short Films: <ul className='fs-4 text text-info'>{mappingShortFilms}</ul></h4>
        <h4 className="display-5 text-danger" >TV Shows: <ul className='fs-4 text text-info'>{mappingTVShows}</ul></h4>
        <h4 className="display-5 text-danger" >Video Games: <ul className='fs-4 text text-info'>{mappingVideoGames}</ul></h4>
        <h4 className="display-5 text-danger" >Park Attractions: <ul className='fs-4 text text-info'>{mappingParkAttractions}</ul></h4>
        <h4 className="display-5 text-danger" >Allies: <ul className='fs-4 text text-info'>{mappingAllies}</ul></h4>
        <h4 className="display-5 text-danger" >Enemies: <ul className='fs-4 text text-info'>{mappingEnemies}</ul></h4>
      </div>  

    : null}
    </main>
  )
}

export default CharacterInfo