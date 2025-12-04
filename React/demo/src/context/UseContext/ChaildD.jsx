import React, { useContext } from 'react'
import { Data } from './ChaildA'

function ChaildD() {

    const {name,setname} = useContext(Data)

  return (
    <div>
       <h1>Hello this Chaild D</h1>

       <h1>D Name : {name}</h1>
       <button onClick={()=>setname("data")}>Change name</button>
    </div>
  )
}

export default ChaildD
