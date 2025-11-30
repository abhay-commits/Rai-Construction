import React from 'react'
import './Message.css'

const Message = () => {
  return (
    <div className='Message-container'>
      <div className='Message-top'>
        <h1 className='Message-h'>Message from the Founder</h1>
      </div>
      <div className='Message-p container'>
        <p className='Message-p1'>At <span className='Choose-span'>Rai Construction Solutions</span>, our journey has been fueled by a passion for transforming construction projects into seamless, innovative, and high-quality experiences. From the very beginning, we envisioned a company that not only delivers exceptional construction consultancy but also embraces cutting-edge technology to help our clients succeed at every stage of their projects.</p>
        <p className='Message-p2'>As a team, we provide a comprehensive suite of services including 3D modeling, construction drawings, quantity take-offs, Scan to BIM, interior designing, 3D renders, and walkthroughs—all under one roof. Our goal is simple: to be your trusted partner, offering intelligent solutions that ensure your projects are executed with precision, efficiency, and creativity.</p>
        <p className='Message-p3'>We understand that every project is unique, and we take pride in crafting tailored solutions that meet your specific needs. Our commitment to innovation, attention to detail, and dedication to customer satisfaction drive us to go beyond traditional construction methods, creating spaces that inspire and exceed expectations.</p>
        <p className='Message-p4'>Thank you for choosing <span className='Choose-span'>Rai Construction Solutions</span>. Together, let's build your vision into reality.</p>
        <p className='Message-p5'>Sincerely,</p>
        <p className='Message-p6'>Mrinal Rai</p>
        <p className='Message-p7'>Founder, Rai Construction Solutions</p>
      </div>
    </div>
  )
}

export default Message;