import React from 'react'
import Logo from './../assets/svg/slick-logo-white.svg'
import Subscribe from './Subscribe'

const Footer = () => {
  return (
    <div className='w-full bg-black flex flex-col items-center justify-center'>
        <div className='w-[80%] mt-8'><img className='w-[200px]' src={Logo} alt="Slik Pizza"/></div>
        <div className='w-[80%] py-4 border-b border-gray-300 flex items-center gap-2'></div>
        <Subscribe/>
        <div className='w-full flex flex-row'>
            <span className='w-full text-center block text-sm pb-6 text-zinc-300'>&copy; {new Date().getFullYear()}. All Rights Reserved.</span>
            <span className='w-full text-center block text-sm pb-6 text-zinc-300'>Made with &hearts; by &nbsp;<a href="http://google.com" target="_blank" rel="noreferrer">AGDsigns</a></span>
        </div>
        
        
    </div>
  )
}

export default Footer