import { useState } from 'react';
import './Css/landing.css';
import Hero from './landingComponents/Hero';
import About from './landingComponents/About';
import Host from './landingComponents/Host';
import NgcCard from './landingComponents/NgcCard';
import image3 from '../assets/image3.png';

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
                <h3>NGC-BCF <span>2024</span></h3>
              </div>
              <p>Join us at the  NGC Business and Career fair to date! This year's event
                  promises to be bigger and better, bringing together a vibrant community of business
                  leaders, career professionals, and aspiring entrepreneurs.
              </p>
              <h4>Theme:</h4>
              <p>Staying Ahead of the Curve</p>
            </div>
            <div className='nbca_card_right'></div>
          </div>
        </div>
        <Host/>
        <NgcCard 
          title = 'NGC-BCF' 
          subT = 'SME CHALLENGE' 
          text = 'Ready to launch your dream job or business? Join us at the NGC Business Career Fair the ultimate event to supercharge your career and empower your business!.'
          btn = 'Apply Now'
          img = {image3}
          />
      </div>
    
    </>

  )
}

export default Landing
