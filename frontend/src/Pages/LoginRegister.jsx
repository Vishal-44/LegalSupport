import React from 'react'
import { useState } from 'react'
import LoginForm from '../Components/LoginForm/LoginForm'
import RegisterForm from '../Components/RegisterForm/RegisterForm'


function LoginRegister() {
    const [isLogin , setIsLogin] = useState(true)
    return (
        <>
        <div style = {{display :'grid' , placeItems : 'center' , height : '100vh',backgroundColor :'rgb(235, 210, 210)'}}>
            {isLogin ? <LoginForm prop = {setIsLogin}/> : <RegisterForm prop = {setIsLogin}/> }
        </div>
        </>
    )


}

export default LoginRegister