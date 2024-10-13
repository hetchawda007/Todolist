import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

function App() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [show, setShow] = useState(false)
  const [edittodo, setEdittodo] = useState('')
  const addtask = useRef(null)
  const savetask = useRef(null)

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(tasks))
  }

  useEffect(() => {
    let todostring = localStorage.getItem("todos")
    if (todostring) {
      console.log(todostring);
      let tas = JSON.parse(localStorage.getItem("todos"))
      setTasks(tas)
    }
  }, [])

  const handleEdit = (item) => {
    addtask.current.style.display = 'none';
    savetask.current.style.display = 'block';
    setTask(item.todo)
    setEdittodo(item)
  }


  const handleDelete = (e) => {
    let id = e.target.name;
    let index = tasks.findIndex(item => {
      return item.id === id;
    })

    let updatedtasks = [...tasks]
    updatedtasks.splice(index, 1)
    setTasks(updatedtasks)
    saveToLS()
  }


  const handleAdd = () => {
    if (task.length > 0) {
      setTasks([...tasks, { id: uuidv4(), todo: task, isCompleted: false }])
      saveToLS()
    }
    setTask('')
  }

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleCheckbox = (e) => {
    const id = e.target.name;
    let index = tasks.findIndex(item => {
      return item.id === id;
    })
    let updatedtasks = [...tasks]
    updatedtasks[index].isCompleted = !updatedtasks[index].isCompleted;
    setTasks(updatedtasks)
    saveToLS()
  }

  const handleSave = () => {

    let id = edittodo.id
    let index = tasks.findIndex(item => {
      return item.id === id;
    })
    let updatedtasks = [...tasks]
    updatedtasks[index].todo = task;
    setTasks(updatedtasks)
    saveToLS()
    addtask.current.style.display = 'block';
    savetask.current.style.display = 'none';
    setTask('')
  }

  const handleShow = () => {
    setShow(!show)
  }


  return (
    <>
      <Navbar />
      <div className="cmponent bg-purple-200 pt-5 flex flex-col gap-5 w-[41%] h-[85%] mx-auto mt-4 max-md:w-full max-md:mt-0 max-md:h-full max-xl:w-[70%]">

        <h1 className='text-center text-3xl font-bold max-sm:text-xl'>iTask Manage your Tasks at one place</h1>

        <div className="add flex justify-start mx-auto w-[95%] gap-5 items-center max-xl:justify-center max-md:flex-col max-md:justify-start">

          <h1 className='font-bold text-lg'>Add a task</h1>
          <input onChange={handleChange} value={task} className='rounded-md w-96 max-sm:w-80' type="text" name="" id="" />
          <button onClick={handleAdd} ref={addtask} className='hover:bg-purple-900 transition-all bg-purple-700 rounded-full w-14 h-8 text-white font-semibold text-base'>Add</button>
          <button onClick={handleSave} ref={savetask} className='hover:bg-purple-900 transition-all bg-purple-700 hidden rounded-full w-14 h-8 text-white font-semibold text-base'>Save</button>
        </div>
        <div className="show flex items-center gap-3 justify-start mx-auto w-[95%]">
          <input className='cursor-pointer' onChange={handleShow} type="checkbox" name="" id="" />
          <h1 className='font-semibold text-base'>Show Completed Tasks</h1>

        </div>

        <div className="tasks flex flex-col justify-center items-start gap-4 mx-auto w-[95%]">

          <h1 className='font-bold text-lg'>Your Tasks</h1>

          {tasks.length === 0 && <div className='text-base font-semibold'>No Tasks to display</div>}

          {tasks.map(item => {

            if (show == false && item.isCompleted == false) {
              return <div key={item.id} className="task w-full flex items-center gap-3 justify-between">
                <div className='flex items-center gap-3'>
                  <input className='cursor-pointer' onChange={handleCheckbox} name={item.id} type="checkbox" value={item.isCompleted} id="" />
                  <h1 className=' text-sm font-semibold'>{item.todo}</h1>
                </div>
                <div className='flex items-center gap-3'>
                  <button onClick={() => handleEdit(item)} className='hover:bg-purple-900 transition-all bg-purple-700 rounded-full p-2 text-white font-semibold text-base'><FaEdit /></button>
                  <button onClick={handleDelete} name={item.id} className='hover:bg-purple-900 transition-all bg-purple-700 rounded-full p-2 text-white font-semibold text-base'><RiDeleteBin5Fill /></button>
                </div>

              </div>
            }
            if (show == true && item.isCompleted == true) {
              return <div key={item.id} className="task w-full flex items-center gap-3 justify-between">
                <div className='flex items-center gap-3'>
                  <input className='cursor-pointer' onChange={handleCheckbox} name={item.id} type="checkbox" value={item.isCompleted} id="" />
                  <h1 className="line-through text-sm font-semibold">{item.todo}</h1>
                </div>
                <div className='flex items-center gap-3'>
                  <button onClick={() => handleEdit(item)} className='hover:bg-purple-900 transition-all bg-purple-700 rounded-full p-2 text-white font-semibold text-base'><FaEdit /></button>
                  <button onClick={handleDelete} name={item.id} className='hover:bg-purple-900 transition-all bg-purple-700 rounded-full p-2 text-white font-semibold text-base'><RiDeleteBin5Fill /></button>
                </div>
              </div>
            }
          })}

        </div>
        
      </div>
    </>
  )
}

export default App