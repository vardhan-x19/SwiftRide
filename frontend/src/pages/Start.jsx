import React from 'react'
import {Link} from 'react-router-dom'
import { GrLinkNext } from "react-icons/gr";
const Start = () => {
  return (
    <>
     <div class="h-screen relative  w-screen bg-[url('/swiftRIDE1.jpg')] bg-cover bg-center">

      <div className='bg-white  mb-5  absolute bottom-0 w-full'>
        <Link to={'/home'}  className='border-2 w-full bg-black text-white font-semibold flex justify-center items-center border-black p-2 rounded-md'>
          Get Started With SwiftRide
          <span className='ml-3 text-white '><GrLinkNext /></span>
        </Link>
      </div>

     </div>
    </>
  )
}

export default Start
