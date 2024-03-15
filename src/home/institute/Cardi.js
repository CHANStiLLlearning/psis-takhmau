import React from 'react'
import './style.css'
import Card from '../component/Card'
import Footer from '../component/Footer'
function Cardi() {
    return (
        <div>

        <div className='container-block-1'>
        <h1>INSTITUTES</h1>
        <div className='block-1'>
          <Card className="blue" aos="fade-right" />
          <Card className="red" aos="fade-up" />
          <Card className="yellow" aos="fade-left" />
        </div>
      </div>
        <div className='bg-footer'>
            <Footer/>
        </div>
    </div>
    )
}

export default Cardi