import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick() {
    /* One-Way of setting states in class based component not recommended */
   // this.setState({count:this.state.count+1})

   //recommended way of setting state
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button type="button" className="btn btn-primary" onClick={this.handleClick}>Increment</button>

      </div>
    );
  }
}

export default ClassCounter;
