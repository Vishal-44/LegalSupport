import React, { useState } from 'react'
import Header from '../Components/Header'
import img1 from '../assets/DGen.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    const handleDocumentGeneration = () => {
        console.log("Document generation try button clicked.")
        navigate('/document-generation')
    }

    const handleDocumentSimplification = () => {
        console.log("Document simplification try button clicked.")
        navigate('/document-simplification')
    }


  return (
    <div>
        <Header/>
        <div className='tagline-section'>
            <p className='tagline'>
            Revolutionize Your Legal Workflow: Instantly Generate, Customize, and Summarize Documents with Unmatched Ease.
            </p>
            
            <p className=' sub-tagline'>
                This headline captures the transformative impact of your project and highlights the key features in a dynamic way.
            </p> 
        </div>

        <div className = "f-section">
            <div className='f-img-container'>
                <img className = 'f-image'src={img1} alt="image" />
            </div>
            <div>
                <p className='f-title'>Effortless Legal Document Generation</p>
                <p className='f-desc'>Transform the way you create legal documents with our intuitive platform. Choose from a wide range of expertly crafted templates, customize them to your needs, and generate professional-grade documents in minutes. Whether you're drafting contracts, agreements, or other legal forms, our tool ensures accuracy and efficiency every step of the way. Simply input your details, review the content, and download your finalized document. It's fast, easy, and designed to meet all your legal needs with precision.</p>
                <p className='cta-button' onClick={handleDocumentGeneration}>Try it yourself</p>
            </div>
        </div>

        <div className = "f-section">
            <div>
                <p className='f-title'>Simplify Complex Legal Documents</p>
                <p className='f-desc'>Understanding legal jargon can be challenging, but our document simplification tool makes it easy. With just a few clicks, transform dense legal language into clear, straightforward summaries. Our advanced algorithms break down complicated terms and clauses, providing you with an accessible version of your document that’s easy to read and understand. Whether you’re reviewing contracts, agreements, or legal notices, our tool ensures that you grasp the key points quickly and confidently. Simplify your legal documents and make informed decisions with ease.</p>
                <p className='cta-button' onClick={handleDocumentSimplification}>Try it yourself</p>
            </div>
            
            <div className='f-img-container'>
                <img className = 'f-image'src={img1} alt="image" />
            </div>
        </div>
        
    </div>
  )
}

export default Home
