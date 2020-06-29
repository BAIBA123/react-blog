import React, { Component } from "react";

export default class Project extends Component {
  render() {
    const { projects } = this.props;
    console.log(projects)
    return (
      <div className="flex flex-wrap">
        {projects.map((item) => {
          return (
            <div className="w-1/2 md:w-1/4 xl:1/6 px-2 mb-4" key={item.id}>
              <div>
                <img
                  className="block rounded-md shadow-lg mb-2"
                  src={item.pic}
                  alt=""
                />
              </div>
              <p className="text-base">{item.name}</p>
              <p className="text-xs text-gray-600">{item.link}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
