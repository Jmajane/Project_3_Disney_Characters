import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ReactPaginate from 'react-paginate'

function Character(props) {
    const [character, setCharacter] = useState(null)

    const charPicture = "https://wallpaperboat.com/wp-content/uploads/2019/05/disney-christmas-3.jpg"
  if (props.bg !== charPicture) {
    props.setBG(charPicture)
  }
  
    useEffect(() => {
        const getCharacters = async () => {
          const res = await fetch(
            `https://api.disneyapi.dev/characters?page1`
          );
          const data = await res.json();
          setCharacter(data)
        };
        
        getCharacters();
    }, [])

    const fetchDisney = async (currentPage) => {
      const res = await fetch(
        `https://api.disneyapi.dev/characters?page=${currentPage}`
      );
      const data = await res.json();
      return data
    }
    

    const handlePageClick = async (data) => {

      let currentPage = data.selected + 1;
      const characterFromServer = await fetchDisney(currentPage);

      setCharacter(characterFromServer)
    }

  return (
    <div className="container">
      <div className="row">
      {character ? character.data.map((char) => {
        return (
        <div key={char._id} className="col" >
          <div className="">
            <div className="images">
              
              <Link to={`/${char._id}`}>
                <img src={char.imageUrl} 
                className="" 
                alt={char.name}/>
              </Link>
             
                
              <h5 className="card-title text-center h2 text-info">Name: {char.name}</h5>
                
            </div>
          </div>
        </div>
    )}):
      <h2>Loading...</h2>}
      </div>
    

        
      <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={149}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={'pagination justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
      />
      
       
    </div>
  )
}
    
export default Character