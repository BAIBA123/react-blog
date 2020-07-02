import React, {Component} from "react";

export default class List extends Component{
  state = {
    cateIndex: 0,
    tagIndex: ''
  }

  cateClick = (cateIndex) => {
    this.setState({cateIndex, tagIndex: ''})
  }

  tagClick = (tagIndex) => {
    this.setState({tagIndex})
  }

  render () {

    const {cateIndex, tagIndex} = this.state
    const {category} = this.props

    return (
      <div className="mt-10">
        {/* 分类和标签 */}
        <div className="cate-box mb-8">
          <ul className="flex text-base mb-8">
            {
              category.map((item, index) => {
                return (
                  <li 
                  key={index}
                  onClick={() => this.cateClick(index)} 
                  className={`cate mr-4 cursor-pointer ${index === cateIndex ? 'active' : ''}`}>
                    {item.label}
                  </li>
                )
              })
            }
          </ul>
          <div className="flex flex-wrap mb-4">
            {
              category[cateIndex] && category[cateIndex].list.map((item, index) => {
                return (
                  <span 
                    onClick={() => this.tagClick(index)} 
                    className={`tag bg-gray-300 text-xs mr-1 mb-1 px-2 rounded-sm h-5 leading-5 cursor-pointer ${index === tagIndex ? 'active' : ''}`}>
                    {item}
                  </span>
                )
              })
            }
          </div>
        </div>

        <div className="book-list">
          <div className="mb-8">
            <span className="text-3xl text-gray-700 font-medium">1000</span>
            <span className="text-3xl text-gray-400 font-medium">books</span>
          </div>
          <div className="flex">

            <div className="w-full md:w-1/2 xl:w-1/4">
              <div className="flex">
                <div className="w-20 mr-2">
                  <img className="max-w-full max-h-full" src="https://cover.read.duokan.com/mfsv2/download/s010/p01ErReOkrL7/yWDlGpOkesxIUz.jpg!l" alt=""/>
                </div>
                <div>
                  <p>古德里安传 经典随身读</p>
                  <p className="text-gray-600">陈辉</p>
                </div>
              </div>
              <div className="flex">
                <span>传记</span>
                <i className="ml-auto iconfont icon-bookmark"></i>
                <i className="iconfont icon-more"></i>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}