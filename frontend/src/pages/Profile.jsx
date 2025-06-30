
const Profile = () => {
    const apps= JSON.parse(localStorage.getItem("loggeduser"))

    
  return (
    <div className='w-screen h-[92vh] flex justify-center items-center flex-wrap p-3 lg:bg-white bg-black'>
      {apps && <div className='w-fit flex flex-col items-center gap-3 text-center '>
        <img className='lg:w-56 lg:h-56 w-52 h-52 rounded-full outline lg:outline-red-400 outline-blue-500 lg:object-cover object-cover' src={apps.image} alt="" />
        <h1 className='text-2xl font-normal text-pink-500 mt-3 font-[poppins]'>{apps.username}</h1>
        <h1 className='text-4xl font-[montserrat] font-semibold lg:text-black text-white'>{apps.email}</h1>
        <h1 className='text-xl font-[montserrat] text-blue-600 mt-2'>{apps.role}</h1>
        <h1 className='text-2xl'>{"*".repeat(apps.password.length)}</h1>
      </div>
      }
    </div>
  )
}

export default Profile