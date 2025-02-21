import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CaptainSignUp = () => {
  // const [data, setData] = useState({})
    const email = useRef('')
    const password = useRef('')
    const firstname = useRef('')
    const lastname = useRef('')

    const vehicleColor = useRef('')
    const vehiclePlate = useRef('')
    const vehicleCapacity = useRef('')
    const vehicleType = useRef('')
    
    const navigate=useNavigate();
    const submitHandler = (e) => {
      e.preventDefault()
      const enteredEmail = email.current.value
      const enteredPassword = password.current.value
      const enteredFirstname = firstname.current.value
      const enteredLastname = lastname.current.value
  
      const inputData={
        fullname:{
          firstname: enteredFirstname,
          lastname: enteredLastname,
        },
        email: enteredEmail,
        password: enteredPassword,
        status: "active",
        vehicle:{
          color:       vehicleColor.current.value,
          plate:       vehiclePlate.current.value,
          capacity:    vehicleCapacity.current.value,
          vehicleType: vehicleType.current.value,
        }
      }
      console.log(inputData);

      axios.post(`http://localhost:4000/captains/register`,inputData).then((response)=>{
        console.log(response.data);
        localStorage.setItem('captain-token',response.data.token);
        navigate('/captain-home');  
      }).catch((err)=>{
        console.log(err);
      })

      email.current.value="";
      password.current.value="";
      firstname.current.value="";
      lastname.current.value="";
      vehicleColor.current.value="",
      vehiclePlate.current.value="",
      vehicleCapacity.current.value="",
      vehicleType.current.value=""
    }
  
  return (
    <div className='h-screen relative w-full'>
    <div className='w-full flex flex-col gap-6 h-full p-7'>
      <h2 className='from-neutral-700 font-bold text-3xl'>SWIFTRIDE</h2>
      <div>
        <form onSubmit={submitHandler}>
          <div className='w-full'>
            <label className='w-full block font-medium' htmlFor='userPassword'>
              Enter Your FullName :
            </label>
            <div className='flex gap-3'>
              <input
                className='w-full border-none outline-none bg-pink-100 p-2 rounded-md'
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
              placeholder='username@gmail.com'
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
              placeholder='min 4 digits'
            />
          </div>
          <h5>Enter vehicle details:</h5>
          <div className='flex gap-2'>
          
          <div className='mt-2 w-full'>
            
            <input
              className='w-full border-none outline-none bg-pink-100 p-3 rounded-md'
              type='text'
              name='vehicleColor'
              id='vehicleColor'
              ref={vehicleColor}
              placeholder='color'
              required
            />
          </div>
          <div className='mt-2 w-full'>
            <input
              className='w-full border-none outline-none bg-pink-100 p-3 rounded-md'
              type='number'
              name='vehiclePlate'
              id='vehiclePlate'
              ref={vehiclePlate}
              required
              placeholder='plateNumber'
            />
          </div>
          </div>
         <div className='flex gap-2'>
         <div className='mt-2 w-full'>
            <input
              className='w-full border-none outline-none bg-pink-100 p-3 rounded-md'
              type='number'
              name='vehicleCapacity'
              id='vehicleCapacity'
              ref={vehicleCapacity}
              placeholder='capacity'
              required
            />
          </div>
          <div className='mt-2 w-full'>
            <select
              className='w-full border-none outline-none bg-pink-100 p-3 rounded-md'
              name='vehicleType'
              id='vehicleType'
              ref={vehicleType}
              required
            >
              <option value=''>Select vehicle type</option>
              <option value='car'>Car</option>
              <option value='motorcycle'>Motorcycle</option>
              <option value='auto'>Auto</option>
            </select>
          </div>
         </div>
          
          <button
            className='w-full mt-3 bg-black text-white p-3 mb-4 rounded-md'
            type='submit'
          >
            Create account
          </button>
        </form>
        <p className='text-black'>
          Alredy have an account ?{' '}
          <Link className='text-blue-600' to={'/captainlogin'}>
           Login
          </Link>
        </p>
      </div>
    </div>

    <div className='p-7 absolute bottom-0 w-full'>
      <Link
        to={'/captainlogin'}
        className='flex justify-center font-bold w-full mt-3 bg-red-400 text-white p-2  rounded-md'
      >
        SignUp as a user
      </Link>
    </div>
  </div>
  )
}

export default CaptainSignUp
