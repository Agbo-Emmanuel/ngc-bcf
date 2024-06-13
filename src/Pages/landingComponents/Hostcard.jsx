import React from 'react'
import '../Css/hostcard.css'


const Hostcard = ({img, name, job}) => {
  return (

    <>
    
        <div className='host_card'>
            <div className='host_card_img'><img src={img} alt=''/></div>
            <h3>{name}</h3>
            <p>{job}</p>
        </div>
    
    </>
  )
}

export default Hostcard
