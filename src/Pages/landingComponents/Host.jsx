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
                    <Hostcard img = {host1} name = 'Dami Oluwatoyinbo' job = 'KingRaiser, Creative Genius & Pastor of KINGS' />
                </div>
            </div> */}
            {/* <div className='the_host'>
                <h1>Panel Speakers</h1>
                <div className='host_img'>
                    <Hostcard img = {host1} name = 'Dami Oluwatoyinbo' job = 'KingRaiser, Creative Genius & Pastor of KINGS' />
                    <Hostcard img = {host1} name = 'Dami Oluwatoyinbo' job = 'KingRaiser, Creative Genius & Pastor of KINGS' />
                    <Hostcard img = {host1} name = 'Dami Oluwatoyinbo' job = 'KingRaiser, Creative Genius & Pastor of KINGS' />
                    <Hostcard img = {host1} name = 'Dami Oluwatoyinbo' job = 'KingRaiser, Creative Genius & Pastor of KINGS' />
                    <Hostcard img = {host1} name = 'Dami Oluwatoyinbo' job = 'KingRaiser, Creative Genius & Pastor of KINGS' />
                </div>
            </div> */}
        </div>
    
    </>

  )
}

export default Host
