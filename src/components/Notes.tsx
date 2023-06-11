import {react} from 'react'
import {useState, useEffect} from 'react'
import {BsTrash2} from 'react-icons/bs'
import {TiTickOutline} from 'react-icons/ti'
import { useForm } from "react-hook-form";

// FORM
let Form = ({todos, settodos}) => {

  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data)=>{addTodo(data)}

  const [input, setinput] = useState('')
  
  let addTodo = (data) => {
    settodos([...todos, {id: Math.random(), text: data.input, completed: false}])
    console.log(todos)
    reset()
  }

  return (
    <div>

      <form   onSubmit={handleSubmit(onSubmit)}>
        {errors.exampleRequired && <span>This field is required</span>}
        <input onChange={(e)=>{setinput(e.target.value)}} 
          className='focus:ring-0 focus:border-transparent focus:ring-offset-0 px-2 py-1 rounded bg-stone-800 mt-5 mb-5 w-[40vw]'
          {...register("input", { required: true })}
        />
        <button type='submit' className='bg-blue-700 rounded text-stone-300 px-5 ml-2 py-1 hover:bg-blue-900 transition '>submit</button>
      </form>

    </div>
  )
}
 

// TODO
let Todo = ({id, todos, todo, settodos}) => {


  let tick = `mr-2 border border-stone-500 rounded flex py-2 px-2 cursor-pointer bg-stone-800 hover:border-green-500`
  let text = `bg-stone-800 opacity-75 rounded flex-grow mr-2 border-l-4 px-2 ${ todo.completed ? 'border-green-500' : 'border-blue-700'} backdrop-blur-sm`

  let deleteTodo = ()=> {
    settodos(prevTodos => prevTodos.filter(item => item.id !== todo.id));
  }
  
  let completeTodo = ()=> {
    const updatedTasks = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    settodos(updatedTasks);
  }


  return(
    <div className='flex justify-between mt-2'>
      <div className={text}>{todo.text}</div>
      <div className='flex'>
        <div className={tick} onClick={completeTodo}><TiTickOutline/></div>
        <div className='border border-stone-500 rounded px-2 py-2 cursor-pointer bg-stone-800 hover:border-red-500' onClick={deleteTodo}><BsTrash2/></div>
      </div>
    </div>
  )
}


// Main Notes
export const Notes = ()=> {

  const [todos, settodos] = useState([])

  return(
    <>
    <div className='text-stone-300 flex justify-center w-[80vw] bg-stone-900 h-screen'>
      <div className='flex-col'>
      <div>
        <p className='text-5xl text-white py-5 font-bold'>Notes</p>
      </div>
      <div className=''>
      <Form todos={todos} settodos={settodos}/>
      <div className=''>
      {
        todos.map((todo)=>{
          return <Todo  todos={todos} id={todo.id} key={todo.id} todo={todo} settodos={settodos}/>
        })
      }
      </div>
      </div>
      </div>
    </div>
    </>
  )
}
