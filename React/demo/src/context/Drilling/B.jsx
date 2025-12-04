import React from 'react'
import C from './C'

function B({name,setname}) {
  return (
    <div>
       <h1>hello B Compoenent</h1>
       <h1>B : {name}</h1>
       <button onClick={()=>setname("sujal")}>Chaneg name2</button>
       <C name={name} setname={setname} />
    </div>
  )
}

export default B
