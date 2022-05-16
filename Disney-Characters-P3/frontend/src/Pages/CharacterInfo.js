import React from 'react'



function CharacterInfo(props) {
  console.log(props)
  
  const characterData = props.character
  console.log(characterData)

  return (
  <main className="character-list">
        {characterData ? characterData.data.map((info) => (         
            <div key={info._id} className="character">
                
                <img src={info.imageUrl} alt={info.name}/>
               
                <h3>{info.name}</h3>
          </div>
        )): 
        <h2>Loading ....</h2>}
        
    </main>
  )
}

export default CharacterInfo