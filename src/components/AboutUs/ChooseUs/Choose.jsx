import React from 'react'
import './Choose.css'

const Choose = () => {
  return (
    <div className='Choose-container'>
      <div className='Choose-top'>
        <h1 className='Choose-h'>Why Choose Us?</h1>
        <p className='Choose-p'>At <span className='Choose-span'>Rai Construction Solutions</span>, we combine <span className='Choose-span'>cutting-edge technology</span> with a <span className='Choose-span'>client-centric approach</span> to deliver excellence in every project.</p>
      </div>
      <div className='Choose-main container'>
        <div className='choose-imgs'>
          <img src="/Images/9dc42f87-a6da-4e88-b232-cb42913e27c1.jpg" alt="" className='Choose-img'/>
        </div>
        <div className='Choose-la'>
        <div className='Choose-l'>
          <div className='Choose-i'><i className="fa-solid fa-circle-check Choose-icon"></i></div>
          <div className=''>
          <p className='Choose-pa'>Innovative Solutions</p>
          <p className='Choose-para'>We integrate the latest technology to bring your vision to life.</p>
          </div>
        </div>
        <div className='Choose-l'>
          <div className='Choose-i'><i className="fa-solid fa-award Choose-icon"></i></div>
          <div className='Card-contents'>
          <p className='Choose-pa'>Quality Construction</p>
          <p className='Choose-para'>We use premium materials to ensure durability and excellence.</p>
          </div>
        </div>
        <div className='Choose-l'>
          <div className='Choose-i'><i className="fa-solid fa-clock Choose-icon"></i></div>
          <div className='Card-contents'>
          <p className='Choose-pa'>On-Time Delivery</p>
          <p className='Choose-para'>We value your time and complete projects within deadlines.</p>
          </div>
        </div>
        <div className='Choose-l'>
          <div className='Choose-i'><i className="fa-solid fa-user-group Choose-icon"></i></div>
          <div className='Card-contents'>
          <p className='Choose-pa'>Client-Centric Approach</p>
          <p className='Choose-para'>Your satisfaction is our priority. We work closely with you.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Choose;