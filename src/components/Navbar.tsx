import React from 'react'
import { NavLink } from 'react-router-dom';

import {RxDashboard} from 'react-icons/rx'
import {CgNotes} from 'react-icons/cg'
import {VscSettings} from 'react-icons/vsc'
import {LuSettings2} from 'react-icons/lu'
import {FiShield} from 'react-icons/fi'

export const Navbar = ({navopen, setnavopen}) => {

  let menuoption = 'font-bold text-lg flex px-5 py-5 border-b border-stone-800 hover:bg-stone-900 hover:opacity-75 cursor-pointer'
  let activeStyle = 'bg-orange-200'

  return (
    <div className='hidden sm:block bg-stone-950 h-screen w-[20vw] text-stone-300'>
      <NavLink to='/'>
        <div className={menuoption}> 
          <RxDashboard className="mt-1.5 mr-2"/> Dashboard
        </div>
      </NavLink>
      <NavLink to='/settings' className={({isActive})=> isActive ? activeStyle : undefined}>
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
  )
}
