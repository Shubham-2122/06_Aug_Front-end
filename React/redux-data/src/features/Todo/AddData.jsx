import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Addtodo } from './todoSlice'

function AddData() {

    const [name,setname] = useState("")

    const dispatch = useDispatch()

    const getdata=(e)=>{
        e.preventDefault()
        dispatch(Addtodo(name))
        setname("")
    
    }

    return (
        <div>
            <form action="" onSubmit={getdata}>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter your Name' />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddData
