import React from 'react'
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PlayerSearch from '../Pages/PlayerSearch';
import PlayerStats from '../Pages/PlayerStats';

require('dotenv').config()

function Main(props) {
    const [player, setPlayer] = useState(null)

    const URL = "https://api.clashofclans.com/v1/players/";

    const key = process.env.API_KEY

    const getPlayer = () => {
        fetch(URL)
        .then(response => response.json())
        .then((result) => setPlayer(result))
    }

    const createPlayer = async (onePlayer) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(onePlayer)
        });
        getPlayer();
    };

    const updatePlayer = async (onePlayer, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
        })
        getPlayer()
    }

    const deletePeople = async (id) => {
        await fetch(URL + id, {
            method: "delete",
        })
        getPlayer()
    }

    useEffect(() => getPlayer(), []);



  return (
    <main>
        <Routes>
            <Route path='/' element={<PlayerSearch 
            player={player}
            createPlayer={createPlayer} />
            } />
            <Route path='/player/:id' element={<PlayerStats 
            player={player}
            updatePlayer={updatePlayer}
            deletePeople={deletePeople} />
            } />
        </Routes>
    </main>
  )
}

export default Main