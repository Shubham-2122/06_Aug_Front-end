import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from './countSlice'

function Count2() {

    const dispatch = useDispatch()

  return (
    <div>
      <button onClick={()=>dispatch(decrement())}>Decremet</button>
    </div>
  )
}

export default Count2
