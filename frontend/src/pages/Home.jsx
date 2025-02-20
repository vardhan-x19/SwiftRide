import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const userData=useSelector(store=>store.logInUser.user);
  console.log('userDtat',userData);
  const navigate=useNavigate();
  const logout=()=>{
     navigate('/user/logout')
  }
  return (
    <div>
      Home
      <button
      onClick={logout} className='p-4 bg-slate-500 text-white hover:bg-slate-600'>go to logout</button>
    </div>
  )
}

export default Home
