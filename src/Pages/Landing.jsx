import { useState } from 'react';
import './Css/landing.css';
import Hero from './landingComponents/Hero';
import About from './landingComponents/About';
import Host from './landingComponents/Host';
import NgcCard from './landingComponents/NgcCard';
import image1 from '../assets/challengeimage.png';
import image2 from '../assets/cardtwoimage.png';
import image3 from '../assets/cardthreimage.png';
import DontMissIt from './landingComponents/DontMissIt';
import WorshipWIthUs from './landingComponents/WorshipWIthUs';


const Landing = () => {

  const [showMenu, setShowMenu] = useState(false);
  


  return (

    <> 

      <div className='Landing'>
        <Hero showmenu = {showMenu} setShowMenu = {setShowMenu}/>
        <div id='About Us'>
          <About />
        </div>
        <div id='NGC' className='nbca'>
          <div className='nbca_card'>
            <div className='nbca_card_left'>
              <div className='nbca_card_left_top'>
                <h3>NGC-BCF <span>2024</span></h3>
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
        <Host/>
        <NgcCard 
          title = 'NGC-BCF' 
          subT = 'SME CHALLENGE' 
          text = 'Ready to launch your dream job or business? Join us at the NGC Business Career Fair the ultimate event to supercharge your career and empower your business!.'
          btn = 'Apply Now'
          img = {image1}
          />
          <DontMissIt/>
          <NgcCard 
          title = '' 
          subT = '' 
          text = "The Business And Career fair is your one-stop shop for success. Job seeker,seasoned pro, or aspiring entrepreneur - this event is for YOU!. Don't wait! Register now and unlock your full potential!"
          btn = 'Register Now'
          img = {image2}
          />
          <NgcCard 
          title = '' 
          subT = '' 
          text = "Secure your booth/stall at the largest and most anticipated NGC Business and Career Affair yet! This year, we're bigger and better, bringing together business leaders, career professionals, and aspiring entrepreneurs.  "
          btn = 'Buy Stall'
          text2 = "Don't miss this unique opportunity to showcase your products, connect with potential clients, and expand your network. Whether you're a startup or an established business, the NGC Business and Career Affair offers unparalleled exposure and growth opportunities."
          img = {image3}
          direction = 'row-reverse'
          />
          <div id='Worship with Us'>
            <WorshipWIthUs/>
          </div>
      </div>

     </>

  )
}

export default Landing
