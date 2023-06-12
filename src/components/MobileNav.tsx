import React from 'react'
import {RxCross2} from 'react-icons/rx'
import { NavLink } from 'react-router-dom';
import {RxDashboard} from 'react-icons/rx'
import {CgNotes} from 'react-icons/cg'
import {VscSettings} from 'react-icons/vsc'
import {LuSettings2} from 'react-icons/lu'
import {FiShield} from 'react-icons/fi'

export const MobileNav = ({navopen, setnavopen}) => {

  let navStyle = `${navopen ? 'fixed z-50 bg-stone-900 top-0 w-screen h-screen' : 'hidden opacity-0'}`
  let menuoption = 'font-bold text-stone-200 text-lg flex px-5 py-5 border-b border-stone-800 hover:bg-stone-900 hover:opacity-75 cursor-pointer'
  
  let closeNav = () => {
    setnavopen(false)
    console.log(navopen)
  }

  return (
    <div onClick={closeNav} className='fixed z-50 bg-stone-900 top-0 w-screen h-screen'>
      <div className='flex justify-end px-5 py-5 text-white text-xl font-extrabold'>
        <RxCross2 className='cursor-pointer'/>
      </div>
      <div>
        <NavLink to='/'>
          <div className={menuoption}> 
          <RxDashboard className="mt-1.5 mr-2"/> Dashboard
          </div>
        </NavLink>
      
      <NavLink to='/settings'>
        <div className={menuoption}>
          <LuSettings2 className='mt-1.5 mr-2'/> Settings
        </div>
      </NavLink>
      
        <NavLink to='/notes'>
        <div className={menuoption}>
          <CgNotes className='mt-1.5 mr-2'/>  Notes
        </div>
      </NavLink>
      
        <NavLink to='/Achievements'>
        <div className={menuoption}>
          <FiShield className='mt-1.5 mr-2'/>Achievements
        </div>
      </NavLink>

      </div>
    </div>
  )
}
