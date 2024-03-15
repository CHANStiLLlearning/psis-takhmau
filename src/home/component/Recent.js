import React from 'react'
import '../home.css'
const Recent = () => {
  return (
    <div className='recent ' data-aos="zoom-in" data-aos-duration="1000" >
      <div className='recent-block '>
        <div className='re-block'>
          <h2>Recent News</h2>
          <img src='https://www.puc.edu.kh/images/2023/main.jpg' alt='img'/>
          <div className='ha'>

          <h3>The Second Graduation Ceremonies of Paññāsāstra University of Cambodia's Institute of Foreign Languages</h3>
            <small className='sm'>4th October 2023</small>
            </div>
        </div>
        <div className='re-block'>
          <div className='title-b'>
            <h4>EXPLORE MORE NEWS</h4>
            <button>ALL NEWS</button>
          </div>
          <div className='ha'>
            <h3 className=''>CONGRATULATIONS TO THE STUDENTS WHO GRADUATED IN 2022 AND 2023</h3>
            <small className='sm'>26th September 2023</small>
          </div>
          <div className='ha'>
          <h3 className=''>CAMBODIA WOMEN IN TECH AWARDS 2023 IS OPEN FOR APPLICATIONS </h3>
          <small className='sm'>14th September 2023</small>
          </div>
          <div className='ha'>

            <h3 className=''>CODE-C: DEVELOPER CONFERENCE AND TECH EXPO 2023</h3>
          <small className='sm'>1st September 2023</small>
          </div>

          </div>
      </div>
    </div>
  )
}

export default Recent