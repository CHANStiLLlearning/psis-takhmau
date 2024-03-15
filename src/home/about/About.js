import React from 'react'
import NavBar from '../../layout/NavBar'
import Education from './components/Education'
import President from './components/President'
import Footer from '../component/Footer'
import './style.css'


function About() {
  return (
    <div className=' m-auto'>
      <NavBar/>  
      <div className='mt-3 ' data-aos="zoom-in" >
      <Education/>
      </div> 
      <div>
        <President/>
      </div>
      <div className='bg'>
        <Footer/>
      </div>
    </div>
  )
}

export default About