import React from 'react'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let Studycard = ({records, setrecords}) => {

  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => addRecord(data);

  let addRecord = (data) => {
    console.log(data)
    let studyHours = parseInt(data.study)
    setrecords([...records, {id:Math.random(), study: studyHours, exercise: 0, leisure: 0}]) 
    reset()
  }

  return(
    <div>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className=' border border-stone-800 text-white rounded px-5 p-5 bg-orange-500'>
        <div>
          <p className='text-3xl font-bold'>Study</p>
          <p className='text-lg font-bold'>Enter a number </p>
          <div className='flex flex-col'>
              <input className='rounded text-black px-2 mt-2 w-full' 
              {...register("study", {required: true})}
            />
              <button className='rounded bg-blue-500 mt-2 hover:bg-blue-700 transition w-full'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}



let Exercisecard = ({records, setrecords}) => {

  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => addRecord(data);

  let addRecord = (data) => {
    let exerciseHours = parseInt(data.exercise)
    console.log(exerciseHours)
    setrecords([...records, {id:Math.random(), study: 0, exercise: exerciseHours, leisure: 0}]) 
    reset()
  }

  return(
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=' border border-stone-800 text-white rounded px-5 py-5 bg-green-500'>
        <div>
          <p className='text-3xl font-bold'>Exercise</p>
          <p className='text-lg font-bold'>Enter a number </p>
          <div className='flex flex-col'>
              <input className='rounded text-black px-2 mt-2 w-full' {...register("exercise", {required: true})} />
              <button className='rounded bg-blue-500 mt-2 hover:bg-blue-700 transition w-full'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}



let Lesuirecard = ({records, setrecords}) => {


  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const onSubmit = data => addRecord(data);

  let addRecord = (data) => {
    let leisureHours = parseInt(data.leisure)
    setrecords([...records, {id:Math.random(), study: 0, exercise: 0, leisure: leisureHours}]) 
    reset()
  }


  return(
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=' border border-stone-800 text-white rounded px-5 py-5 bg-blue-600'>
        <div>
          <p className='text-3xl font-bold'>Leisure</p>
          <p className='text-lg font-bold'>Enter a number </p>
          <div className='flex flex-col'>
              <input className='rounded text-black px-2 mt-2 w-full' {...register("leisure", {required: true})}/>
              <button className='rounded bg-blue-500 mt-2 hover:bg-blue-700 transition w-full'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}



export const Settings = ({records, setrecords}) => {
  return (
    <div className='h-screen w-[80vw] bg-stone-900 flex flex-col sm:grid sm:grid-cols-3 sm:gap-3 px-5 py-5'>
      <Studycard records={records} setrecords={setrecords}/>
      <Exercisecard records={records} setrecords={setrecords}/>
      <Lesuirecard records={records} setrecords={setrecords}/>
    </div>
  )
}
