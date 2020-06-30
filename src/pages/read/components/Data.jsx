import React, {Component} from "react";
import { Progress } from 'antd';

export default class Data extends Component{
  render () {
    return (
      <div className="mb-12">
        <div className="flex">
          <div className="w-1/3 mx-2 py-6 bg-blue-500 rounded-md text-center mb-4">
            <p className="text-3xl font-medium text-white">2099</p>
            <p className="text-sm text-white">全部已购</p>
          </div>
          <div className="w-1/3 mx-2 py-6 bg-green-500 rounded-md text-center mb-4">
            <p className="text-3xl font-medium text-white">2099</p>
            <p className="text-sm text-white">全部已购</p>
          </div>
          <div className="w-1/3 mx-1 py-6 bg-orange-500 rounded-md text-center mb-4">
            <p className="text-3xl font-medium text-white">2099</p>
            <p className="text-sm text-white">全部已购</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 border border-gray-400 rounded-md py-4 mx-2 flex">
            <Progress type="dashboard" percent={75} width={50} strokeWidth="8" className="mx-8" />
            <div>
              <p>完成比：5.85%</p>
              <p className="text-xs text-gray-600">统计自 2014 年 3 月始</p>
            </div>
          </div>
          <div className="w-1/2 border border-gray-400 rounded-md py-4 mx-2 flex">
            <Progress type="dashboard" percent={75} width={50} strokeWidth="8" className="mx-8" />
            <div>
              <p>完成比：5.85%</p>
              <p className="text-xs text-gray-600">统计自 2014 年 3 月始</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}