import axios from 'axios'

const instance= axios.create({
    baseURL:"https://event-booking-system-tbaa.onrender.com",
    withCredentials:true
})
  
export default instance