import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const userContext= createContext()
const MainContext = ({children}) => {

  const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")) || null)
  const [events, setevents] = useState([])
  const [toggleMenu, settoggleMenu] = useState(false)
  const [bookedEvents, setbookedEvents] = useState([])
  
console.log(events)
  
  return (
    <div>
        <userContext.Provider value={{user,setuser,settoggleMenu,toggleMenu,events,setevents,setbookedEvents,bookedEvents}}>
            {children}
        </userContext.Provider>
    </div>
  )
}

export default MainContext