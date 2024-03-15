import React from 'react'
import './messagep.css'
import Footer from '../../../component/Footer'
import NavBar from '../../../../layout/NavBar'
import Pm from './Pm'
function Messagep() {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
        <Pm/>
      </div>
      <div style={{ backgroundColor: "#142544" }}>
        <Footer />
      </div>
    </div>
  )
}

export default Messagep