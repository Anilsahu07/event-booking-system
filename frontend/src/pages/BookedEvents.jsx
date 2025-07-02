import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { userContext } from '../context/MainContext'

const BookedEvents = () => {
    const {bookedEvents,setbookedEvents}= useContext(userContext)
    
    useEffect(() => {
      const booked= JSON.parse(localStorage.getItem("booked"))
      if (booked) {
        setbookedEvents(booked)
      }
    }, [])
    

    
    
  return (
    <div className='lg:w-screen p-5 flex-wrap lg:flex lg:items-center gap-4 lg:justify-center'>
        {bookedEvents.length===0?<p className='text-center'>No events booked yet!!</p>: bookedEvents.map(e=>(
              <div key={e._id} className='lg:flex lg:flex-col lg:items-center lg:justify-center text-center lg:w-[500px] gap-3 p-3 outline rounded-xl font-[montserrat]'>
                <img className='lg:w-full w-full rounded-xl' src={e.photo} alt="404" />
                <h1 className='lg:text-5xl text-4xl font-semibold lg:underline'>{e.title} </h1>
                <h1 className='lg:flex-row flex flex-col items-center lg:gap-2 gap-0 text-xl mt-3'> <p className='text-2xl font-semibold'>Date:</p> {e.date} </h1>
                <h1 className='lg:flex-row flex flex-col items-center lg:gap-2 gap-0  text-xl mt-1'><p className='text-2xl font-semibold'>Location:</p>{e.location} </h1>
                <p className='text-sm mt-2'>{e.description} </p>
                <div className='mt-2'>
                  <button className='bg-blue-500 text-white px-3 py-2 rounded outline outline-black'>Pay to confirm</button>
                </div>
              </div>
        ))}
    </div>
  )
}

export default BookedEvents