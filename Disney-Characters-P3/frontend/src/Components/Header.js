import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <main className='text-center display-1'>
        <Link to='/'>
            <div>Disney Characters</div>
        </Link>
    </main>
  )
}

export default Header