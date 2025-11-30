import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div className='Main-top'>
      <div className='Main-main'>
      <h1 className='main-h1'>What We Do</h1>
      <p className='main-p'>We offer a wide range of specialized construction services tailored to meet every project requirement.</p>
      </div>
      <div className='card-containers container'>
        <div className='card-mains'>
          <div className='icon-div'><i className='fa-solid fa-cube card-icon Working-span'></i></div>
          <div className='Card-contents'>
          <p className='card-para'>3D Modeling Services</p>
          <p className='Card-pa'>Transforming concepts into detailed 3D models for accurate project visualization.</p>
          </div>
        </div>
        <div className='card-mains'>
          <div className='icon-div'><i className='fa-solid fa-file card-icon Working-span'></i></div>
          <div className='Card-contents'>
          <p className='card-para'>Construction Drawings</p>
          <p className='Card-pa'>Delivering precise construction blueprints for seamless execution.</p>
          </div>
        </div>
        <div className='card-mains'>
          <div className='icon-div'><i className='fa-solid fa-calculator card-icon Working-span'></i></div>
          <div className='Card-contents'>
          <p className='card-para'>Quantity Take-Off</p>
          <p className='Card-pa'>Providing accurate material and cost estimations to optimize budgets.</p>
          </div>
        </div>
        <div className='card-mains'>
          <div className='icon-div'><i className='fa-solid fa-barcode card-icon Working-span'></i></div>
          <div className='Card-contents'>
          <p className='card-para'>Scan to BIM</p>
          <p className='Card-pa'>Converting point cloud data into intelligent BIM models for renovations.</p>
          </div>
        </div>
        <div className='card-mains'>
          <div className='icon-div'><i className='fa-solid fa-palette card-icon Working-span'></i></div>
          <div className='Card-contents'>
          <p className='card-para'>Interior Designing</p>
          <p className='Card-pa'>Crafting functional & aesthetically pleasing interior spaces.</p>
          </div>
        </div>
        <div className='card-mains'>
          <div className='icon-div'><i className='fa-solid fa-video card-icon Working-span'></i></div>
          <div className='Card-contents'>
          <p className='card-para'>3D Renders & Walkthroughs</p>
          <p className='Card-pa'>Providing immersive visuals & virtual walkthroughs for projects.</p>
          </div>
        </div>
        <button className='card-btns'><a href="/our-services">Explore Our Services</a></button>
      </div>
    </div>
  )
}

export default Main