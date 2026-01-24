import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddData from './AddData'
import { deleteTodo } from './todoSlice'

function Todolist() {

    const todo = useSelector((state)=>state.todos.todo)

    // console.log(todo)

    const disptach = useDispatch()

  return (
    <div>
      <h1>Hello this Todo List Data</h1>

        <AddData />

      <ul>
        {
            todo && todo.map((data,index)=>{
                console.log(data)
                return(
                    <li>{data} <button onClick={()=>disptach(deleteTodo(index))}>Delete</button> <button>Edit</button></li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Todolist
