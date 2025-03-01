import React from 'react'
import { FaLocationDot } from "react-icons/fa6"
import { FaUser } from "react-icons/fa";
import { useState } from 'react';
import { FaAngleUp } from "react-icons/fa";
const VehiclePanel = ({setVehiclePanel,setRidePanel,fareData,setvehicleType}) => {
  const  [data, setdata] = useState(2)
  return (
    <div className='mt-3 w-screen flex flex-col items-start relative  overflow-hidden'>
      <span
      onClick={()=>{
        setVehiclePanel(false)
        
      }}
       className='absolute text-2xl top-1 right-8'><FaAngleUp /></span>
      <h2 className='font-bold text-2xl'>Choose Vehicle</h2>
      <div 
       onClick={()=>{
        setRidePanel(true)
        setVehiclePanel(false)
        setvehicleType('auto')
      }}
       className=' w-[90%] p-3 mt-3 border border-gray-500 rounded-md'>
            <div className='flex gap-2 relative  w-full'>
              <img className='w-20 h-14 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="auto" />
              <div className='flex flex-col'>
                <h3 className='relative font-semibold text-2xl '>Auto <span className='absolute text-sm left-16 top-2'><FaUser /> </span > <span className=' text-xl absolute left-20'>3</span> </h3>
                <h3 className='relative font-semibold'>duration :{fareData.duration} </h3>
                <p className='text-sm'>affordable compact price!</p>
              </div>
              <div className='flex justify-center items-center font-bold '>{fareData.auto} Rs</div>
            </div>
      </div>
      <div
       onClick={()=>{
        setVehiclePanel(false)
        setRidePanel(true)
        setvehicleType("motorcycle");
      }}
       className=' w-[90%] p-3 mt-3 border border-gray-500 rounded-md'>
            <div className='flex gap-2 relative   w-full'>
              <img className='w-20 h-14 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="bike" />
              <div className='flex flex-col'>
                <h3 className='relative font-semibold text-2xl '>Bike <span className='absolute text-sm left-16 top-2'><FaUser /> </span > <span className=' text-xl absolute left-20'>1</span> </h3>
                <h3 className='relative font-semibold'> duration :{fareData.duration} </h3>
                <p className='text-sm'>affordable compact price!</p>
              </div>
              <div className='flex justify-center items-center font-bold '>{fareData.motorcycle} Rs</div>
            </div>
      </div>
      <div 
       onClick={()=>{
        setVehiclePanel(false)
        setRidePanel(true)
        setvehicleType("car");
      }} className=' w-[90%] p-3 mt-3 border border-gray-500 rounded-md'>
            <div className='flex gap-2 relative   w-full'>
              <img className='w-20 h-14 ' src="https://static.vecteezy.com/system/resources/previews/029/913/283/non_2x/white-city-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png" alt="auto" />
              <div className='flex flex-col'>
                <h3 className='relative font-semibold text-2xl '>Car <span className='absolute text-sm left-16 top-2'><FaUser /> </span > <span className=' text-xl absolute left-20'>3</span> </h3>
                <h3 className='relative font-semibold'>duration : {fareData.duration}  </h3>
                <p className='text-sm'>affordable compact price!</p>
              </div>
              <div className='flex justify-center items-center font-bold '>{fareData.car} Rs</div>
            </div>
      </div>
       
    </div>
  )
}

export default VehiclePanel
