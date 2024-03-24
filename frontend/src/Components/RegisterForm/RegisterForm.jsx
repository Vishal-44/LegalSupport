import React, { useState } from 'react'
import './RegisterForm.css';

function RegisterForm({prop}) {

  const [name, setName]=useState('')
  const [username, setUsername]=useState('')
  const [email, setEmail]=useState('')
  const [phone, setPhone]=useState('')
  const [password, setPassword]=useState('')
  const [cpassword, setCpassword]=useState('')

  const handleName = (e)=>{setName(e.target.value)}
  const handleUsername = (e)=>{setUsername(e.target.value)}
  const handleEmail = (e)=>{setEmail(e.target.value)}
  const handlePhone = (e)=>{setPhone(e.target.value)}
  const handlePassword = (e)=>{setPassword(e.target.value)}
  const handleCpassword = (e)=>{setCpassword(e.target.value)}

  return (
    <div id = 'Register-form-container'>
            <p id= 'heading'>Register</p>
            <p>Already have an account? <button onClick={()=>prop(true)}>Login</button></p>
            <form>
                <div className='field'>Name &nbsp;&nbsp;&nbsp;&nbsp;<input type='text' value={name} onChange={handleName}/></div>
                <div className='field'>Username &nbsp;&nbsp;&nbsp;&nbsp;<input type='text' value={username} onChange={handleUsername}/></div>
                <div className='field'>Email&nbsp;&nbsp;&nbsp;&nbsp;<input type='email' value={email} onChange={handleEmail}/></div>
                <div className='field'>Phone &nbsp;&nbsp;&nbsp;&nbsp;<input type='text'maxLength='10' value={phone} onChange={handlePhone}/></div>
                <div className='field'>Create Password &nbsp;&nbsp;&nbsp;&nbsp;<input type='password' value={password} onChange={handlePassword}/></div>
                <div className='field'>Confirm Password &nbsp;&nbsp;&nbsp;&nbsp;<input type='password' value={cpassword} onChange={handleCpassword}/></div>
            </form>
            <button id = 'register'>Register</button>
    </div>
  )
}

export default RegisterForm