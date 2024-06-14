import React from 'react'
import '../Css/worshipwithus.css';
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";



const WorshipWIthUs = () => {

  return (
    
    <>
    
        <div className='worship_with_us'>
            <div className='worship_with_us_left'>
                <h3>WORSHIP WITH US </h3>
                <p>
                    The Redeemed Christian Church Of God
                    Next Generation Church <br/>
                    78, Marine Road Apapa Lagos
                </p>
            </div>
            <div className='worship_with_us_right'>
                <h3>STAY CONNECTED</h3>
                <div className='media_links'>
                    <FaFacebook size={20} cursor='pointer'/>
                    <IoLogoYoutube size={20} cursor='pointer'/>
                    <AiFillInstagram size={20} cursor='pointer'/>
                </div>
                <p>@kingsconnected</p>
            </div>
        </div>
    
    </>

  )
}

export default WorshipWIthUs
