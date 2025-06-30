import React, { useContext } from 'react'
import { userContext } from '../context/MainContext'

const Profile = () => {
  const {user}=  useContext(userContext)
    console.log(user);
    

  return (
    <div>Profile</div>
  )
}

export default Profile