import React from 'react'
import NavBar from '../../layout/NavBar'
import Studentacm from './Studentacm'
import Footer from '../component/Footer'
import OurProgram from './OurProgram'
import Boxp from './Boxp'

function Academic() {

  return (
    <div >
      <div>
        <NavBar />
      </div>
      <div data-aos="zoom-in" >
        <Studentacm />
      </div>
      <div>

        <OurProgram />
        <div className=''>

          <Boxp />
        </div>
      </div>
      <div className='bg-footer' >
        <Footer />
      </div>
    </div>
  )
}

export default Academic