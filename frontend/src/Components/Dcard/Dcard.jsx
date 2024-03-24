import React from 'react'
import './Dcard.css'

function Dcard({category , list }) {

  return (
    <div className="d-card">
            <div className="d-category">
                <font style = {{opacity : '100%'}}>{category}</font>
            </div>
            <div className="d-list">
                <ol>
                    {list.map((item , index)=>(<li key={index}>{item}</li>))}
                </ol>
            </div>
        </div>
  )
}

export default Dcard