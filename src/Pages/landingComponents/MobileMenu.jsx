import React from 'react'
import '../Css/mobilemenu.css'
import { ScrollToAboutUs, ScrollToBCA, ScrollToWorshipWithUs } from './ScrollToComponent';

const MobileMenu = ({setShowMenu ,showmenu}) => {

  return (

   <>
   
    <div className='mobile_menu'>
        <div className='close_menu' onClick={()=>setShowMenu(!showmenu)}>X</div>
        <div className='menu_text'onClick={()=>setShowMenu(!showmenu)}><ScrollToAboutUs scrollToId="About Us"/></div>
        <div className='menu_text'onClick={()=>setShowMenu(!showmenu)}><ScrollToBCA scrollToId="NGC"/></div>
        <div className='menu_text'onClick={()=>setShowMenu(!showmenu)}><ScrollToWorshipWithUs scrollToId="Worship with Us"/></div>
    </div>
   
   </>

  )
}

export default MobileMenu
