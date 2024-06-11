import { useState } from 'react';
import './Css/landing.css';
import Hero from './landingComponents/Hero';

const Landing = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (

    <>
    
      <div className='Landing'>
        <Hero showmenu = {showMenu} setShowMenu = {setShowMenu}/>
        {
          showMenu ? <div style={{width: "90%", height: "200px", backgroundColor: "yellow"}}>

          </div> : null
        }
      </div>
    
    </>

  )
}

export default Landing
