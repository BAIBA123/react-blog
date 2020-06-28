import React, {Component} from "react";

export default class PartTitle extends Component{
  render () {
    return (
      <div className="mb-4 relative">
        <p className="text-5xl font-bold text-gray-200">{this.props.title.en}</p>
        <p className="absolute bottom-0 mb-2 text-gray-600">{this.props.title.zh}</p>
      </div>
    )
  }
}