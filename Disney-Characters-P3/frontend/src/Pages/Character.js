import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ReactPaginate from 'react-paginate'

function Character() {
    const [character, setCharacter] = useState(null)


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
      <div className="row m-2">
      {character ? character.data.map((char) => {
        return (
        <div key={char._id} className="col-sm-6 col-md-4 v my-2" >
          <div className="">
          <div className="" style={{ minHeight: 350, maxHeight: 350 }}>
              
              <Link to={`/${char._id}`}>
                <img src={char.imageUrl} 
                className="card-img-top" 
                alt={char.name}/>
              </Link>

              <h5 className="card-title text-center h2">Name: {char.name}</h5>
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