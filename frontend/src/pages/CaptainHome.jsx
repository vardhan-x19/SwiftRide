import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CaptainHome = () => {
  const navigate=useNavigate();
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
    <div>
      Captain Home 
      <br />
      <button
      onClick={logout}
       className='p-4 bg-slate-500 hover:bg-slate-600'
      >
        LogOut
      </button>
    </div>
  )
}

export default CaptainHome
