import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogOut = () => {
  const token=localStorage.getItem('token');
  const navigate=useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:4000/users/logout`,{
      headers :{
        Authorization:`Bearer ${token}`
      }
    }).then((response)=>{
       console.log('logout succesfully');
       localStorage.clear();
       navigate('/Userlogin');
    }).catch((err)=>{
      console.log(err);
    })    
  }, [])

  return (
    <div>
      <button className='border p-4 bg-blue-400 text-white hover:bg-slate-700'>logout</button>
    </div>
  )
}

export default UserLogOut
