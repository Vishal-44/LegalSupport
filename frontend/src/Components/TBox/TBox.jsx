import React from 'react'
import './TBox.css'

function TBox({item}) {
  return (
    <div className='t-box'>
        <p className='t-name'>{item.name}</p>
        <p className='t-message'>{item.message}</p>

    </div>
  )
}

export default TBox