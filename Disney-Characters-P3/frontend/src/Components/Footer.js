import React from 'react'
import { Link } from "react-router-dom"



function Footer() {
    

  return (
    <main className='text-center'>
      <div className='footer'>
          <div className="display-5 text-success bg-info">
          <h3>Developed By:</h3>
          <h5 className="text-primary"> Jordan A Majane</h5>
          <a href='https://github.com/Jmajane?tab=repositories' target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href='https://www.linkedin.com/in/jordan-majane/' target="_blank" rel="noopener noreferrer">Linkedin</a>  
          <Link to="/about">
            <div>About</div>
          </Link>        
        </div>
      </div>
    </main>
  )
}

export default Footer