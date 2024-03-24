import React from 'react'
import './FBox.css'

function FBox({item}) {
  return (
    <div className="F-box">
        <p>{item.title}</p>
        <p className='f-desc'> {item.desc}</p>
      </div>
  )
}

export default FBox