import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Auth from './Auth'
import Events from '../pages/Events'
import Unauth from './Unauth'
import Update from '../pages/Update'
import BookedEvents from '../pages/BookedEvents'
import Profile from '../pages/Profile'
import Search from '../pages/Search'

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Unauth><Login/></Unauth>}/>

      <Route path='/' element={<Auth><Home/></Auth>}/>
      <Route path='/profile' element={<Auth><Profile/></Auth>}/>
      <Route path='/events/update/:id' element={<Auth><Update/></Auth>}/>
      <Route path='/events/create' element={<Auth><Events/></Auth>}/>
      <Route path='/events/booked/' element={<Auth><BookedEvents/></Auth>}/>
      <Route path='/events/search/' element={<Auth><Search/></Auth>}/>
    </Routes>
  )
}

export default MainRouter