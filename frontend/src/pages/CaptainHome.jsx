import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import CaptainDetails from '../Components/CaptainDetails'
import RidePopUp from '../Components/RidePopUp'
import { useGSAP } from '@gsap/react'
import { useState } from 'react'
import gsap from 'gsap';
import ConfirmRidePopUp from '../Components/ConfirmRidePopUp'

const CaptainHome = () => {
  const navigate=useNavigate();
  const [ridePopupPanel, setRidePopupPanel] = useState(false)
  const ridePopupPanelRef=useRef(null);
  const [ConfirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const confirmPopUpRideRef=useRef(null);

  useEffect(() => {
    setTimeout(()=>{
        setRidePopupPanel(true);
    },4000)
  }, [])
  

  useGSAP(function () {
    if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(ridePopupPanelRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ ridePopupPanel ])
  useGSAP(function () {
    if (ConfirmRidePopupPanel) {
        gsap.to(confirmPopUpRideRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(confirmPopUpRideRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ ConfirmRidePopupPanel ])

  const logout =()=>{
    const token =localStorage.getItem('captain-token');
    axios.get(`http://localhost:4000/captains/logout`, {
      headers: {
      Authorization: `Bearer ${token}`
      }
    }).then((res)=>{
      console.log(res);
      localStorage.removeItem('captain-token');
      navigate('/captainlogin');
    }).catch((err)=>{
      console.log(err);
      navigate('captainlogin');
    })
  }
  return (
    <div className='h-screen'>
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
    <h3 className='absolute top-4 left-4 font-bold text-2xl'>SWIFTRIDE</h3>
        <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
    </div>
    <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

    </div>
    <div className='h-2/5 p-6'>
        <CaptainDetails />
    </div>
    <div ref={ridePopupPanelRef}   className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <RidePopUp
            // ride={ride}
            setRidePopupPanel={setRidePopupPanel}
            setConfirmRidePopupPanel={setConfirmRidePopupPanel}
            // confirmRide={confirmRide}
        />
    </div>
    <div ref={confirmPopUpRideRef}  className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <ConfirmRidePopUp
            // ride={ride}
            setRidePopupPanel={setRidePopupPanel}
            setConfirmRidePopupPanel={setConfirmRidePopupPanel}
             />
    </div>
</div>
  )
}

export default CaptainHome
