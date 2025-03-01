import React from 'react'
import { FaAngleUp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
const ConfirmRide = ({setRidePanel,setCapWait,setRideFunc,pick,drop,fareData,vehicleType}) => {
  return (
    <div className='w-screen h-screen relative mt-6  '>
          <span
          onClick={()=>{
            console.log('rideclick')
            setRidePanel(false)
          }}
           className='absolute top-0 right-10 text-2xl cursor-pointer'><FaAngleUp /></span>
           <h1 className='text-3xl ml-[20%] text-red-500 font-bold '>ConfirmRide</h1>
           <img  className='w-20 mt-3 h-20 ml-[35%] bg-slate-400 mb-10 rounded-full shadow-xl' src="https://static.vecteezy.com/system/resources/previews/029/913/283/non_2x/white-city-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png" alt="" />
           <div>
             <div className='p-3 relative border shadow-md mt-2 rounded-md mr-9'>
              <h1 className='text-black font-bold h-9 overflow-hidden text-xl ml-4'> <span className='absolute text-2xl left-1 top-5'><CiLocationOn /> </span>  {pick}</h1>
              <p className='ml-5 h-10 overflow-hidden font-sm text-sm'>{pick}</p>
             </div>
             <div className='p-3 relative border shadow-md mt-4 rounded-md mr-9'>
              <h1 className='text-black font-bold text-xl ml-4 h-9 overflow-hidden'> <span className='absolute text-bold left-1 top-5'><FaLocationDot /> </span> {drop} </h1>
              <p className='ml-5 font-sm text-sm h-10 overflow-hidden '>{drop}</p>
             </div>
           </div>
           <div className='p-3 relative border shadow-md mt-4 rounded-md mr-9'>
              <h1 className='text-black left-3 font-bold text-2xl ml-5'> <span className='absolute text-bold left-1 top-5'><RiMoneyRupeeCircleFill /> </span>{fareData[vehicleType]} </h1> 
            </div>
           <button
           onClick={()=>{
            console.log("clicked on confirm")
            setRidePanel(false)
            setCapWait(true)
            setRideFunc()
           }}
            className='p-4 w-[90%]   mx-auto bg-red-500 mt-3 rounded-md text-white font-bold'>Confirm Booking</button>
    </div>
  )
}

export default ConfirmRide
