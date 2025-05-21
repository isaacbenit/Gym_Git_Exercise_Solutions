import React from 'react'
import imag2 from './assets/logo.png'
import './App.css'
function Navbar() {
  return (
  <>
  <div>
    <ul className='flex  flex-row gap-18'>
        <li className='flex flex-row ml-28'><span><img src={imag2} alt="" className=' '/></span><span className='px-2'>Lasles<span className='font-bold'>VPN</span></span></li>
        <li>About</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>Help</li>
        <li className='font-bold'>Sign In</li>
        <button className='border border-red-600 rounded-2xl px-7 text-red-600 text-xs'>Sign Up</button>
    </ul>
  </div>
  </>
    
  )
}

export default Navbar