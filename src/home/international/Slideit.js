import React from 'react'
import './international.css'
import myImage1 from './IBanner.jpeg';

function Slideit() {
    return (
        <div className='max-w-[1920px] m-auto inter  bg-slate-500'>
            <div className='w-[80%] p-2  bg-white img-inter'>
                <img src={myImage1} className='w-full'/>
            </div>
            <h1 className='text-2xl'>International Scholarship</h1>
        </div>
    )
}

export default Slideit