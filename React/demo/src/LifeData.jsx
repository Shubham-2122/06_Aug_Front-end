import React, { Component } from 'react'
import Header from './Layout/Coman/Header'

class LifeData extends Component {

    constructor() {
        super()
        this.state = {
            name :"Het patel"
        }
    }

    componentDidMount() {
        console.log("mouting Phase intial value")
    }

    componentDidUpdate(){
        console.log("Update phase")
    }

    // shouldComponentUpdate(){
    //     console.log("update yes not")
    // }
    componentWillUnmount(){
        console.log("unmouting phase")
    }

    render() {
        return (
            <div>
                <Header />
                <h1>Hello this class Life Cycle</h1>
                {/* 1) mouting phase
                2) update phase
                3) unmouting phase */}

                <h1>Hello name : {this.state.name}</h1>
                <button onClick={()=>this.setState({name : "Varj patel"})} className='btn btn-success'>Chnage name</button>
            </div>
        )
    }
}

export default LifeData
