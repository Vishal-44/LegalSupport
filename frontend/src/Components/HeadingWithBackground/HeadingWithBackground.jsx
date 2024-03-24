import React from 'react'
import './HeadingWithBackground.css'

function HeadingWithBackground({title}) {
  return (
    <div className="f-background">
        <p className='f-heading'>{title}</p>
    </div>
  )
}

export default HeadingWithBackground