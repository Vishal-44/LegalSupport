import React from 'react'

const InputField = (props) => {
    const {value, setValue, label, type} = props;
  return (
    <div className = 'input-field'>
      <label htmlFor="username" className='label'>{label}</label>
      <input className='input' type={type} name='usename' value = {value} onChange = {(e)=>setValue(()=> (e.target.value))} autoComplete='off'/>
    </div>
  )
}

export default InputField
