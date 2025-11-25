// jsx: javascript syntax xml / extibles 
// jsx : Html read and write
// jsx html allow 
// jsx vs js : 0.1 s fast
// jsx console
// varibale ,state : {}
// <></> fregment

import React from 'react'

function Hello() {

    let name = "het"
    console.log(name)

    const perosn = {
        id : 1,
        name : "varj",
        course : "Front-end"
    }

    const htmldata = <ol>
        <li>One</li>
        <li>One</li>
        <li>One</li><li>One</li>

    </ol>

  return (
    <>
      <h1 >Hello this Jsx Component</h1>
        <h1>hello name : {name}</h1>

        <h1>hello course : {perosn.course}</h1>

        <h2>{10+29}</h2>
        {htmldata}

        {
            console.log("hebjhbuj")
        }
    </>
  )
}

export default Hello
