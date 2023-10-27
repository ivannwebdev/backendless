import React from 'react'
import { routes } from '../router'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className='header'>
      <nav className='nav'>
        {
          routes.map(({ title, path }) =>
            <div
              className='nav-item'
              onClick={() => navigate(path)} key={path}
            >
              {title}
            </div>
          )
        }
      </nav>
    </header>
  )

}

export default Header
