import React from 'react'
import './Body.css'
import img1 from '../../assets/DocumentGeneration.jpg'
import img2 from '../../assets/DocumentImage.jpg'
import Card from '../Card/Card'

function Body() {

    const cards = [
                {   
                    title : 'Document Simplification',
                    content : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In tempora veniam non, laboriosam doloremque mollitia aliquid dolorem ab veritatis quia, nisi itaque omnis! Nemo assumenda possimus doloribus delectus ullam? Voluptatum?',
                    btn : 'Try it youself',
                    link : '/document-Simplification'
                },
                {   
                    title : 'Document Generation',
                    content : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In tempora veniam non, laboriosam doloremque mollitia aliquid dolorem ab veritatis quia, nisi itaque omnis! Nemo assumenda possimus doloribus delectus ullam? Voluptatum?',
                    btn : 'Try it youself',
                    link : '/document-generation'
                },
                {   
                    title : 'Expert Advice',
                    content : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In tempora veniam non, laboriosam doloremque mollitia aliquid dolorem ab veritatis quia, nisi itaque omnis! Nemo assumenda possimus doloribus delectus ullam? Voluptatum?',
                    btn : 'Coming Soon',
                    link : '/'
                },
            ]
  return (
    <>
        <div id ='body-container'>
            <img className = 'image' src={img1}/>
            <div id="tagline-container">
                <font id="tagline">
                    BUILD EFFORTLESSLY
                </font>
                <font id="sub-tagline">
                    We help you to build and simplify all your legal documents. We help you to grow your bussiness and save time.
                </font>
            </div>
            <img className = 'image' src={img2}/>
        </div>

        <div id="card-container">
            {cards.map((card ,index)=>(<Card key = {index} props = {card}/>))}
        </div>

        <div id="footer">
            <div>
                <p className="join">Join us on</p>
                <div className="links">
                    <a href="#">Instagram</a>&nbsp;&nbsp;
                    <a href="#">Facebook</a>&nbsp;&nbsp;
                    <a href="#">Twitter</a>&nbsp;&nbsp;
                </div>
            </div>
            <div>
                <p>Contact us on &nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; +91-8604538985 , +91-9695451286</p>
                <p>Mail us on &nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; vraj70404@gmail.com , 31906.csaiml@gmail.com</p>
            </div>
        </div>
    </>
  )
}

export default Body