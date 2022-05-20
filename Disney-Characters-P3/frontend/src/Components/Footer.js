import React from 'react'
import { Link } from "react-router-dom"
import GitHub from '../Pictures/GitHub.png'
import Linkedin from '../Pictures/Linkedin.webp'


function Footer(props) {

  

  return (
    <main className='text-center'>
      <div className='footer'>
          <div className="display-5 text-success bg-info">
          <h3>Developed By:</h3>
          <h5 className="text-primary"> Jordan A Majane</h5>
          <a href='https://github.com/Jmajane?tab=repositories'>
            <img className="GHImg" src={GitHub} alt="Github"/>
          </a>
          <a href='https://www.linkedin.com/in/jordan-majane/'>
            <img className="LinkedinImg" src={Linkedin} alt="Linkedin"/>
          </a>  
          <Link to="/about">
            <div>About</div>
          </Link>        
        </div>
      </div>
    </main>
  )
}

export default Footer