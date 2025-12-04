import React, { useContext, useState } from 'react'
import { Data } from './ChaildA'

function ChaildB() {

    const {form,setform} = useContext(Data)

  return (
    <div>
        
       <h1>Hello this Chaild B</h1>
       <h1>B : name : {form.name}</h1>
       <button onClick={()=>setform({...form,name:"data"})}>Change name</button>

       <h1>Count : {form.count}</h1>
       <button onClick={()=>setform({...form,count:form.count + 1})}>incmrent</button>
    </div>
  )
}

export default ChaildB
