import React from 'react'
import Header from '../Components/Header'
import img1 from '../assets/DGen.jpg';

const Home = () => {
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
                <p className='cta-button'>Try it</p>
            </div>
        </div>

        <div className = "f-section">
            <div>
                <p className='f-title'>Document Generation</p>
                <p className='f-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis necessitatibus eveniet porro provident quisquam libero odio placeat eum, maiores, illo nam, incidunt eaque excepturi perspiciatis non repudiandae iusto quia sapiente.</p>
                <p className='cta-button'>Try it</p>
            </div>

            <img className = 'f-image'src={img1} alt="image" />
        </div>

        <div className = "f-section">
            <img className = 'f-image'src={img1} alt="image" />
            <div>
                <p className='f-title'>Document Generation</p>
                <p className='f-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis necessitatibus eveniet porro provident quisquam libero odio placeat eum, maiores, illo nam, incidunt eaque excepturi perspiciatis non repudiandae iusto quia sapiente.</p>
                <p className='cta-button'>Try it</p>
            </div>
        </div>
        
    </div>
  )
}

export default Home
