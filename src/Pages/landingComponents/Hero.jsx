import React from 'react'
import '../Css/Hero.css';

const Hero = () => {

  return (

    <>
    
        <div className='Hero'>
            <div className='hero_top'>
                <div className='hero_logo'></div>
                <div className='hero_links'>
                    <p>About Us</p>
                    <p>BCA 2024</p>
                    <p>Worship with US</p>
                </div>
            </div>
            <div className='hero_bottom'>
                <div className='hero_bottom_left'></div>
                <div className='hero_bottom_right'>
                    <div className='hero_date'>
                        <div className='hero_date_logo'></div>
                        <p>Saturday 24th August,2024</p>
                    </div>
                </div>
            </div>
        </div>
    
    </>


  )
}

export default Hero
