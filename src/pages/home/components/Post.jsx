import React, { Component } from "react";

export default class Post extends Component {
  render() {
    const data = this.props.data;
    return (
      <div>

        {/* 文章列表 */}
        <div className="flex flex-wrap">
          {data.map(item => {
            return (
              <div
                key={item.en}
                className="flex w-full md:w-1/2 xl:w-1/3 px-2 mb-4 cursor-pointer"
              >
                
                <div className="left w-1/5">
                  <h2>
                    {item.zh}
                    <span>{item.num}</span>
                  </h2>
                  <p className="text-xs text-gray-500">{item.en}</p>
                </div>

                <div className="right w-4/5">
                  {item.list.map(val => {
                    return (
                      <div key={val.id} className="w-full flex hover:bg-gray-200 p-2 rounded transform -skew-x-6">
                        <div className="h-10 w-2/12 flex items-center justify-center mr-2 transform skew-x-6">
                          <img
                            className="max-h-full max-w-full rounded"
                            src={val.pic}
                            alt=""
                          />
                        </div>
                        <div className="transform skew-x-6">
                          <p>{val.title}</p>
                          <p className="text-xs text-gray-500">{val.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
