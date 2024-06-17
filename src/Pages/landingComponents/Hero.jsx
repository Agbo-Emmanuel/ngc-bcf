import React from 'react'
import '../Css/Hero.css';
import { BiCalendarEvent } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ScrollToAboutUs, ScrollToBCA, ScrollToWorshipWithUs } from './ScrollToComponent';
import MobileMenu from './MobileMenu';



const Hero = ({ showmenu, setShowMenu }) => {

  return (

    <>
    
        <div className='Hero'>
            <div className='hero_top'>
                <div className='hero_logo'></div>
                <div className='hero_links'>
                    <p><ScrollToAboutUs scrollToId="About Us"/></p>
                    <p><ScrollToBCA scrollToId="NGC"/></p>
                    <p><ScrollToWorshipWithUs scrollToId="Worship with Us"/></p>
                </div>
                <div className='bugger_menu' onClick={()=>setShowMenu(!showmenu)}><GiHamburgerMenu style={{width: "100%", height: "100%", color: "white"}} /></div>
            </div>
            <div className='hero_bottom'>
                {/* <div className='hero_bottom_left'></div> */}
                <div className='hero_bottom_right'>
                    <div className='hero_date'>
                        <div className='hero_date_logo'><BiCalendarEvent style={{width: "20px", height: "20px", color: "white"}}/></div>
                        <p>Saturday 24th August,2024</p>
                    </div>
                    <h1 className='hero_large_text'>NGC Business & Career Fair 2024</h1>
                    <div className='hero_date'>
                        <div className='hero_date_logo'><IoLocationSharp style={{width: "20px", height: "20px", color: "white"}} /></div>
                        <p>78, Marine Road Apapa Lagos.</p>
                    </div>
                    <div className='hero_btns'>
                        <div className='hero_Register_btn' onClick={()=>window.location.href = "https://forms.office.com/r/QwZ6ymVTnd"}>Register</div>
                        <div className='hero_buystall_btn' onClick={()=>window.location.href = "https://forms.office.com/r/NUgpXm82tb"}>Book a Spot</div>
                    </div>
                </div>
            </div>
            {
                showmenu ? <MobileMenu showmenu = {showmenu} setShowMenu = {setShowMenu}/> : null
            }
        </div>
    
    </>


  )
}

export default Hero
