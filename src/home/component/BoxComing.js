
import React from 'react'
import '../home.css'
const BoxComing = (props) => {
  return (
    <div className='box-coming' data-aos="fade-up">
      <img src={props?.img} />
      <h3>{props?.title}</h3>
      <small>{props?.date}</small>
    </div>
  )
}

export default BoxComing