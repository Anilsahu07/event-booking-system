import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../context/MainContext'
import axios from '../api/Apiconfig'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'




const Home = () => {
  const {events,setevents,setbookedEvents,bookedEvents}= useContext(userContext)
  const navigate= useNavigate()
  

  const apps= JSON.parse(localStorage.getItem("loggeduser"))


  const fetchEvents=async()=>{
       const {data}=await axios.get("/events/",{withCredentials:true})
       setevents(data)
       localStorage.setItem('events', JSON.stringify(data))
    }

    useEffect(() => {
      if (!events || events.length === 0) {
      fetchEvents()
    }
    }, [])
  

  
  
  const deleteEvent=(id)=>{
    try {
      axios.delete(`/events/${id}`,{withCredentials:true})
      const deletedEvents= events.filter(e=>e._id !==id)
      setevents(deletedEvents)
      localStorage.setItem('events', JSON.stringify(deletedEvents));
      toast.success("Event Deleted Successful")
    } catch (error) {
      console.log("Error in deleting", error);
      toast.success("Event delete Unsuccessful")
    }

  }
  


  const updateEvent=(id)=>{
    navigate(`events/update/${id}`)
  }
  


    useEffect(() => {
      const getBooked= JSON.parse(localStorage.getItem("booked"))
      if (getBooked) {
        setbookedEvents(getBooked)
      }
    }, [])
    
    useEffect(() => {
     localStorage.setItem("booked", JSON.stringify(bookedEvents))
    }, [bookedEvents])


  const booked=(id)=>{
    const find= events.find(e=>e._id ===id)
    setbookedEvents([...bookedEvents,find])
    toast.success("Event booked by you!!")
    
  }
  const unbooked=(id)=>{
    const filter=bookedEvents.filter(e=>e._id !==id)
    setbookedEvents(filter)
     toast.success("Event Unbooked by you!!")
  }

  const navigateToCreate=()=>{
    navigate("/events/create")
  }
  const navigateToBooked=()=>{
    navigate("/events/booked")
  }
  
  
  return (
    <div className='w-screen justify-center flex flex-col p-3 items-center gap-5 h-fit'>

      {apps.user.role==="admin"?(
      <div className='lg:w-screen w-screen flex justify-center p-3 flex-wrap gap-1'>
        <div className='w-full text-center p-3 bg-blue-600 text-white rounded-xl font-[montserrat]'>
          <h2 className='lg:text-5xl text-3xl font-semibold lg:font-normal'>Product Launches <br /> and Epecial Events</h2>
          <p className='mt-4 lg:w-3/5 w-full m-auto font-light text-[whitesmoke]'>Craft one-of-a-kind special event and product launch parties that bring you community together, lift hearts, wind mind and get your audiance sharing their experience far and wide.</p>
          <button onClick={navigateToCreate} className='mt-4 text-black bg-white rounded px-3 py-2 text-sm font-[poppins] hover:bg-black hover:text-white'>Plan your Event</button>
       </div>
        {events?.map((e,i)=>(
          <div className='w-full lg:p-3 p-4  rounded-lg flex flex-col items-center lg:flex-row gap-4  h-fit lg:flex lg:items-center lg:gap-5 font-[montserrat] bg-green-300 transition-all duration-200 lg:mt-5 mt-8' key={i}>
            <img className='lg:w-64 lg:h-64 w-full rounded outline hover:scale-105 transition-all duration-150' src={e.photo} alt="" />
            <div className='flex flex-col justify-between h-full w-full bg-green-500 p-2 text-white text-center rounded outline hover:scale-105 transition-all duration-150 gap-4'>
              <h1 className='text-4xl font-semibold'><p className='text-black lg:text-sm underline font-normal text-xl'>Title</p>{e.title}</h1>
              <h1 className='text-sm'><p className='text-black lg:text-sm text-xl underline'>Date</p>{e.date}</h1>
            </div>
            <div className='flex flex-col h-full items-center justify-between text-center w-full p-2 bg-green-500 text-white rounded outline hover:scale-105 transition-all duration-150 gap-4'>
              <h1 className='text-xl'><p className='text-black lg:text-sm  text-xl underline'>Location</p>{e.location}</h1>
              <h1><p className='text-black lg:text-sm text-xl underline'>Event Description</p>{e.description}</h1>
            </div>
            
            <div className='w-full flex flex-col justify-center gap-4 h-full '>
              <button className='px-3 py-1 bg-black text-white rounded hover:bg-white hover:text-black hover:outline transition-all duration-150' onClick={()=>deleteEvent(e._id)}>delete</button>
              <button className='px-3 py-1 bg-black text-white rounded hover:bg-white hover:text-black hover:outline transition-all duration-150' onClick={()=>updateEvent(e._id)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
      
      ):
     
      <div className='flex flex-col items-center lg:gap-4 '>
         <div className='w-full text-center mt-2 p-3 bg-blue-700 text-white rounded-xl font-[montserrat]'>
          <h2 className='lg:text-5xl text-3xl lg:font-normal font-semibold text-center'>Product Launches <br /> and Epecial Events</h2>
          <p className='mt-4 lg:w-3/5 w-full m-auto font-light text-[whitesmoke]'>Craft one-of-a-kind special event and product launch parties that bring you community together, lift hearts, wind mind and get your audiance sharing their experience far and wide.</p>
          <button onClick={navigateToBooked} className='mt-4 text-black bg-white rounded px-3 py-2 text-sm font-[poppins] hover:bg-black hover:text-white'>Get your Event</button>
       </div>
      {events.length === 0 ? (
      <p>Fetching...</p>
        ) : 
      (
      events.map((e, i) => (
      <div
       className='w-full lg:p-3 p-4  rounded-lg flex flex-col items-center lg:flex-row gap-2  h-fit lg:flex lg:items-center lg:gap-5 font-[montserrat] bg-green-300  transition-all duration-200 lg:mt-5 mt-8'
        key={i}
      >
        <img className='lg:w-[300px] w-full rounded-xl outline outline-black hover:scale-105 transition-all duration-150' src={e.photo} alt="" />
        <div className="flex flex-col gap-10 items-center h-full w-full bg-green-500 p-2 text-white text-center rounded outline transition-all duration-150 hover:scale-105">
          <h1 className="text-4xl font-semibold"><p className='text-black lg:text-sm text-xl underline font-normal'>Title</p>{e.title}</h1>
          <h1 className="text-sm"><p className='text-black lg:text-sm text-xl underline'>Time</p>{e.date}</h1>
        </div>
        <div className="flex flex-col gap-10 h-full items-center justify-between text-center w-full p-2 bg-green-500 text-white rounded outline transition-all duration-150 hover:scale-105">
          <h1 className="text-xl"><p className='text-black lg:text-sm text-xl underline'>Location</p>{e.location}</h1>
          <h1><p className='text-black lg:text-sm text-xl underline'>Event Description</p>{e.description}</h1>
        </div>
        <Link className='w-full px-3 py-2 bg-black text-white rounded flex justify-center hover:bg-white hover:text-black hover:outline transition-all duration-150'>
          {bookedEvents.find(event => event._id === e._id) ? (
            <button  onClick={() => unbooked(e._id)}>Remove from booking</button>
          ) : (
            <button onClick={() => booked(e._id)}>Book this event</button>
          )}
        </Link>
      </div>
    ))
  )}
  </div>
      }
    </div>
  )
}

export default Home