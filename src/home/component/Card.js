import React from 'react'
import '../home.css'
const Card = (props) => {
  return (
    <div className=''>
      <div data-aos={props?.aos} data-aos-duration="1000" className={`card ${props?.className}`}>
       <div className='haseb'>
        <h3 className='ml-4'>CADT</h3>
        <h1>IDRI</h1>
          <h5>institute of Digital Governance</h5>
        </div>
        <div className='haseb'>
        <p>In order to make it work you'll have to make sure your build process has configured styles loader, and bundles it all correctly. If you're using Parcel however,</p>
          <button className='btn-card'>LEARN MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Card