import React, { Component } from "react";
import ClassComponentLifeCycle from "./ClassComponentLifeCycle";

class SampleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  handleVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <div className=" row justify-content-center mt-5">
          <button
            className="btn btn-success col-auto mt-5"
            onClick={this.handleVisible}
          >
            Show/Hide Counter Component
          </button>
          <br />
        </div>
        <div>{this.state.visible && <ClassComponentLifeCycle />}</div>
      </>
    );
  }
}
export default SampleComponent;
