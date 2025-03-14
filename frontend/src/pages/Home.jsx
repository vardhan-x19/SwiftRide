import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { useGSAP } from '@gsap/react'
import { FaAngleUp } from "react-icons/fa";
import SearchPanel from '../Components/SearchPanel';
import gsap from 'gsap';
import VehiclePanel from '../Components/VehiclePanel';
import ConfirmRide from '../Components/ConfirmRide';
import CaptainWaiting from '../Components/CaptainWaiting';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setDropINput } from '../store/map';
import { setPickInput } from '../store/map';
import { useEffect } from 'react';
import { useSocket } from '../context/SocketIoContext';
const Home = () => {

  const dispatch=useDispatch();

  const userData = useSelector(store => store.logInUser.user);
  const navigate = useNavigate();
  const pickRef=useRef(null);
  const [pick, setPick] = useState('');
  const [drop, setDrop] = useState('');
  const [panel, setPanel] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const rideRef = useRef(null);
  const [ridePanel, setRidePanel] = useState(false)
  const capWaitRef = useRef(null);
  const [capWait, setCapWait] = useState(false)
  const [suggestion, setSuggestion] = useState([])
  const [fareData, setfareData] = useState({})
  const [vehicleType, setvehicleType] = useState('')
  const {newSocket} = useSocket();
  useEffect(() => {
    console.log("socketinuseeffect", newSocket)
    console.log('the useeffect is running')
    const user_id = localStorage.getItem('user_id');
    if (user_id) {
      newSocket.emit('join', { userId: user_id, userType: 'user' });
    }else{
      alert('No user id found')
      navigate('/user/login')
    }
  }, [newSocket])

  const setPickUpSuggestions = async (inputValue,type) => {
    if(type=="pick"){
      dispatch(setPickInput());
    }else{
      dispatch(setDropINput());
    }
    // console.log("val", inputValue);
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found");
      return;
    }
    try {
      const suggestions = await axios.post(`http://localhost:4000/maps/suggestion?input=${inputValue} `, {
        input: inputValue
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setSuggestion(suggestions.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }

  const SetRideHandler = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found");
      return;
    }
  
    try {
      const response = await axios.get(`http://localhost:4000/ride/fare`, {
        params: {
          origin: pick,
          destination: drop
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setfareData(response.data.fare);
      console.log(response.data.fare)
      // console.log('setfare', fare);
      setVehiclePanel(true);
      setPanel(false);
    } catch (error) {
      console.error("Error fetching fare:", error);
    }
  }
  const setRideFunc= async()=>{
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found");
      return;
    }
  
    try {
      const response = await axios.post(`http://localhost:4000/ride/create`, {
        origin: pick,
        destination: drop,
        vehicleType: vehicleType
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response)
    } catch (error) {
      console.error("Error fetching fare:", error);
    }
  }

  const logout = () => {
    navigate('/user/logout')
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(pick, drop);
  }

  useGSAP(() => {
    console.log('clicked')
    if (panel) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: 1
      })
    }

    if (capWait) {
      gsap.to(capWaitRef.current, {
        height: '75%',
        opacity: 1
      })

    } else {
      gsap.to(capWaitRef.current, {
        height: '0%',
        opacity: 1
      })
    }
  }, [panel, capWait])
  useGSAP(() => {
    if (ridePanel) {
      gsap.to(rideRef.current, {
        height: '100%',
        opacity: 1
      })

    } else {
      gsap.to(rideRef.current, {
        height: '0%',
        opacity: 0
      })
    }
  }, [ridePanel])
  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        height: '70%',
        opacity: 1
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        height: '0%',
        opacity: 1
      })
    }
  }, [vehiclePanel])

  return (
    <div className='h-screen overflow-hidden'>
      {/* image */}
      <h3 className='absolute top-4 left-4 font-bold text-2xl'>SWIFTRIDE</h3>
      <div className='w-screen h-screen'>
        <img className='w-screen h-screen object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-screen w-screen flex flex-col justify-end absolute bottom-0'>
        <div className='p-5 h-[35%] bg-white rounded-md relative'>
          <span
            onClick={() => {
              setPanel(!panel)
            }}
            className='absolute top-5 right-6 text-2xl cursor-pointer'><FaAngleUp /></span>
          <h5 className='text-2xl font-bold'>Find a trip</h5>
          <form onSubmit={submitHandler} className='flex flex-col p-2 gap-4 relative'>
            <div className="line bg-black w-1 h-16 absolute top-4 left-3"></div>
            <input
              // ref={pickRef}
              value={pick}
              onClick={() => {
                setPanel(true)
              }}
              onChange={(e) => {
                // console.log(e.target.value)
                setPick(e.target.value)
                setPickUpSuggestions(pick,"pick");
              }}
              className='border font-semibold  border-black p-2' type="text" placeholder='Add a pickup location' />
            <input
              value={drop}
              onClick={() => {
                setPanel(true)
              }}
              onChange={(e) => {
                setDrop(e.target.value)
                setPickUpSuggestions(drop,"drop");
              }}
              className='border border-black p-2' type='text' placeholder="Enter your destination" />
          </form>
          <button
          onClick={SetRideHandler}
           className='w-full p-2 bg-slate-950 text-white rounded-md text-bold text-2xl'>FindTrip</button>
        </div>
        <div ref={panelRef} className='p-5 bg-white overflow-hidden'>
          <SearchPanel setDrop={setDrop} suggestion={suggestion} setPick={setPick}  setVehiclePanel={setVehiclePanel} setPanel={setPanel} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='p-5 h-0 fixed z-10 bottom-0 bg-white overflow-hidden' >
        <VehiclePanel setvehicleType={setvehicleType} fareData={fareData}  setRidePanel={setRidePanel} setVehiclePanel={setVehiclePanel}></VehiclePanel>
      </div>
      <div ref={rideRef} className='p-5 h-0 fixed z-10 bottom-0 bg-white overflow-hidden' >
        <ConfirmRide pick={pick} drop={drop} fareData={fareData} vehicleType={vehicleType} setRideFunc={setRideFunc} setCapWait={setCapWait} setRidePanel={setRidePanel} ></ConfirmRide>
      </div>
      <div ref={capWaitRef} className='p-5 h-0 fixed z-10 bottom-0 bg-white overflow-hidden' >
        <CaptainWaiting setRidePanel={setRidePanel} setCapWait={setCapWait} ></CaptainWaiting>
      </div>
    </div>
  )
}

export default Home
