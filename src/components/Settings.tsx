import React from 'react'


let Studycard = () => {
  return(
    <div>
      <form className='border border-stone-800 text-white rounded px-10 py-5 bg-orange-500'>
        <div>
          <p className='text-3xl font-bold'>Study</p>
          <p className='text-lg font-bold'>Enter a number </p>
          <div className='flex flex-col'>
            <input className='rounded text-black px-2 mt-2 '/>
            <button className='rounded bg-blue-500 mt-2 hover:bg-blue-700 transition'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

let Exercisecard = () => {
  return(
    <div>
      <form className='border border-stone-800 text-white rounded px-10 py-5 bg-green-500'>
        <div>
          <p className='text-3xl font-bold'>Study</p>
          <p className='text-lg font-bold'>Enter a number </p>
          <div className='flex flex-col'>
            <input className='rounded text-black px-2 mt-2 '/>
            <button className='rounded bg-blue-500 mt-2 hover:bg-blue-700 transition'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

let Lesuirecard = () => {
  return(
    <div>
      <form className='border border-stone-800 text-white rounded px-10 py-5 bg-blue-600'>
        <div>
          <p className='text-3xl font-bold'>Study</p>
          <p className='text-lg font-bold'>Enter a number </p>
          <div className='flex flex-col'>
            <input className='rounded text-black px-2 mt-2'/>
            <button className='rounded bg-blue-500 mt-2 hover:bg-blue-700 transition'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}



export const Settings = () => {
  return (
    <div className='h-screen w-[80vw] bg-stone-900 flex justify-between px-5 py-5'>
      <Studycard/>
      <Exercisecard/>
      <Lesuirecard/>
    </div>
  )
}
