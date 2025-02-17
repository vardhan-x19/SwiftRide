import React from 'react'
import { useSelector } from 'react-redux'
const Home = () => {
  const userData=useSelector(store=>store.logInUser.user);
  console.log('userDtat',userData);
  return (
    <div>
      Home
    </div>
  )
}

export default Home
