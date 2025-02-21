import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const CaptainWrap = ({children}) => {
  const navigate=useNavigate();
  useEffect(() => {
      const captainToken=localStorage.getItem('captain-token');
      if(!captainToken){
        console.log('no captain login');
        navigate('/captainlogin');
      }
  }, [])
  
  return (
    <div>
      {children}
    </div>
  )
}

export default CaptainWrap
