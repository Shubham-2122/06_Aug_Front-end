import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, zero } from './countSlice'

function Counter() {

    const count = useSelector((state) => state.count.value)
    console.log(count)

    const dispatch = useDispatch()

    return (
        <div>
            <h1>hello this Counter data</h1>
            <h1>Count : {count}</h1>

            <button onClick={()=>dispatch(increment())}>Increment</button>
            {/* <button onClick={()=>dispatch(decrement())}>Decrement</button> */}
            <button onClick={()=>dispatch(zero())}>Zero</button>
        </div>
    )
}

export default Counter
