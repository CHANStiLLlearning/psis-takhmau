import React from 'react'
import NavBar from '../../layout/NavBar'
import Hre from './Hre'
import Reprogram from './Reprogram'
import Boxpro from './Boxpro'
import Footer from '../component/Footer'
function Research() {
  return (
    <div>
      <NavBar/>
      <div>
        <Hre/>
      </div>
      <div>
        <Reprogram/>
      </div>
      <div>
        <Boxpro/>
      </div>
      <div style={{ backgroundColor:"#142544"}}>
        <Footer/>
      </div>
    </div>
  )
}

export default Research