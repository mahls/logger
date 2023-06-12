import { useState } from 'react'
import './App.css'
import {Navbar} from './components/Navbar.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Dashboard} from './components/Dashboard.tsx'
import {Settings} from './components/Settings.tsx'
import {Notes} from './components/Notes.tsx'
import {Header} from './components/Header.tsx'

function App() {

 
  const [records, setrecords] = useState([
    { id: Math.random(), study: 0, exercise: 0, leisure: 0},
  ])

  const [navopen, setnavopen] = useState(false)
  
  return (
    <div className='bg-stone-900'>
      <BrowserRouter>
        <div>
        <Header navopen={navopen} setnavopen={setnavopen}/>
        </div>
        <div className='flex'>
          <Navbar navopen={navopen} setnavopen={setnavopen}  />  
          <Routes>
            <Route path="/" element={<Dashboard records={records} setrecords={setrecords} />} />
            <Route path="/settings" element={<Settings records={records} setrecords={setrecords} />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )

}

export default App
