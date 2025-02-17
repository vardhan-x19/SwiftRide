import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/user'
const UserSignUp = () => {
 
  const dispatch=useDispatch();
  const email = useRef('')
  const password = useRef('')
  const firstname = useRef('')
  const lastname = useRef('')
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const enteredEmail = email.current.value
    const enteredPassword = password.current.value
    const enteredFirstname = firstname.current.value
    const enteredLastname = lastname.current.value

    const inputData = {
      email: enteredEmail,
      password: enteredPassword,
      fullname:{
        firstname: enteredFirstname,
        lastname: enteredLastname
      }
    }

  

    try {
      const response = await axios.post(`http://localhost:4000/users/register`, inputData)
      console.log(response.data);
      dispatch(setUser(response.data));
      localStorage.setItem('token',response.data.token);
      navigate('/home')
    } catch (error) {
      console.log(error)
    }

    email.current.value = ""
    password.current.value = ""
    firstname.current.value = ""
    lastname.current.value = ""
  }

  return (
    <div className='h-screen relative w-full'>
      <div className='w-full flex flex-col gap-6 h-full p-7'>
        <h2 className='from-neutral-700 font-bold text-3xl'>SWIFTRIDE</h2>
        <div>
          <form onSubmit={submitHandler}>
            <div className='w-full'>
              <label className='w-full block font-medium' htmlFor='firstname'>
                Enter Your FullName :
              </label>
              <div className='flex gap-3'>
                <input
                  className='w-full border-none outline-none bg-pink-100 p-3 rounded-md'
                  type='text'
                  placeholder='FirstName'
                  name='firstname'
                  id='firstname'
                  ref={firstname}
                  required
                />
                <input
                  className='w-full border-none outline-none bg-pink-100 p-3 rounded-md'
                  type='text'
                  placeholder='Lastname'
                  name='lastname'
                  id='lastname'
                  ref={lastname}
                  required
                />
              </div>
            </div>
            <div className='mt-2 w-full'>
              <label className='w-full block font-medium' htmlFor='userMail'>
                Enter Your Email :
              </label>
              <input
                className='w-full border-none outline-none bg-pink-100 p-3 rounded-md'
                type='email'
                name='userMail'
                id='userMail'
                ref={email}
                required
              />
            </div>
            <div className='mt-2 w-full'>
              <label className='w-full block font-medium' htmlFor='password'>
                Enter Your Password :
              </label>
              <input
                className='w-full border-none outline-none bg-pink-100 p-3 rounded-md'
                type='password'
                name='password'
                id='password'
                ref={password}
                required
              />
            </div>
            <button
              className='w-full mt-3 bg-black text-white p-3 mb-4 rounded-md'
              type='submit'
            >
              Login
            </button>
          </form>
          <p className='text-black'>
            Already have an account?{' '}
            <Link className='text-blue-600' to={'/userLogin'}>
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className='p-7 absolute bottom-0 w-full'>
        <Link
          to={'/captainlogin'}
          className='flex justify-center font-bold w-full mt-3 bg-red-400 text-white p-3 mb-4 rounded-md'
        >
          SignUp as a Captain
        </Link>
      </div>
    </div>
  )
}

export default UserSignUp
