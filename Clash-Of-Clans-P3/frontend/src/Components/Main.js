import React from 'react'
import { Route, Routes } from "react-router-dom"
import Character from '../Pages/Character'
import CharacterInfo from '../Pages/CharacterInfo'


function Main(props) {
    

  return (
    <main>
        <Routes>
            <Route path='/' element={<Character />} />
            <Route path='/character/:id' element={<CharacterInfo />} />
        </Routes>
    </main>
  )
}

export default Main