import React from 'react'
import { Navigate } from 'react-router-dom'

const Unauth = ({children}) => {
  const loggeduser= JSON.parse(localStorage.getItem("loggeduser"))

  return !loggeduser? children : <Navigate to={`/`}/>
}

export default Unauth