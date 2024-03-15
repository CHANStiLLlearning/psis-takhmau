
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../layout/App'
import Home from '../home/Home'
import Institute from '../home/institute/Institute'
import Academic from '../home/academic/Academic'
import Research from '../home/research/Research'
import HomeRoute from './HomeRoute'
import International from '../home/international/International'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
          <Route path='/home/' element={<Home/>} />
            <Route path="/about/*" element={<HomeRoute />} />
            <Route path='/institute' element={<Institute/>} />
            <Route path='/academic' element={<Academic/>} />
            <Route path='/research' element={<Research/>} />
            <Route path='/international' element={<International/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
