import React, { useState }  from 'react'
import InputField from '../Components/InputField'
import { json, useNavigate } from 'react-router-dom'
import { validateRegisterDetails } from '../utils/Validator'
import { register } from '../utils/ApiServices'
import { toast } from 'react-toastify'

const Register = () => {
  
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleCreateAccount = async(e)=> {
    e.preventDefault();
    const validateResult = validateRegisterDetails(name, username, password)
    console.log(validateResult)

    if(validateResult.status)
    {
      const data = {name ,username ,password}
      const res = await register(data)
      if (res.success){
        navigate('/')
      }
      else {
        toast.error(success.message)
      }
    }
    else{
      toast.error(validateResult.message)
    }
  }

  const handleLogin = (e)=> {
    e.preventDefault();
    navigate('/login')
  }

  return (
  <div className='login-container'>
    <div className='left'>
      <h2 className='legaldocs logo'>Legal Support</h2>
      <div className='left-body-container'>
        <h1>Create Account!</h1>
        <div>
            <form className='form'>
              <div className='input-container'>
                <InputField type = {"text"} label = {"Name"} value = {name} setValue = {setName}/>
                <InputField type = {"text"} label = {"Username"} value = {username} setValue = {setUsername}/>
                <InputField type = {"password"} label = {"Password"} value = {password} setValue = {setPassword}/>
              </div>
              <div className='button-container'>
                <button className='form-button' onClick={handleCreateAccount}>Create your account.</button>
                <button className='form-secondary-button' onClick={handleLogin}>Already have an account ? Log in.</button>
              </div>
            </form>
        </div>
      </div>
    </div>
    <div className='right'></div>
  </div>
  )
}

export default Register
