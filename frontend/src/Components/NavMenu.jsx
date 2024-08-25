import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserDetails, logout } from '../utils/ApiServices';

const NavMenu = () => {

  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({status : false, username : ""});

  useEffect(()=>{
      const fechData = async () => {
        const res = await getUserDetails()
        if(!res.success){
          setUserDetails((prevState) => ({...prevState, status : res.success, username : ""}))
        }
        else{
          setUserDetails((prevState)=>({...prevState, status : res.success, username : res.username}))
        }
    }
    fechData()
  },[])

  const goToRegister = () => {
      navigate('/register')
  }

  const goToLogin = () => {
      navigate('/login')
  }

  const handleLogOut = async() => {
    const res = await logout()
    console.log(res)
    if(res.success) {
      setUserDetails((prevState)=>({...prevState, status : false, usename : ""}))
    }
  }

  return (
      <div className='nav-menu'>
      {!userDetails.status && <button className='secondary-button' onClick={goToRegister}> Register </button>}
      {!userDetails.status && <button className = 'secondary-button'onClick={goToLogin}> Login </button>}
      {userDetails.status && <p className='sub-tagline'>Welcome, {userDetails.username}</p>}
      {userDetails.status && <button className = 'secondary-button'onClick={handleLogOut}> Logout </button>}

      </div>
  )
}

export default NavMenu
