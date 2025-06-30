import { useState } from 'react'
import './App.css'
import MainRouter from './Router/MainRouter'
import Nav from './components/Nav'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className='w-screen flex items-center justify-center flex-col'>
      <div className=''>
        <Nav/>
      </div>
      <MainRouter/>
      <ToastContainer position='top-center' autoClose='200'/>
    </div>
  )
}

export default App
