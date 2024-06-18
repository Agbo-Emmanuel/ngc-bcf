import React from 'react'
import '../Css/dontmisit.css'
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegHandshake } from "react-icons/fa";
import { TbArrowBigUpLines } from "react-icons/tb";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { motion } from 'framer-motion'



const DontMissIt = () => {


    const items = [
        {
            title_logo : <FaRegHandshake size={40} />,
            title : 'Visibility and Recognition',
            text : 'Participating in this event could elevate your visibility within your industry or community, potentially leading to increased recognition, opportunities for collaboration, and exposure'
        },
        {
            title_logo : <HiOutlineLightBulb size={40} />,
            title : 'Personal Growth',
            text : 'Attendees will have the chance to challenge themselves, expand their horizons, and step out of their comfort zones, fostering personal growth and development in a supportive environment.'
        },
        {
            title_logo : <TbArrowBigUpLines size={40} />,
            title : 'Investment Potential',
            text : "For entrepreneurs, this event could be a prime opportunity to connect with potential investors, mentors, or advisors who could provide valuable guidance, funding, or partnerships to fuel your venture's growth."
        },
        {
            title_logo : <FaArrowUpRightDots size={40} />,
            title : 'Cutting-Edge Trends',
            text : "Stay ahead of the curve by learning about the latest trends, innovations, and strategies shaping your industry, ensuring you remain competitive in today's fast-paced business landscape.you"
        },
    ]

  return (

    <>
    
        <motion.div
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
            className='dont_miss_it'>
            <h1>DON’T MISS IT</h1>
            <div className='dont_miss_it_card_holder'>
                {
                    items.map((e)=>(
                        <div className='dont_miss_it_card'>
                            <div className='card_title_logo'>{e.title_logo}</div>
                            <h3>{e.title}</h3>
                            <p>{e.text}</p>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    
    </>

  )
}

export default DontMissIt
