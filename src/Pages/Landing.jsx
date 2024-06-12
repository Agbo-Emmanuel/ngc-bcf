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
        <div className='nbca'>
          <div className='nbca_card'>
            <div className='nbca_card_left'>
              <div className='nbca_card_left_top'>
                <h3>NBCA <span>2024</span></h3>
              </div>
              <p>Join us at the  NGC Business and Career Affair to date! This year's event
                  promises to be bigger and better, bringing together a vibrant community of business
                  leaders, career professionals, and aspiring entrepreneurs.
              </p>
              <h4>Theme:</h4>
              <p>Staying Ahead of the Curve</p>
            </div>
            <div className='nbca_card_right'></div>
          </div>
        </div>
      </div>
    
    </>

  )
}

export default Landing
