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
    { id: Math.random(), study: 4, exercise: 2, lesuire: 2},
    { id: Math.random(), study: 2, exercise: 2, lesuire: 2},
  ])
  
  return (
    <div className='bg-stone-900'>
      <BrowserRouter>
        <div>
        <Header/>
        </div>
        <div className='flex'>
          <Navbar />  
          <Routes>
            <Route path="/" element={<Dashboard records={records} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  )

}

export default App
