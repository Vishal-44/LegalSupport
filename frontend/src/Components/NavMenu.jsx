import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavMenu = () => {

  const navigate = useNavigate();

  const goToRegister = () => {
      navigate('/register')
  }

  const goToLogin = () => {
      navigate('/login')
  }

  return (
      <div className='nav-menu'>
        <button className='secondary-button' onClick={goToRegister}> Register </button>
        <button className = 'secondary-button'onClick={goToLogin}> Login </button>
      </div>
  )
}

export default NavMenu
