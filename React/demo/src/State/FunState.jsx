// state : it;s a varibles 
// we can change a data in same file without reresh
// react v16.8 Function : hooks: inbuilt function
// 1) useState : state varible define and use
// hooks reuse : only function use
// const [state,setstate]= useState(initialvalue)

import React, { useState } from 'react'
import Image from './Image'

function FunState() {

    // define , function state change
    const [name, setname] = useState("shubham")
    const [count, setcout] = useState(0)
    const [isImage, setisIamge] = useState(true)

    const data=()=>{
        setcout(count + 2)
    }

    return (
        <div>
            <h1>hello name : {name}</h1>
            <button onClick={() => setname("harsh")}>Change name</button>
            <button onClick={() => setname("het patel")}>Chnage name 2</button>

            <h1>Count : {count}</h1>
            <button onClick={() => setcout(count + 1)}>increment</button>
            <button onClick={data}>increment by 2</button>
            <button onClick={() => setcout(count - 1)}>Decrement</button>
            <button onClick={() => setcout(0)}>Zero</button>
            <br /> <br />
            <button onClick={() => setisIamge(false)}>Hide</button>

            <button onClick={() => setisIamge(true)}>Show</button>

            <button onClick={() => setisIamge(!isImage)}>Toggle</button>

            {
                (isImage) ? <Image /> : false
            }


        </div>
    )
}

export default FunState
