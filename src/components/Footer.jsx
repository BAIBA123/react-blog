import React, {Component} from "react";

export default class  extends Component{
  render () {
    return (
      <div className="border-t py-4">
        <div className="flex flex-wrap items-center px-4 md:px-8 max-w-1200px mx-auto pt-8">
          <h2 className="w-full md:w-1/2 xl:w-1/3 text-center md:text-left mb-6">minge</h2>
          <div className="w-full md:w-1/2 xl:w-1/3 text-center md:text-right xl:text-center mb-6">
            <i className="iconfont icon-weibo px-2 text-lg"></i>
            <i className="iconfont icon-weixin px-2 text-lg"></i>
            <i className="iconfont icon-qq px-2 text-lg"></i>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 text-center md:text-left xl:text-right mb-6 text-xs">
            <p className="text-gray-500">奇斯威克 · 点燃你的狂热</p>
            <p className="text-gray-500">© 2014-2020 jisuowei.com苏ICP证15046910号</p>
          </div>
        </div>
      </div>
    )
  }
}