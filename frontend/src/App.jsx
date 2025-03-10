import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import Home from './pages/Home'
import SecurityWrapper from './pages/SecurityWrapper'
import UserLogOut from './pages/UserLogOut'
import CaptainHome from './pages/CaptainHome'
import CaptainWrap from './pages/CaptainWrap'
import CaptainRiding from './pages/CaptainRiding'
const App = () => {
  return (
   
      <div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/captain-riding" element={<CaptainRiding />} />
          <Route path="/usersignup" element={<UserSignUp />} />
          <Route path="/captainlogin" element={<CaptainLogin />} />
          <Route path="/captainsignup" element={<CaptainSignUp />} />
          < Route path="/home" element={
            <SecurityWrapper>
              <Home />
            </SecurityWrapper>
          }  />
          <Route path="/user/logout" element={<UserLogOut />} />
          <Route path="/captain-home" element={ 
            <CaptainWrap >
              <CaptainHome />
            </CaptainWrap>
            } />
        </Routes>
      </div>
  
  )
}

export default App
