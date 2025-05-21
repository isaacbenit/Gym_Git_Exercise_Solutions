import React from 'react'
import image from './assets/illustration1.png'
function FirstLayer() {
  return (
    <>
    <div className='flex flex-row'>
    <div className=' mx-9 p-18'>
        <h1 className='text-5xl text-left'>Want anything to be easy with LaslesVPN.</h1>
        <p className='text-sm pt-8 mr-10 text-left'>Provide a network for all your needs with ease and fun using LaslesVPN 
            discover interesting features from us.</p>
        <button className='bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-8 mt-4 mr-105 rounded'>Get Started</button>
    </div>
    <div>
        <img src={image} alt=""  className='py-18 pr-19 '/>
    </div>

    </div>
    
    </>
  )
}

export default FirstLayer