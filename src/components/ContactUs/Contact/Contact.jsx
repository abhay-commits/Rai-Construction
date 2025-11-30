import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='div-size'>
      <h1 className='Content-h1'>Need Immediate Assistance?</h1>
      <p className='Content-pa'>For urgent project inquiries or immediate consultation, call us directly. Our expert team is ready to help you get started right away.</p>
      <span className='Contant-p1'><a href="#" className='Contant-b'><i className='fa-solid fa-phone'></i> Call Now: +91 8003431008<i className='fa-solid fa-arrow-right'></i></a></span>
      <span className='Contant-p1'><a href="#" className='Contant-a'><i className='fa-solid fa-envelope'></i> Email Us</a></span>
    </div>
  )
}

export default Contact;