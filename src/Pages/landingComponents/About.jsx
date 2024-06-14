import React from 'react'
import '../Css/About.css'

const About = () => {
  return (
    <>
    
        <div className='about'>
            <h1>About NGC-BCF</h1>
            <div className='about_context'>
                <div className='about_img'></div>
                <div className='about_text'>
                    <p>The NGC Business and Career Fair is dedicated to establishing a vibrant forum where believers thrive in business and career pursuits, offering valuable insights, strategies, and networking for growth and collaboration.</p>
                    <h3>Vision</h3>
                    <p>To raise NGC.<br/>To raise Business & Career fair in every Nations, every Generations and every system.</p>
                    <h3>Mission</h3>
                    <p>Our mission as NGC is to transform lives and communities by touching, teaching and
                    training people to love, to live and to lead like Jesus.</p>
                </div>
            </div>
        </div>
        <div className='about_business'>
          <div className='about_business_text'>NGC Business and Career fair is an outreach dedicated to Kingdom influencers
          and establishment in the marketplace through entrepreneurship and career excellence.</div>
        </div>
    
    </>
  )
}

export default About
