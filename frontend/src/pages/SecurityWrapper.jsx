import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const SecurityWrapper = ({children}) => {
   const navigate=useNavigate();
   useEffect(() => {
    const token =localStorage.getItem('token');
   //  console.log(token)
    if(!token){
       navigate('/Userlogin');
    }
   }, [])
    return (
    <div>
      {children}
    </div>
   )
}

export default SecurityWrapper
