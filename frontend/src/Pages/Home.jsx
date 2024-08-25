import React from 'react'
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
    }


  return (
    <div>
        <Header/>
        <div className='tagline-section'>
            <p className='tagline'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quasi fugiat quae deleniti, distinctio quisquam voluptatibu
            </p>
            
            <p className=' sub-tagline'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quasi fugiat quae deleniti, distinctio quisquam voluptatibu 
            </p> 
        </div>

        <div className = "f-section">
            <img className = 'f-image'src={img1} alt="image" />
            <div>
                <p className='f-title'>Document Generation</p>
                <p className='f-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis necessitatibus eveniet porro provident quisquam libero odio placeat eum, maiores, illo nam, incidunt eaque excepturi perspiciatis non repudiandae iusto quia sapiente.</p>
                <p className='cta-button' onClick={handleDocumentGeneration}>Try it yourself</p>
            </div>
        </div>

        <div className = "f-section">
            <div>
                <p className='f-title'>Document Simplification</p>
                <p className='f-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis necessitatibus eveniet porro provident quisquam libero odio placeat eum, maiores, illo nam, incidunt eaque excepturi perspiciatis non repudiandae iusto quia sapiente.</p>
                <p className='cta-button' onClick={handleDocumentSimplification}>Try it yourself</p>
            </div>

            <img className = 'f-image'src={img1} alt="image" />
        </div>

        {/* <div className = "f-section">
            <img className = 'f-image'src={img1} alt="image" />
            <div>
                <p className='f-title'>Document Generation</p>
                <p className='f-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis necessitatibus eveniet porro provident quisquam libero odio placeat eum, maiores, illo nam, incidunt eaque excepturi perspiciatis non repudiandae iusto quia sapiente.</p>
                <p className='cta-button'>Try it</p>
            </div>
        </div> */}
        
    </div>
  )
}

export default Home
