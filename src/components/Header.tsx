import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'

export const Header = ({navopen, setnavopen}) => {

  let toggleNav = ()=> {
    setnavopen(!navopen)
    console.log(navopen)
  }

  return (
    <div className='flex justify-between bg-violet-900'>
      <div className='text-stone-300 font-bold px-5 py-3 bg-violet-900'>LOGGER</div>
      <div>
        <div onClick={toggleNav} className='border sm:hidden border-stone-600 text-stone-200 mt-2 mx-5 cursor-pointer rounded px-2 py-1'>
          <RxHamburgerMenu/>
        </div>
      </div>
    </div>
  )
}
