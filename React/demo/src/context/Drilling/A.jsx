import React, { useState } from 'react'
import B from './B'

function A() {

    const [name,setname] = useState("het")

  return (
    <div>
      <h1>hello A Compoenent</h1>
      <h1>A : {name}</h1>
      <B name={name} setname={setname} />
    </div>
  )
}

export default A
