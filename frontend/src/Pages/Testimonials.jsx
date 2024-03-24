import React from 'react'
import Header from '../Components/Header/Header'
import TBox from '../Components/TBox/TBox'

function Testimonials() {

  const testimonial = [
    {
      name: 'Name',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad aliquam possimus voluptatum iste placeat, veritatis amet quam repudiandae, obcaecati eveniet totam accusantium quaerat officia voluptate inventore? Similique, aliquid provident'
    },
    {
      name: 'Name',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad aliquam possimus voluptatum iste placeat, veritatis amet quam repudiandae, obcaecati eveniet totam accusantium quaerat officia voluptate inventore? Similique, aliquid provident'
    },
    {
      name: 'Name',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad aliquam possimus voluptatum iste placeat, veritatis amet quam repudiandae, obcaecati eveniet totam accusantium quaerat officia voluptate inventore? Similique, aliquid provident'
    },
    {
      name: 'Name',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad aliquam possimus voluptatum iste placeat, veritatis amet quam repudiandae, obcaecati eveniet totam accusantium quaerat officia voluptate inventore? Similique, aliquid provident'
    },
    {
      name: 'Name',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad aliquam possimus voluptatum iste placeat, veritatis amet quam repudiandae, obcaecati eveniet totam accusantium quaerat officia voluptate inventore? Similique, aliquid provident'
    },
    {
      name: 'Name',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad aliquam possimus voluptatum iste placeat, veritatis amet quam repudiandae, obcaecati eveniet totam accusantium quaerat officia voluptate inventore? Similique, aliquid provident'
    },
    {
      name: 'Name',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad aliquam possimus voluptatum iste placeat, veritatis amet quam repudiandae, obcaecati eveniet totam accusantium quaerat officia voluptate inventore? Similique, aliquid provident'
    },
    {
      name: 'Name',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad aliquam possimus voluptatum iste placeat, veritatis amet quam repudiandae, obcaecati eveniet totam accusantium quaerat officia voluptate inventore? Similique, aliquid provident'
    }
  ]

  return (
    <div>
        <Header/>
        <br/>
        <h1 align = 'center'>TESTIMONIALS</h1>
        <div className="t-group" style={{display: 'flex', justifyContent:'center', alignContent: 'center', gap: '2em', padding : '2em', flexWrap : 'wrap'}}>
        {testimonial.map((item, index)=>(<TBox key = {index} item = {item}/>))}
        </div>
    </div>
  )
}

export default Testimonials