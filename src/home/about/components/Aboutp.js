import React from 'react'
import '../style.css'
import { useNavigate } from 'react-router-dom'
function Aboutp() {
  const route = useNavigate() 
  
  return (
    <div className='w-full'>

      <div className='mt-7 line-1 w-[30%]'>
        <hr className='h-[10px] bg-white b' data-aos="fade-right" />
      </div>
      <div className='w-[80%] m-auto mt-3 flex '>
        <h1 className='text-4xl text-size' data-aos="fade-right">Meet Our President</h1>
      </div>
      <div className='w-[80%] grid grid-cols-2 gap-4 m-auto'>
        <div className='w-[100%] flex '>
          <img src='https://www.puc.edu.kh/images/photos/prospective_home_clip_image002.jpg' className='w-[330px] h-[330px] max-md:m-auto img-p pt-4' />
        </div>
        <div className='p-3 text-wrap '>
          <h3 className='text-2xl font-bold'>Message from the President</h3>
          <span className='text-lg i text-wrap' data-aos="fade-left">Congratulations to all new students! <small className='text-[12px]'> You have chosen well in selecting Paññasastra University of Cambodia (PUC). We are committed to Excellence in education. We view education as the prime most important purpose in life.From our founding, we have taken our role - to educate and empower future leaders - most seriously. PUC strives to provide top quality instructions and to develop younger generations to be qualified professionals with high leadership qualities and wisdom. We also strive to play a leadership role in local, national, regional, and global affairs. Our faculty members are drawn among professionals in business, government, and academia from different parts of the world.</small></span>
          <div>
          <button onClick={()=>route('./messagep')} className='text-yellow-50 m-s py-[10px] px-[50px] rounded-lg'>Readmore</button>
            </div>         
        </div>
      </div>
    
    </div>
  )
}

export default Aboutp