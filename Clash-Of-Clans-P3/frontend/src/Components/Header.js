import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='nav'>
        <Link to='/'>
            <div>Header</div>
        </Link>
    </nav>
  )
}

export default Header