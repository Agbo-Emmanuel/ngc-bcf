import React from 'react'
import '../Css/Host.css'
import Hostcard from './Hostcard'
import host1 from '../../assets/host1.jpg'

const Host = () => {

  return (

    <>
    
        <div className='host'>
            <div className='the_host'>
                <h1>Host</h1>
                <div className='host_img'>
                    <Hostcard img = {host1} name = 'Pastor Otito Ishola' job = 'Head Pastor, RCCG Next generation Church' />
                </div>
            </div>
            {/* <div className='the_host'>
                <h1>Keynote Speaker</h1>
                <div className='host_img'>
                    <Hostcard img = {host1} name = 'Femi Luther-Abegunde' job = 'Peak Performance Coach and Life strategist' />
                </div>
            </div> */}
            {/* <div className='the_host'>
                <h1>Speakers</h1>
                <div className='host_img'>
                    <Hostcard img = {host1} name = 'Manny Ekpeyong' job = 'Managing Director, G.O.S.L Nigeria Limited' />
                    <Hostcard img = {host1} name = 'Kalesanwo Celina' job = 'Founder, CeliBrand Media' />
                    <Hostcard img = {host1} name = 'Itoro Asuquo' job = 'Financial Controller, Pinnacle Oil & Gas' />
                    <Hostcard img = {host1} name = 'Vinitha' job = 'Founder/Executive Pastry Chef Crema Coffee House' />
                </div>
            </div> */}
        </div>
    
    </>

  )
}

export default Host
