import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react'
import { FaAngleUp } from "react-icons/fa";
import SearchPanel from '../Components/SearchPanel';
import gsap from 'gsap';

const Home = () => {
  const userData = useSelector(store => store.logInUser.user);
  const navigate = useNavigate();
  const logout = () => {
    navigate('/user/logout')
  }
  const [pick, setPick] = useState('');
  const [drop, setDrop] = useState('');
  const [panel, setPanel] = useState(false);
  const panelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(pick, drop);
  }

  useGSAP(() => {
    if (panel) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: 0
      })
    }
  }, [panel])

  return (
    <div className='h-screen overflow-hidden'>
      {/* image */}
      <h3 className='absolute top-4 left-4 font-bold text-2xl'>SWIFTRIDE</h3>
      <div className='w-screen h-screen'>
        <img className='w-screen h-screen object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-screen w-screen flex flex-col justify-end absolute bottom-0'>
        <div className='p-5 h-[30%] bg-white rounded-md relative'>
          <span
            onClick={() => {
              setPanel(!panel)
            }}
            className='absolute top-5 right-6 text-2xl cursor-pointer'><FaAngleUp /></span>
          <h5 className='text-2xl font-bold'>Find a trip</h5>
          <form onSubmit={submitHandler} className='flex flex-col p-2 gap-4 relative'>
            <div className="line bg-black w-1 h-16 absolute top-4 left-4"></div>
            <input
              value={pick}
              onClick={() => {
                setPanel(true)
              }}
              onChange={(e) => {
                setPick(e.target.value)
              }}
              className='border border-black p-2' type="text" placeholder='Add a pickup location' />
            <input
              value={drop}
              onClick={() => {
                setPanel(true)
              }}
              onChange={(e) => {
                setDrop(e.target.value)
              }}
              className='border border-black p-2' type='text' placeholder="Enter your destination" />
          </form>
        </div>
        <div ref={panelRef} className='p-5 bg-white overflow-hidden'>
          <SearchPanel />
        </div>
      </div>
    </div>
  )
}

export default Home
