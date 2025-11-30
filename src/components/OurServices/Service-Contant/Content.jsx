import React from 'react'
import './Content.css'

const Content = () => {
  return (
    <div className='div-size'>
      <h1 className='Content-h1'>Ready to Start Your Project?</h1>
      <p className='Content-pa'>Let's discuss how our expert services can bring your construction vision to life with precision and innovation.</p>
      <span className='Contant-p1'><a href="/contact-us" className='Contant-b'>Get Free Consultation <i className='fa-solid fa-arrow-right'></i></a></span>
      <span className='Contant-p1'><a href="/our-projects" className='Contant-a'>View Our Work</a></span>
    </div>
  )
}

export default Content;