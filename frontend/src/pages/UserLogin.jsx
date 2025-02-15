import React from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useState } from 'react'
const UserLogin = () => {
  const [data, setdata] = useState({})
  const  email = useRef('');
  const password = useRef('');
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    // console.log(enteredEmail, enteredPassword);
    setdata({
      email: enteredEmail,
      password: enteredPassword})
      console.log(data)
  };
  return (
    <div className=' h-screen relative w-full '>
        <div className='w-full flex flex-col gap-6 h-full p-7'>
            <h2 className='from-neutral-700 font-bold text-3xl'
            >SWIFTRIDE</h2>
            <div>
                <form  action=""
                onSubmit={submitHandler}
                >
                  <div className='w-full'>
                    <label className='w-full block   font-medium' htmlFor="userMail  ">Enter Your Email :</label>
                    <input className=' w-full border-none outline-none bg-pink-100 p-3 rounded-md ' type="email" name="userMail" id="userMail" ref={email} required />
                  </div>
                  <div className='mt-2 w-full'>
                      <label className='w-full block   font-medium' htmlFor="userPassword">Enter Your Password :</label>
                      <input  className=' w-full border-none outline-none bg-pink-100 p-3 rounded-md ' type="password" name="userPassword" id="userPassword" ref={password} required />
                  </div>
                
                  <button
                  className='w-full mt-3  bg-black text-white p-3 mb-4 rounded-md'
                  type='submit'  >Login</button>
                </form>
                <p className='text-black'>Dont'have an account <Link className='text-blue-600' to={'/usersignup'} >Create an account</Link></p>
            </div>
        </div>
        <div className='p-7 absolute bottom-0 w-full'>
        <Link  to={'/captainlogin'} className=' flex justify-center font-bold w-full mt-3 bg-red-400 text-white p-3 mb-4 rounded-md'
        >
          SignUp as a Captain
        </Link>
        </div>
    </div>
  )
}

export default UserLogin
