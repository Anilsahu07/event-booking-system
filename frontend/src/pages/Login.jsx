import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import axios from '../api/Apiconfig'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Login = () => {
  const navigate= useNavigate()
  
  const { register, handleSubmit } = useForm()

  const handleLoginUser = async(userDetails) => {
    try {
      const {data}=await axios.post("/users/login",userDetails)  
      localStorage.setItem("loggeduser", JSON.stringify(data))
      navigate("/")
      toast.success("Login successful")
    } catch (error) {
      console.log("Signup Error:", error)
      toast.success("Error in Logging In")
    }
  }

  return (
  <div className='w-screen h-[88vh] flex justify-center items-center p-3'>
        <form className='flex flex-col items-center gap-2 p-5 rounded-xl lg:w-1/4 w-full bg-yellow-200 outline' onSubmit={handleSubmit(handleLoginUser)}>
          <input {...register("email",{required:true})} className='border-b border-black rounded p-2 w-full' type="email" placeholder='example@gmail.com' />
          <input {...register("password",{required:true})} className='border-b border-black rounded p-2 w-full' type="password" placeholder='****' />
            <div className='flex flex-col items-center w-full justify-around mt-3 gap-2'>
                <button type='submit' className='bg-red-600 text-white px-4 py-2 rounded'>Login</button>
              <div className='flex items-center gap-3'>
               <p className='text-gray-800 font-[montserrat] lg:text-sm text-[13px]'>Don't have an account?</p>
                <Link className='text-blue-500' to={`/signup`}>Signup</Link>
            </div>
            </div>
        </form>
      </div>
  )
}

export default Login
