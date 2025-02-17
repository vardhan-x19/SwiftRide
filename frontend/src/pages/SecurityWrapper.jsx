import React from 'react'
import { useNavigate } from 'react-router-dom';
const SecurityWrapper = ({children}) => {

    const navigate=useNavigate();
    const token =localStorage.getItem('token');
    if(!token){
       navigate('/userlogin');
    }
    return (
    <div>
      {children}
    </div>
   )
}

export default SecurityWrapper
