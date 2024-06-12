import { useState } from 'react';
import './Css/landing.css';
import Hero from './landingComponents/Hero';
import About from './landingComponents/About';

const Landing = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (

    <>
    
      <div className='Landing'>
        <Hero showmenu = {showMenu} setShowMenu = {setShowMenu}/>
        <About/>
      </div>
    
    </>

  )
}

export default Landing
