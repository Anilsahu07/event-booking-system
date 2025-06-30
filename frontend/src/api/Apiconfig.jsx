import axios from 'axios'

const instance= axios.create({
    baseURL:"https://event-booking-system-2-twry.onrender.com/api",
    withCredentials:true
})

  
export default instance