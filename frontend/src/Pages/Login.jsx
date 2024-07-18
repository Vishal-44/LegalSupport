import React, { useState } from 'react'
import InputField from '../Components/InputField'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e)=> {
    e.preventDefault();
    console.log("login clicked ",username,"\n",password )
  }

  const handleCreateAccount = (e)=> {
    e.preventDefault();
    navigate('/register')
  }
  return (
    <div className='login-container'>
      <div className='left'>
        <h2 className='legaldocs logo'>Legal Support</h2>
        <div className='left-body-container'>
          <h1>Welcome back!</h1>
          <div>
              <form className='form'>
                <div className='input-container'>
                  <InputField type = {"text"} label = {"Username"} value = {username} setValue = {setUsername}/>
                  <InputField type = {"password"} label = {"Password"} value = {password} setValue = {setPassword}/>
                </div>
                <div className='button-container'>
                  <button className='form-button' onClick={handleLogin}>Log in to your account.</button>
                  <button className='form-secondary-button' onClick={handleCreateAccount}>New User ? Create account.</button>
                </div>
              </form>
          </div>
        </div>
      </div>
      <div className='right'></div>
    </div>
          
  )
}

export default Login
