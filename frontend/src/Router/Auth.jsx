import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';

const Auth = ({children}) => {
    const loggeduser= JSON.parse(localStorage.getItem("loggeduser"))
    console.log(loggeduser);
    
   
   return loggeduser? children: <Navigate to={`/login`}/>
}

export default Auth