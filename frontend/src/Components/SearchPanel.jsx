import React from 'react'
import { FaLocationDot } from "react-icons/fa6"
const SearchPanel = ({setPanel,setvehiclePanel}) => {
  return (
    <div className='mt-5  w-screen overflow-hidden'>
      <div onClick={()=>{
        console.log('setpanel')
        setvehiclePanel(true)
        setPanel(false);
      }} className='flex gap-2 relative  shadow-md p-3 w-full'>
        <span className='mt-3'><FaLocationDot /></span>
        <h3 className='font-medium'>25B,tkr college of engineering and technology,meerpet,hyderabad</h3>
      </div>
      <div className='flex gap-2 mt-2 relative shadow-md p-3 w-full'>
        <span className='mt-3'><FaLocationDot /></span>
        <h3 className='font-medium'>25B,tkr college of engineering and technology,meerpet,hyderabad</h3>
      </div>
      <div className='flex gap-2 mt-2 relative shadow-md p-3 w-full'>
        <span className='mt-3'><FaLocationDot /></span>
        <h3 className='font-medium'>25B,tkr college of engineering and technology,meerpet,hyderabad</h3>
      </div>
      <div className='flex gap-2 mt-2 relative shadow-md p-3 w-full'>
        <span className='mt-3'><FaLocationDot /></span>
        <h3 className='font-medium'>25B,tkr college of engineering and technology,meerpet,hyderabad</h3>
      </div>
      
    </div>
  )
}

export default SearchPanel
