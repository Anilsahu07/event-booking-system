import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from  '../api/Apiconfig'
import { userContext } from '../context/MainContext'
import { toast } from 'react-toastify'

const Events = () => {
  const {events,setevents}=useContext(userContext)
  const {register,handleSubmit}= useForm()
  
 const handleCreateEvents=async(event)=>{
  try {
    const {data}= await axios.post("/events/create",event,{withCredentials:true})
    const updatedEvent= [...events,data]
    setevents(updatedEvent)
    toast.success("Event Created by Admin")
    localStorage.setItem('events', JSON.stringify(updatedEvent))
  } catch (error) {
    console.log("You are not a admin,", error);
    toast.success("Event not Created or you not the Admin")
  }
    
 }


  return (
    <div className='w-screen lg:h-screen h-[92vh] flex lg:flex-row flex-col-reverse lg:justify-center justify-evenly items-center p-4 lg:gap-2 gap-5 bg-gray-200'>
      <form className='lg:w-1/2 w-full flex flex-col items-center lg:bordr border-black rounded-2xl text-center lg:p-5 p-4 lg:h-fit h-fit lg:justify-center gap-4 bg-red-300 font-[montserrat] justify-center' action="" onSubmit={handleSubmit(handleCreateEvents)}>
        <h1 className='lg:text-3xl text-5xl font-semibold'>Making for you...</h1>
        <h1 className=''>Create Events for the people,as this right is only given <br /> to the Admin's only!!</h1>
        <input {...register("photo")} className='mt-2 border-b-2 border-black rounded p-2 lg:w-3/4 w-full' type="url" placeholder='Enter image URL' />
        <input {...register("title")} className=' border-b-2 border-black rounded p-2 lg:w-3/4 w-full' type="text" placeholder='title...' />
        <input {...register("date")} className=' border-b-2 border-black rounded p-2 lg:w-3/4 w-full' type="date" placeholder='00/00/0000'/>
        <input {...register("location")} className=' border-b-2 border-black rounded lg:w-3/4 p-2 w-full' type="text" placeholder='Bhopal...' />
        <input {...register("description")} className=' border-b-2 border-black rounded p-2 lg:w-3/4 w-full' type="text" placeholder='Event description' />
        <button className='bg-black px-5 py-2 text-white rounded lg:w-1/3 w-fit' type='submit'>Event <i className="ri-arrow-turn-forward-fill"></i></button>
      </form>
      <div className='w-full lg:w-1/2 flex items-center gap-3'>
        <div className='flex flex-col gap-3 items-center justify-center w-screen'>
           <img className='lg:w-[500px] hover:scale-105 transition-all duration-150 rounded-xl' src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=1169&auto=format&fit=crop& ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img className='lg:w-[500px]  hover:scale-105 transition-all duration-150 rounded-xl' src="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D" alt="" />
        
        </div>
        <div className='flex flex-col gap-3 items-center justify-center w-screen'>
          <img className='lg:w-[400px] hover:scale-105 transition-all duration-150 rounded-xl' src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img className='lg:w-[400px] hover:scale-105 transition-all duration-150 rounded-xl' src="https://plus.unsplash.com/premium_photo-1681841703443-53de247ce32b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZyUyMGV2ZW50fGVufDB8fDB8fHww" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Events