import React, { useEffect, useState } from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'

function Header() {

  const[loggedIn, setLoggedIn] = useState(false)

    useEffect( ()=>{/*check for cookie and set loggIn useState accordingly*/},[])
  return (
    <div id = 'header-container'>
        <font id="appname">Legal Doc Support</font>
        <span>
            <ul id="navbar">
                <NavLink to = '/'><li className='nav-items'>Home</li></NavLink>
                <NavLink to = '/features'><li className='nav-items'>Features</li></NavLink>
                <NavLink to = '/testimonials'><li className='nav-items'>Testimonials</li></NavLink>
                <NavLink to = '/blog'><li className='nav-items'>Blog</li></NavLink>

                {loggedIn?
                  <li className='nav-items'>Username</li>:
                  <NavLink to = '/login-register'><li className='nav-items'>Login/Register</li></NavLink>}
            </ul>
        </span>
    </div>
  )
}

export default Header