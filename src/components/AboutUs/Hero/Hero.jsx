import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='div-class container'>
      <div className='div-main'>
        <img src="/Images/The Oakridge Enclave.jpg" alt="" className='img-1' />
      </div>
      <div className='div-p'>
        <p className='p'>Welcome to <span className='p-span'>Rai Construction Solutions</span> – Your trusted partner in construction excellence.</p>
        <h1 className='h1-class'>Bringing Your Vision to Life with Precision, Innovation & Expertise.</h1>
        <p className='p1'>At Rai Construction Solutions, we specialize in comprehensive construction consultancy with a commitment to precision, quality, and innovation. From conceptualization to execution, we ensure seamless project delivery with expert insights and cutting-edge solutions.</p>
      </div>
    </div>
  )
}
export default Hero;
