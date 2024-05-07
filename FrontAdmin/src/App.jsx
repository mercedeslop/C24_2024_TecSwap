import { useState } from 'react'
import './App.css'
import  Header from './header'
import Sidebar from './Sidebar'
import Home from './Home'
function App() {

  return (
  <div className='grid-container'>
    <Header />
    <div><Sidebar /></div>
    <Home />
  </div>
  )
}

export default App
