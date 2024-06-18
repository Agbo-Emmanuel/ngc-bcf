import React from 'react'
import '../Css/About.css'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
    
        <div className='about'>
            <motion.h1
              initial={{
                opacity: 0,
                x: -100,
              }}
              transition={{
                type: "spring",
                stiffness: 30,
                mass: 1.5,
              }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                //   delay: stagger(0.05),
              }}
              viewport={{ once: true }}
              >About NGC-BCF</motion.h1>
            <div className='about_context'>
                <motion.div 
                  className='about_img'
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 30,
                    mass: 1.5,
                  }}
                  // animate={{ opacity: 1, y: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    //   delay: stagger(0.05),
                  }}
                  viewport={{ once: true }}
                  ></motion.div>
                <motion.div 
                  className='about_text'
                  initial={{
                    opacity: 0,
                    x: 100,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 30,
                    mass: 1.5,
                  }}
                  // animate={{ opacity: 1, y: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    //   delay: stagger(0.05),
                  }}
                  viewport={{ margin: "-10px", once: true }}
                  >
                  <p>The <span>NGC</span> Business and Career Fair is dedicated to establishing a vibrant forum where believers thrive in business and career pursuits, offering valuable insights, strategies, and networking for growth and collaboration.</p>
                </motion.div>
            </div>
        </div>
        {/* <div className='about_business'>
          <div className='about_business_text'>NGC Business and Career fair is an outreach dedicated to Kingdom influencers
          and establishment in the marketplace through entrepreneurship and career excellence.</div>
        </div> */}
    
    </>
  )
}

export default About
