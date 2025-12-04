import React from 'react'

function D({name,setname}) {
  return (
    <div>
       <h1>hello D Compoenent</h1>
       <h1>D : {name}</h1>
       <button onClick={()=>setname("Shubham")}>Chnage name</button>
    </div>
  )
}

export default D
