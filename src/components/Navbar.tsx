import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

  let menuoption = 'px-5 py-5 border-b border-stone-800 hover:bg-stone-900 hover:opacity-75 cursor-pointer'

  return (
    <div className=' bg-stone-950 h-screen w-[20vw] text-stone-300'>
      <NavLink to='/'><div className={menuoption}>Dashboard</div></NavLink>
      <NavLink to='/settings'><div className={menuoption}>Settings</div></NavLink>
      <NavLink to='/notes'><div className={menuoption}>Notes</div></NavLink>
    </div>
  )
}
