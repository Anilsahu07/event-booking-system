import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { userContext } from '../context/MainContext'

const BookedEvents = () => {
    const {bookedEvents,setbookedEvents}= useContext(userContext)
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
      const booked= JSON.parse(localStorage.getItem("booked"))
      if (booked) {
        setbookedEvents(booked)
      }
    }, [])
    

    const toggleCard=(id)=>{
      setToggle(toggle===id? null :id)
    }
    
    
  return (
    <div className='lg:w-screen p-5 flex-wrap lg:flex lg:items-center gap-4 lg:justify-center'>
        {bookedEvents.length===0?<p className='text-center'>No events booked yet!!</p>: bookedEvents.map(e=>(
              <div key={e._id} className='lg:flex lg:flex-col lg:items-center lg:justify-center text-center lg:w-[300px] gap-2 p-3 pb-2 rounded-xl font-[montserrat] bg-slate-200'>
                <img className='lg:w-full w-full rounded-xl' src={e.photo} alt="404" />
                <h1 className='lg:text-3xl text-4xl font-semibold lg:underline'>{e.title} </h1>
                <h1 className='lg:flex-row flex flex-col items-center lg:gap-2 gap-0 mt-2 text-[15px]'> <p className='text-2xl font-semibold'>Date:</p> {e.date} </h1>
                <h1 className='lg:flex-row flex flex-col items-center lg:gap-1 gap-0 mt-0 text-sm'><p className='text-2xl font-semibold'>Location:</p><i class="ri-map-pin-line text-xl text-green-500"></i>{e.location} </h1>
                {toggle===e._id && <div>
                  <p className='text-sm mt-3'>{e.description} </p>
                  <div className='mt-2'>
                  <button className='bg-blue-500 text-white px-3 py-2 rounded outline outline-black'>Pay to confirm</button>
                  </div>
                </div>
                }
                <button className='text-blue-500 font-bold' onClick={()=>toggleCard(e._id)}>{toggle?"less":"more"}</button>
              </div>
        ))}
    </div>
  )
}

export default BookedEvents