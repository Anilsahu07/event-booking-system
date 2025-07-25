
const Profile = () => {
    const apps= JSON.parse(localStorage.getItem("loggeduser"))

    
  return (
    <div className='w-screen h-[92vh] flex justify-center items-center p-3 lg:bg-white bg-black'>
      <div className='w-fit flex flex-col items-center gap-3 text-center border lg:border-black border-white p-5 rounded-xl'>
        <img className='lg:w-56 lg:h-56 w-52 h-52 rounded-full outline lg:outline-red-400 outline-blue-500 lg:object-cover object-cover' src={apps.user.image} alt="" />
        <h1 className='text-2xl font-normal text-pink-500 mt-3 font-[poppins]'>{apps.user.username}</h1>
        <h1 className='lg:text-4xl text-3xl font-[montserrat] font-semibold lg:text-black text-white'>{apps.user.email}</h1>
        <h1 className='text-3xl font-[montserrat] text-blue-600 mt-2'>{apps.user.role}</h1>
      </div>
    </div>
  )
}

export default Profile