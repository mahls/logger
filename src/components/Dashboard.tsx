import React from 'react'
import {useState} from 'react'

let Studycard = ({records}) => {
  
  const totalStudy = records.reduce((acc, record) => {
    return acc + record.study;
  }, 0);

  return(
    <div>
      <div className='bg-orange-500 mt-5 py-5 px-5 w-[25vw] flex justify-between rounded text-white'>
        <div className='font-bold text-5xl '>Study</div>
        <div className=''>{totalStudy} hours</div>
      </div>
    </div>
  )
}

let Exercisecard = ({records}) => {
  

  const totalExercise = records.reduce((acc, record) => {
    return acc + record.exercise;
  }, 0);

  return(
    <div>
      <div className='bg-green-500 mt-5 py-5 px-5 w-[25vw] flex justify-between rounded text-white'>
        <div className='font-bold text-5xl'>Exercise</div>
        <div className=''>{totalExercise} hours</div>
      </div>
    </div>
  )
}

let Lesuirecard = ({records}) => {
  

  const totalLesuire = records.reduce((acc, record) => {
    return acc + record.lesuire;
  }, 0);

  return(
    <div>
      <div className='bg-blue-500 mt-5 py-5 px-5 w-[25vw] flex justify-between rounded text-white'>
        <div className='font-bold text-5xl'>Lesuire</div>
        <div className=''>{totalLesuire} hours</div>
      </div>
    </div>
  )
}




export const Dashboard = ({records}) => {
  
  console.log(records)

  return (
    <>
    <div className='grid grid-cols-3 w-[80vw] px-5 bg-stone-900'>
      <Studycard records={records}/>
      <Exercisecard records={records}/>
      <Lesuirecard records={records}/>
    </div>
    </>
  )
}
