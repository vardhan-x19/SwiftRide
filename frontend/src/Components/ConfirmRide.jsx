import React from 'react'
import { FaAngleUp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
const ConfirmRide = ({setRidePanel,setcapWait}) => {
  return (
    <div className='w-screen h-screen relative mt-6  '>
          <span
          onClick={()=>{
            console.log('rideclick')
            setRidePanel(false)
          }}
           className='absolute top-0 right-10 text-2xl cursor-pointer'><FaAngleUp /></span>
           <h1 className='text-3xl ml-[20%] text-red-500 font-bold '>ConfirmRide</h1>
           <img  className='w-20 mt-3 h-20 ml-[35%] bg-slate-400 rounded-full shadow-xl' src="https://static.vecteezy.com/system/resources/previews/029/913/283/non_2x/white-city-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png" alt="" />
           <div>
             <div className='p-3 relative border shadow-md mt-2 rounded-md mr-9'>
              <h1 className='text-black font-bold text-xl ml-4'> <span className='absolute text-2xl left-1 top-5'><CiLocationOn /> </span>  kanteshwar temple</h1>
              <p className='ml-5 font-sm text-sm'>Nizamabad, telangana</p>
             </div>
             <div className='p-3 relative border shadow-md mt-2 rounded-md mr-9'>
              <h1 className='text-black font-bold text-xl ml-4'> <span className='absolute text-bold left-1 top-5'><FaLocationDot /> </span> Tkr college</h1>
              <p className='ml-5 font-sm text-sm'>Hyderabad,meerpet</p>
             </div>
           </div>
           <div className='p-3 relative border shadow-md mt-2 rounded-md mr-9'>
              <h1 className='text-black font-bold text-2xl ml-5'> <span className='absolute text-bold left-1 top-5'><RiMoneyRupeeCircleFill /> </span>150.00 </h1> 
            </div>
           <button
           onClick={()=>{
            console.log("clicked on confirm")
            setRidePanel(false)
            setcapWait(true)
           }}
            className='p-4 w-[90%]   mx-auto bg-red-500 mt-3 rounded-md text-white font-bold'>Confirm Booking</button>
    </div>
  )
}

export default ConfirmRide
