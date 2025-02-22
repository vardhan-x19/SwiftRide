import React from 'react'
import { FaAngleUp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
const CaptainWaiting = ({setcapWait}) => {
  return (
   <div className='w-screen relative mt-6  '>
             <span
              className='absolute top-0 right-10 text-2xl cursor-pointer'><FaAngleUp /></span>
              <div className=' h-24 '>
                <div className='relative'>
                <img className='w-16 h-16 fixed z-10  rounded-full' src="https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png" alt="" />
                <img className='w-28 absolute left-7  top-0 h-20' src="https://static.vecteezy.com/system/resources/previews/005/576/332/non_2x/car-icon-car-icon-car-icon-simple-sign-free-vector.jpg" alt="" />
                </div>
                <div className=' w-screen ml-[45%]'>
                    <h2 className='font-bold text-start '>harshavardhan</h2>
                    <h1 className='font-bold text-start '>TS 16 IN 9999</h1>
                    <h3>Shift Dzire</h3>
                  </div>
              </div>
              <div className=''>
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
               className='p-4 w-[90%]  mx-auto bg-red-500 mt-5 rounded-md text-white font-bold'>Confirm Booking</button>
       </div>
  )
}

export default CaptainWaiting
