import React, { Component } from "react";

export default class Link extends Component {
  render() {
    const { links } = this.props;

    return (
      <div className="flex flex-wrap">
        {links.map((item) => {
          return (
            <div className="w-1/4 md:w-1/6 lg:w-1/12 px-2" key={item.id}>
              <img
                className="rounded-full block shadow-lg mb-2"
                src={item.pic}
                alt=""
              />
              <p className="text-xs text-center">{item.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
