import React, {Component} from "react";
import PartTitle from './PartTitle'

export default class Post extends Component{
  render () {
    return (
      <div>
        <PartTitle title={{en: 'UPDATE', zh: '最新动态'}}></PartTitle>

        {/* 文章列表 */}
        <div className="flex flex-wrap">

          {/* 单个文章 */}
          <div className="flex w-full md:w-1/2 xl:w-1/3 px-2 h-48 mb-4 cursor-pointer">
            
            {/* 左侧模块 */}
            <div className="left w-1/5">
              <h2>文章<span>74</span></h2>
              <p className="text-xs text-gray-500">/post</p>
            </div>

            {/* 右侧模块 */}
            <div className="right w-4/5">
              <div className="w-full flex hover:bg-gray-200 p-2 rounded transform -skew-x-6">
                <div className="h-10 w-2/12 flex items-center justify-center mr-2 transform skew-x-6">
                  <img className="max-h-full max-w-full rounded" src="https://oss.jisuowei.com/img/202006/6fvtyc.jpg" alt=""/>
                </div>
                <div className="transform skew-x-6">
                  <p>武安中心小学3D建模</p>
                  <p className="text-xs text-gray-500">2020-06-20</p>
                </div>
              </div>
              <div className="w-full flex hover:bg-gray-200 p-2 rounded transform -skew-x-6">
                <div className="h-10 w-2/12 flex items-center justify-center mr-2 transform skew-x-6">
                  <img className="max-h-full max-w-full rounded" src="https://oss.jisuowei.com/img/202006/6fvtyc.jpg" alt=""/>
                </div>
                <div className="transform skew-x-6">
                  <p>武安中心小学3D建模</p>
                  <p className="text-xs text-gray-500">2020-06-20</p>
                </div>
              </div>
              <div className="w-full flex hover:bg-gray-200 p-2 rounded transform -skew-x-6">
                <div className="h-10 w-2/12 flex items-center justify-center mr-2 transform skew-x-6">
                  <img className="max-h-full max-w-full rounded" src="https://oss.jisuowei.com/img/202006/6fvtyc.jpg" alt=""/>
                </div>
                <div className="transform skew-x-6">
                  <p>武安中心小学3D建模</p>
                  <p className="text-xs text-gray-500">2020-06-20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}