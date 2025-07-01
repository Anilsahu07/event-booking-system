import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { userContext } from '../context/MainContext'
import axios from '../api/Apiconfig'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Signup = () => {
  const { setuser} = useContext(userContext)
  
  const { register, handleSubmit,reset } = useForm()
  const navigate= useNavigate()



  const handleSubmitUser = async(userDetails) => {
    console.log(userDetails);
    
    try {
      const {data} = await axios.post("/users/signup", userDetails)
      localStorage.setItem("user", JSON.stringify(data))
      setuser(data)
      navigate("/login")
      reset()
      toast.success("User Registered")
    } catch (error) {
      console.log("Signup Error:", error)
      toast.success("User Registered Unsuccessful")
    }
  }

  return (
    <div className='w-screen h-[88vh] flex justify-center items-center p-3'>
      <form className='flex flex-col items-center gap-2 p-4 outline  rounded-xl w-full lg:w-1/4 bg-pink-300' onSubmit={handleSubmit(handleSubmitUser)}>
        <input {...register("image",{required:true})} className=' p-2 w-full  border-b border-black rounded' type="url" placeholder='User Profile image' />
        <input {...register("username")} className='p-2 border-b border-black rounded w-full' type="text" placeholder='Alex Mercer-x' />
        <input {...register("email",{required:true})} className='border-b border-black rounded p-2 w-full' type="email" placeholder='example@gmail.com' />
        <input {...register("password",{required:true})} className='border-b border-black rounded p-2 w-full' type="password" placeholder='****' />
        <select className='border-b border-black rounded p-2 w-full' {...register("role")} defaultValue="user">
          <option value="user">User</option>
          {/* <option value="admin">Admin</option> */}
        </select>
          <div className='flex flex-col items-center w-full justify-around mt-3 gap-2'>
              <button type='submit' className='bg-red-600 text-white px-4 py-2 rounded'>Signup</button>
            <div className='flex items-center gap-3'>
             <p className='text-gray-800 font-[montserrat] lg:text-sm text-[13px]'>Already have an account?</p>
              <Link className='text-blue-500' to={`/login`}>Login</Link>
          </div>
          </div>
      </form>
    </div>
  )
}

export default Signup
