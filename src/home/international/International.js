import React from 'react'
import NavBar from '../../layout/NavBar'
import Footer from '../component/Footer'
import Slideit from './Slideit'

function International() {
  return (
    <div>
        <div>
            <NavBar/>
        </div>
        <div>
            <Slideit/>
        </div>
        <div style={{backgroundColor:"#142544"}}>
            <Footer/>
        </div>
    </div>
  )
}

export default International