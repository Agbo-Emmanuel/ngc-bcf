import React from 'react'
import '../Css/Hero.css';
import { BiCalendarEvent } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";


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
                        <div className='hero_date_logo'><BiCalendarEvent style={{width: "20px", height: "20px", color: "white"}}/></div>
                        <p>Saturday 24th August,2024</p>
                    </div>
                    <h1 className='hero_large_text'>NGC Business & Career AFFAIR 2024</h1>
                    <div className='hero_date'>
                        <div className='hero_date_logo'><IoLocationSharp style={{width: "20px", height: "20px", color: "white"}} /></div>
                        <p>Solution Arena. 156, Ikorodu Road, Onipanu Bus Stop, Lagos.</p>
                    </div>
                </div>
            </div>
        </div>
    
    </>


  )
}

export default Hero
