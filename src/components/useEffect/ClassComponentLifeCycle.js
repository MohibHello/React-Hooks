import React, { Component } from 'react'

export class ClassComponentLifeCycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
             count:0
        }
    }

    componentDidMount(){
        console.log('CDM will be called, After component Renders or re-renders');
    }

    componentDidUpdate(prevProps,prevState){
        console.log('CDU will be called, when any change to state or props happens')
    }
    componentWillUnmount(){
        console.log('CWU will be called when component is removed')
    }

    handleIncrement=()=>{
        this.setState((prevCount)=>({count:prevCount.count+1}))
    }
    handleDecrement=()=>{
        this.setState((prevCount)=>({count:prevCount.count-1}))
    }

    render() {
        console.log('im rendering')
        return (
            <div>
                <h1 className='mt-5' style={{textAlign:'center'}}>{this.state.count}</h1>
                <div className='row justify-content-center'>
                <button className="col-auto btn btn-primary mr-2" onClick={this.handleIncrement}>Increment</button>
                <button className="col-auto btn btn-secondary ml-2" onClick={this.handleDecrement}>Decrement</button>
                </div>
            </div>
        )
    }
}

export default ClassComponentLifeCycle
