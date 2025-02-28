import React from 'react'
import { FaLocationDot } from "react-icons/fa6"
import axios from 'axios'

const SearchPanel = ({setPanel,setVehiclePanel,suggestion,setPick}) => {
  
  return (
  <div className='mt-5  w-screen overflow-hidden'>
    {suggestion.map((item) => (
    <div key={item.place_id} onClick={() => {
      setPick(item.description);
      // setVehiclePanel(true)
      // setPanel(false);
    }} className='flex w-[90%] gap-2 mb-2 border border-gray-300 h-16 overflow-hidden relative shadow-sm p-3 '>
      <span className='mt-3'><FaLocationDot /></span>
      <h3 className='font-medium'>{item.description}</h3>
    </div>
    ))}
  </div>
  )
}

export default SearchPanel
