import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our Newsletetr and stay updated</p>
        <div>
            <input type="email" placeholder='Your email-id'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
