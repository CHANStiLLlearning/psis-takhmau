import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import About from '../home/about/About'
import Messagep from '../home/about/components/areadmore/Messagep'
import Vphilosophy from '../home/about/components/vphilosophy/Vphilosophy'
function HomeRoute() {
  return (
    <div>
      <Routes>
          <Route index element={ <About/>} />
          <Route path='messagep' element={<Messagep/>} />
          <Route path='vphilosophy' element={<Vphilosophy/>}/>
      </Routes>
  </div>
  )
}

export default HomeRoute