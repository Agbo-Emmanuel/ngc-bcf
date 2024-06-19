import React from 'react'
import '../Css/ngccard.css'
import { motion } from 'framer-motion'

const NgcCard = ({ title, subT, text, btn, img, text2, direction }) => {


    const send = ()=>{

        if(btn === "Book a Stall"){
            window.location.href = "https://forms.gle/nut8uv78RFmGYAoZA"
        }else{
            window.location.href = "https://forms.gle/sSfeVvk3aoXXUGnw7"
        }
    }

  return (

    <>
    
        <div className='ngc_card_holder' >
            <motion.div 
                className='ngc_card' 
                style={{flexDirection : direction}} 
                initial={{
                    opacity: 0,
                    y: 300,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 30,
                    mass: 1.5,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ margin: "-40px", once: true }}
                >
                <div className='ngc_card_left'>
                    <div className='ngc_card_left_top'>
                        <h3>{title} <span>{subT}</span></h3>
                    </div>
                    <p>{text}</p>
                    <p>{text2}</p>
                    <button className='apply_btn' onClick={send}>{btn}</button>
                </div>
                <div className='ngc_card_right'><img src={img} alt=''/></div>
            </motion.div>
        </div>
        
    </>

  )
}

export default NgcCard
