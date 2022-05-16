import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function CharacterInfo(props) {
  console.log(props)
  const { id } = useParams()
  const character = props.character
  const oneCharacter = character.find(oneCharacter => oneCharacter._id === id)

  

  return (
    <div>CharacterInfo</div>
  )
}

export default CharacterInfo