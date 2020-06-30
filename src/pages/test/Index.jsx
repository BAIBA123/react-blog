import React, {Component} from "react";

export default class Test extends Component{

  state = {
    display: true,
    h1Class: {}
  }

  toggle = () => {
    this.state.display === 'none' ? this.setState({display: 'block'}) : this.setState({display: 'none'})
  }

  render () {

    return (
      <div className="">
        <h1 className={this.h1Class}>test</h1>
        <button onClick={this.toggle}>click</button>
      </div>
    )
  }
}