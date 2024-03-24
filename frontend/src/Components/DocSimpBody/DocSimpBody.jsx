import React, { useState } from 'react'
import './DocSimpBody.css'
import img from '../../assets/DocumentImage.jpg'
import InputFile from '../InputFile/InputFile'

function DocSimpBody() {

    const[doc, setDoc] = useState(null) 

    const handleSimplify = ()=>{
      //simplify document.
    }
    
  return (
    <div>
        <form className='ds-form'>
            <img className = 'ds-image' src={img}/>
            <div className='ds-file'>
              <InputFile file = {doc} callback={setDoc}/>
                <button onClick={handleSimplify}>Simplify</button>
            </div>
        </form>
    </div>
  )
}

export default DocSimpBody