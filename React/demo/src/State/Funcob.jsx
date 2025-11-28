import React, { useState } from 'react'

function Funcob() {
  
    const [data,setdata] = useState({
        name : "user",
        count : 0,
        isImage : true
    })

    console.log(data)
    return (
    <div>
      <h1>hello name {data.name}</h1>
      <button onClick={()=>setdata({name:"ankit"})}>Chnage name</button>
      <button onClick={()=>setdata({name:"kiratn"})}>Change name 2</button>

      <h1>Hello count : {data.count}</h1>
    </div>
  )
}

export default Funcob
