import React from 'react'
import Line from './Line'
import Aboutp from './Aboutp'

function President() {
  return (
    <div className='bg-red-600 w-full h-full  '>
      <div className='mt-[50px] ' data-aos-duration="1000" data-aos="flip-down">
        <Line/>
      </div>
      <div>
        <Aboutp/>
      </div>
    </div>
  )
}

export default President