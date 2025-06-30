import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { userContext } from '../context/MainContext'
import gsap from 'gsap'
import { toast } from 'react-toastify'


const Nav = () => {
  const {setuser,toggleMenu, settoggleMenu}= useContext(userContext)
  const loggeduser= JSON.parse(localStorage.getItem("loggeduser"))
  const navigate=useNavigate()
  

  const logout=()=>{
    setuser(null)
    localStorage.removeItem("loggeduser")
    toast.success("User Logged out!!")
    navigate('/login')
  }


  const toggle=()=>{
    settoggleMenu(!toggleMenu)
  }

  const divRef = useRef(null)
  const iconRef = useRef(null)

  // useEffect(() => {
   
  // }, []);
   gsap.to( divRef.current,{
      y:80,
      duration:1,
    })


  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      divRef.current &&
      !divRef.current.contains(event.target) &&
      iconRef.current &&
      !iconRef.current.contains(event.target)
    ) {
      settoggleMenu(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
  }, []);
  
  
  return (
    <div className='flex items-center gap-5 bg-black w-screen lg:px-20 h-20 text-white justify-between p-3'>
      <h1 className='font-[montserrat] lg:text-2xl lg:flex items-center gap-2 flex '><p className='text-orange-500 font-bold lg:text-4xl text-3xl'>EVENT</p> Makers</h1>
      {loggeduser? 
      <div className='flex gap-6 font-[poppins]'>
        <NavLink className={`hover:text-orange-600 lg:flex hidden`} to={`/`}>Home</NavLink>
        {loggeduser.user.role==="admin" ? <div><NavLink className={`hover:text-orange-600 lg:flex hidden`} to={`/events/create`}>Events</NavLink></div> :<div><NavLink className={`hover:text-orange-600 lg:flex hidden`} to={`/events/booked`}>Booked Events</NavLink></div>}
        <button className={`hover:text-orange-600 lg:flex hidden`} onClick={logout}>Logout</button>

        <div ref={iconRef} className='lg:hidden flex'>
          <button onClick={toggle} className='lg:hidden flex text-3xl'>
            {toggleMenu?<i className="ri-menu-3-line bg-white font-semibold rounded p-2 text-black"></i>:<i className="ri-menu-line  bg-white rounded p-2 text-black font-semibold"></i>}
          </button>
        <div ref={divRef} className='flex flex-col absolute right-0 top-0'>
        {
          (toggleMenu && loggeduser.user.role==="admin" )&& <div className='flex flex-col items-center justify-center gap-10 w-screen h-screen bg-gray-700'>
            <NavLink onClick={()=>settoggleMenu(false)} className={`hover:text-orange-600 text-3xl`} to={`/`}>Home</NavLink>
            <NavLink onClick={()=>settoggleMenu(false)} className={`hover:text-orange-600 text-3xl`} to={`/events/create`}>Create Events</NavLink>
            <button className={` bg-white text-2xl px-5 py-3 hover:bg-black hover:text-white hover:outline rounded  text-black`} onClick={() =>{logout(); settoggleMenu(false)}}>Logout</button>
          </div> 
          }

          {
            (toggleMenu && loggeduser.user.role==="user" ) &&  <div className='flex flex-col items-center outlin w-screen h-screen bg-gray-700 justify-center gap-10'>
            <NavLink onClick={()=>settoggleMenu(false)} className={`hover:text-orange-600 text-3xl`} to={`/`}>Home</NavLink>
            <NavLink onClick={()=>settoggleMenu(false)} className={`hover:text-orange-600 text-3xl`} to={`/events/booked`}>Booked Events</NavLink>
            <button className={`bg-white text-2xl px-5 py-3 hover:bg-black hover:text-white hover:outline rounded  text-black`} onClick={() =>{logout(); settoggleMenu(false)}}>Logout</button>
            </div>
          }
        </div>
      </div>
      </div>:
       <NavLink className={`hover:text-red-600 font-[poppins]`} to={`login`}>Login</NavLink>
      }
      
    </div>
  )
}

export default Nav