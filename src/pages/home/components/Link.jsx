import React, { Component } from "react";
import LinkSkele from "../skeleton/Link";

export default class Link extends Component {
  render() {
    const { links, loading } = this.props;
    let ele;

    if (loading) {
      ele = <LinkSkele></LinkSkele>;
    } else {
      ele = (
        <div className="flex flex-wrap">
          {links.map((item) => {
            return (
              <div
                className="w-1/4 md:w-1/6 lg:w-1/12 px-2 text-center mb-4"
                key={item.id}
              >
                <img
                  className="rounded-full shadow-lg mb-2 mx-auto"
                  src={item.pic}
                  alt=""
                />
                <p className="text-xs">{item.name}</p>
              </div>
            );
          })}
        </div>
      );
    }

    return <div>{ele}</div>;
  }
}
