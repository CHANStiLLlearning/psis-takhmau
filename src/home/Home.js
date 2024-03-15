import React from 'react'
import Slider from './component/Slider'
import Card from './component/Card'
import Recent from './component/Recent'
import BoxComing from './component/BoxComing'
import Footer from './component/Footer'


const Home = () => {
  return (
    <div className=''>
    
      <Slider />
      <div className='container-block-1'>
        <h1>INSTITUTES</h1>
        <div className='block-1'>
          <Card className="blue" aos="fade-right" />
          <Card className="red" aos="fade-up" />
          <Card className="yellow" aos="fade-left" />
        </div>
      </div>
      <Recent />
      <div className='upcoming-container'>
        <h1>Upcoming Events</h1>
        <div className='upcoming'>
          <BoxComing
            img="https://www.puc.edu.kh/images/2016/annoucement-general/Presentation-Aseans-Stock-Challenge2016/main.jpg"
            title="Cambodia Digital Award 2023"
            date="4th October 2023"
          />
          <BoxComing
            img="https://www.puc.edu.kh/images/2016/annoucement-general/PUC-ICT-2016/main.jpg"
            title="UP:SKILL – ADVANCING YOUR CAREER IN THE DIGITAL WORLD"
            date="28th August 2023"
            />
          <BoxComing
            img="https://www.puc.edu.kh/images/2016/annoucement-general/health-education/main.jpg"
            title="WOMEN IN TECH – THE AWARD FOR CAMBODIAN WOMEN"
            date="23rd August 2023"
          />
        </div>
      </div>
      <div style={{ backgroundColor:"#142544"}}>
    <Footer/>
    
      </div>
     
    </div>
  )
}

export default Home