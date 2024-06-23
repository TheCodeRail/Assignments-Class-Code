import React, { Component } from "react";

export class classComp extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    console.log("running 1st time");
  }
  render() {
    return (
      <>
        <>
          <p>{this.state.count}</p>
          <button onClick={this.inc}>increase</button>
        </>
      </>
    );
  }
}

export default classComp;
