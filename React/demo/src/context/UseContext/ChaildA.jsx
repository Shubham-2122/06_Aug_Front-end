import React, { createContext, useState } from 'react'
import ChaildD from './ChaildD'
import ChaildB from './ChaildB'

// conetxt : token : store
export const Data = createContext()

function ChaildA() {

    const [name,setname] = useState("varj patel")
    const [form,setform] = useState({
        count : 0,
        name : "hero"
    })

  return (
    <div>

        {/* 1) created context
            2) provide context
            3) useContext data access
        */}

      <h1>Hello this Chaild A</h1>
      <Data.Provider value={{name,setname,form,setform}}>
        <ChaildB />
        <ChaildD />
      </Data.Provider>
    </div>
  )
}

export default ChaildA
