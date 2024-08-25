import React from 'react'
import { useNavigate } from 'react-router-dom'

const DocCard = (props) => {
    const {document} = props
    const navigate = useNavigate()
  return (
    <div className='doc-card' onClick={()=>{navigate(document.url)}}>
      <img className = 'image' src={document.img} />
      <p className='title'>{document.title}</p>
      <p className='sub-title'>{document.subtitle}</p>
    </div>
  )
}

export default DocCard
