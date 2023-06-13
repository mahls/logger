import React, {PureComponent} from 'react'
import {useState} from 'react'
import { LineChart, Line } from 'recharts';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, } from 'recharts';
import Fade from 'react-reveal/Fade';


// study card
let Studycard = ({records}) => {
  
  const totalStudy = records.reduce((acc, record) => {
    return acc + record.study;
  }, 0);

  return(
    <div>
      <div className='bg-orange-500 mt-5  py-5 px-5 sm:w-[25vw] flex flex-col sm:flex-none  rounded text-white hover:scale-105 transition'>
        <div className='font-bold text-5xl '>Study</div>
        <div className=''>{totalStudy} hours</div>
      </div>
    </div>
  )
}

// exercise card
let Exercisecard = ({records}) => {
  

  const totalExercise = records.reduce((acc, record) => {
    return acc + record.exercise;
  }, 0);

  return(
    <div>
      <div className='bg-green-500 mt-5 py-5 px-5 sm:w-[25vw] flex flex-col flex-none sm:justify-between rounded text-white hover:scale-105 transition'>
        <div className='font-bold text-5xl'>Exercise</div>
        <div className=''>{totalExercise} hours</div>
      </div>
    </div>
  )
}

// leuisure card
let Leisurecard = ({records}) => {

  const totalLeisure = records.reduce((acc, record) => {
    return acc + record.leisure;
  }, 0);

  return(
    <div>
      <div className='bg-blue-500 mt-5 py-5 px-5 sm:w-[25vw] flex flex-col rounded text-white hover:scale-105 transition'>
        <div className='font-bold text-5xl'>Leisure</div>
        <div className=''>{totalLeisure} hours</div>
      </div>
    </div>
  )
}

// dashboard
export const Dashboard = ({records}) => {

  const totalStudy = records.reduce((acc, record) => {
    return acc + record.study;
  }, 0);

  const totalExercise = records.reduce((acc, record) => {
    return acc + record.exercise;
  }, 0); 

  const totalLeisure = records.reduce((acc, record) => {
    return acc + record.leisure;
  }, 0);

  
    const data = [
    { name: 'Study', data: totalStudy },
    { name: 'Exercise', data: totalExercise },
    { name: 'Leisure', data: totalLeisure },
  ];

const data2 = [
  {
    subject: 'Study',
    A: totalStudy,
    fullMark: 150,
  },
  {
    subject: 'Exercise',
    A: totalExercise,
    fullMark: 150,
  },
  {
    subject: 'Lesuire',
    A: totalLeisure,
    fullMark: 150,
  },

];


  return (
    <Fade>

    <div>

    <div className='flex flex-col h-screen sm:grid sm:grid-cols-3 sm:gap-5 px-5 bg-stone-900'>
      
      <Studycard records={records}/>
      <Exercisecard records={records}/>
      <Leisurecard records={records}/>
     
      <BarChart width={300} height={300} data={data} className='mt-10' >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="data" fill="#8884d8" />
      </BarChart>
      
      <div className=''>
      <ResponsiveContainer >
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data2}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="user" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      </div>

    </div>


    </div>
    </Fade>
  )
}
