import {react} from 'react'
import {useState, useEffect} from 'react'
import {BsTrash2} from 'react-icons/bs'
import {TiTickOutline} from 'react-icons/ti'


// FORM
let Form = ({todos, settodos}) => {

  const [input, setinput] = useState('')
  
  let handleSubmit = (e) => {
    e.preventDefault()
    settodos([...todos, {id: Math.random(), text: input, completed: false}])
    console.log(todos)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>{setinput(e.target.value)}} className=' px-5 rounded bg-stone-800 mt-5 mb-5 w-[40vw]'/>
        <button type='submit' className='border border-blue-500 rounded text-stone-300 px-5 ml-2 '>submit</button>
      </form>
    </div>
  )
}
 

// TODO
let Todo = ({todo, settodos}) => {

  let deleteTodo = ()=> {

  }

  let addTodo = () => {

  }

  return(
    <div className='flex justify-between mt-2'>
      <div className='border-blue-500 flex-grow mr-2 border-l-4 px-2 border-blue-700'>{todo.text}</div>
      <div className='flex'>
        <div className='mr-2 border border-blue-500 rounded flex py-2 px-2 cursor-pointer '><TiTickOutline/></div>
        <div className='border border-blue-500 rounded px-2 py-2 cursor-pointer'><BsTrash2/></div>
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
          return <Todo todo={todo} settodos={settodos}/>
        })
      }
      </div>
      </div>
      </div>
    </div>
    </>
  )
}
