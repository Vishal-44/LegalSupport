import React from 'react'
import Header from '../Components/Header/Header'
import FBox from '../Components/FBox/FBox'
import HeadingWithBackground from '../Components/HeadingWithBackground/HeadingWithBackground'

function Features() {

  const menu = [
          {
            title : 'Document Simplification',
          desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad aliquam possimus voluptatum iste placeat, veritatis amet quam repudiandae, obcaecati eveniet totam accusantium quaerat officia voluptate inventore? Similique, aliquid provident'
          },
          {
            title : 'Document Genertaion',
            desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad aliquam possimus voluptatum iste placeat, veritatis amet quam repudiandae, obcaecati eveniet totam accusantium quaerat officia voluptate inventore? Similique, aliquid provident'
          },
          {
            title : 'Expert Advice',
            desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad aliquam possimus voluptatum iste placeat, veritatis amet quam repudiandae, obcaecati eveniet totam accusantium quaerat officia voluptate inventore? Similique, aliquid provident'
          }
      ]

  return (
    <div>
        <Header/>
        <div>
          <HeadingWithBackground title = "Features"/>
          <div className="f-menu" style = {{ display : 'flex' , gap : '4em' , padding : '4em 6em'}}>
            {menu.map((item , index)=>(<FBox key = {index}  item = {item}/>))}
          </div>
        </div>
    </div>
  )
}

export default Features