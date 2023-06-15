import React from 'react'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

let Studycard = ({records, setrecords}) => {

  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => addRecord(data);

  let addRecord = (data) => {
    let studyHours = parseInt(data.study)
    setrecords([...records, {id:Math.random(), study: studyHours, exercise: 0, leisure: 0}]) 
    reset()
  }

  return(
    <div>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className=' border border-stone-800 text-white rounded px-5 p-5 bg-orange-500 hover:scale-105 transition'>
        <div>
          <p className='text-3xl font-bold'>Study</p>
          <p className='text-lg font-bold'>Enter a number </p>
          <div className='flex flex-col'>
              <input className='rounded text-black px-2 mt-2 w-full' type="number" autocomplete="off" 
              {...register("study", {required: true, max: 15})}
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
    setrecords([...records, {id:Math.random(), study: 0, exercise: exerciseHours, leisure: 0}]) 
    reset()
  }

  return(
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=' border border-stone-800 text-white rounded px-5 py-5 bg-green-500 hover:scale-105 transition'>
        <div>
          <p className='text-3xl font-bold'>Exercise</p>
          <p className='text-lg font-bold'>Enter a number </p>
          <div className='flex flex-col'>
              <input autocomplete="off" type="number" className='rounded text-black px-2 mt-2 w-full'
              {...register("exercise", {required: true, max: 15})} />
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
        className=' border border-stone-800 text-white rounded px-5 py-5 bg-blue-600 hover:scale-105 transition'>
        <div>
          <p className='text-3xl font-bold'>Leisure</p>
          <p className='text-lg font-bold'>Enter a number </p>
          <div className='flex flex-col'>
              <input className='rounded text-black px-2 mt-2 w-full' type="number"
              autocomplete="off" {...register("leisure", {required: true, max: 15})}/>
              <button className='rounded bg-blue-500 mt-2 hover:bg-blue-700 transition w-full'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}


let Resetcard=({resetStudy, resetExercise, resetLeisuire})=>{

  let btn = 'hover:bg-red-800 mt-2 border border-red-500 transition text-bold text-white rounded w-full w-screen'
  
  return (
    <div className='rounded bg-stone-800 px-5 py-5 border border-stone-900 hover:scale-105 transition'>
      <div className='text-3xl font-bold text-white mb-2'>Reset</div>
      <div className='flex justify-center'>
        <button onClick={resetStudy} className={btn}>Study</button>
      </div>     
      <div className='flex justify-center'>
        <button onClick={resetExercise} className={btn}>Excecise</button>
      </div>     
      <div className=' flex justify-center'>
        <button onClick={resetLeisuire} className={btn}>Leisure</button>
      </div>
    </div>
  )
}

let Modal=()=>{
  <div>
    hello
  </div>
}


export const Settings = ({records, setrecords}) => {


  let resetStudy =()=> {
    const updatedRecords = records.map((record) => ({...record, study: 0,}));
    setrecords(updatedRecords)
  }

  let resetExercise =()=> {
    const updatedRecords = records.map((record) => ({...record, exercise: 0,}));
    setrecords(updatedRecords)
  }

  let resetLeisuire =()=> {
    const updatedRecords = records.map((record) => ({...record, leisure: 0,}));
    setrecords(updatedRecords)
  }

  return (
    <Fade>
    <div className='h-screen w-[80vw] bg-stone-900 flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 sm:gap-3 px-5 py-5'>
      <Studycard records={records} setrecords={setrecords}/>
      <Exercisecard records={records} setrecords={setrecords}/>
      <Lesuirecard records={records} setrecords={setrecords}/>
      <Resetcard resetStudy={resetStudy} resetExercise={resetExercise} resetLeisuire={resetLeisuire}/>
    </div>
    </Fade>
  )
}
