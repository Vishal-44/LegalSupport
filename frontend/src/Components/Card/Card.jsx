import React, { useEffect, useState } from 'react'
import {useNavigate} from'react-router-dom'
import './Card.css'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Card({props}) {
  const [loggedIn , setLoggedIn] = useState(true)
  const navigate = useNavigate()

  useEffect(()=>{/*check for cookie and set loggIn useState accordingly*/},[])

  const handleBtnClick = () =>{
    if(loggedIn) {
      if(props.link !=='/')
        navigate(props.link)
      else
        toast.warning('Coming soon...', {position : toast.POSITION.BOTTOM_RIGHT});
    }
    else{
      toast.error("You are not logged in.", {position : toast.POSITION.BOTTOM_RIGHT});
    }
  }

  return (
      <div className="card">
          <font className="title">
            {props.title}
          </font>
          <p className="description">
            {props.content}
          </p>
          <button onClick={handleBtnClick}>{props.btn}</button>
      </div>
  )
}

export default Card