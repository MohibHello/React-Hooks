import React, { Component } from 'react'

export class TestState extends Component {

    constructor(props) {
       // Need of super(props): Must call super constructor in derived class before
       // accessing 'this' or returning from derived constructor
        super(props)
        this.state = {
             name:''
        }
    }
    
    handleChange =()=>{
        console.log(this.state)
        this.state.name = 'hello'
    }
    handleChange2 =()=>{
      this.setState({name:'rock'})
    }

    render() {
        return (
            <div>
               <h1> {this.state.name}</h1>
               <button onClick={this.handleChange}>click</button>
               <button onClick={this.handleChange2}>click me!</button>
            </div>
        )
    }
}

export default TestState

