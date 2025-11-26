// state : it;s a varibles 
// we can change a data in same file without reresh
// this.state : object use only , single ya array
// this.setstate() : inbuilt function


import React, { Component } from 'react'

class ClassState extends Component {
    constructor(){
        super();
        this.state = {
            name : "het patel",
            count : 0,
            isImage : true
        }
    }
     
  render() {
    // const data = "helloo"
    console.log(this.state)
    return (
      <div>
      <h1 >hello name : {this.state.name}</h1>

      <button onClick={()=>{this.setState({name : "varj patel"})}}>Change name</button>
      <button onClick={()=>this.setState({name:"harsh"})}>Change name 2</button>

       <h1>count : {this.state.count}</h1>


       <button onClick={()=>this.setState({count : this.state.count + 1 })}>increment</button>
       <button onClick={()=>this.setState({count : this.state.count - 1 })}>Decrement</button>

       <button onClick={()=>this.setState({count : 0})}>Zero</button>

      </div>
    )
  }
}

export default ClassState
