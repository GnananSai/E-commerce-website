import React from 'react'
import './hero.css'
import hand_icon from '../assests/hand_icon.png'
import arrow_icon from '../assests/arrow.png'
import hero_img from '../assests/hero_image.png'

export const hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hand-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>collections</p>
                <p>for everybody</p>
            </div>
            <div className='hero-latest-btn'>
                <div>
                    Latest Collection
                </div>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_img} alt=""/>
        </div>
    </div>
  )
}
