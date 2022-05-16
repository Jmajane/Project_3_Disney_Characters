import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Character(props) {
    const [character, setCharacter] = useState(null)

    const URL = "https://api.disneyapi.dev/characters";

    useEffect(() => {
        axios.get( 
          URL
        ).then(res => setCharacter(res.data))
        .catch((error) => {
            console.log(error)
        })

    }, [])

  return (
    <main>
        {character ? character.data.map(char => (
            <div key={char._id} className="character">
                <Link to={`/character/${char._id}`}>
                <img src={char.imageUrl} alt={char.name}/>
                <h3>{char.name}</h3>
                </Link>
            </div>
        )): 
        <h2>Loading ....</h2>}
    </main>
  )
}
    
export default Character