import React, { useState } from 'react'
import './LoginForm.css';

function LoginForm({prop}) {
  
const[username, setUsername] = useState("");
const[password, setPassword] = useState("");

const handleUsername = (e)=>{
    console.log(e.target.value)
    setUsername(e.target.value)
  }

const handlePassword = (e)=>{
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  return (
    <div id = 'Login-form-container'>
            <p id= 'heading'>Login</p>
            <p>New to our website? <button onClick={()=>prop(false)}>Register</button></p>
            <form>
                
                <div className='field'> Username <input type='text' onChange={handleUsername} value={username}></input></div>
                <div className='field'> Password <input type='password' onChange={handlePassword} value={password}></input></div>
            </form>
            <button id = 'login'>Login</button>
    </div>
  )
}

export default LoginForm