import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
const App = () => {
  return (
   
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/usersignup" element={<UserSignUp />} />
          <Route path="/captainlogin" element={<CaptainLogin />} />
          <Route path="/captainsignup" element={<CaptainSignUp />} />
        </Routes>
      </div>
  
  )
}

export default App
