import React from 'react'
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PlayerSearch from '../Pages/PlayerSearch';
import PlayerStats from '../Pages/PlayerStats';

function Main(props) {
    const [player, setPlayer] = useState(null)

    const URL = "https://api.clashofclans.com/v1/players/";
  return (
    <div>Main</div>
  )
}

export default Main