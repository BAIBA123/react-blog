import React, { Component } from "react";
import {Tooltip} from 'antd'
import Drawer from '../../../components/Drawer'

export default class List extends Component {
  state = {
    cateIndex: 0,
    tagIndex: "",
    showDrawer: false
  };

  cateClick = (cateIndex) => {
    this.setState({ cateIndex, tagIndex: "" });
  };

  tagClick = (tagIndex) => {
    this.setState({ tagIndex });
  };

  toggleDrawer = (flag) => {
    let {showDrawer} = this.state
    showDrawer = flag
    this.setState({showDrawer})
  }

  render() {
    const { cateIndex, tagIndex, showDrawer } = this.state;
    const { category, books } = this.props;

    return (
      <div className="mt-10">
        
        <Drawer showDrawer={showDrawer} toggleDrawer={this.toggleDrawer}>
          <div>
            <div className="flex mb-8">
              <div className="max-w-32 w-1/5 mr-4 flex-shrink-0" >
                <img src="https://cover.read.duokan.com/mfsv2/download/fdsc3/p0118JE5m3Xw/ZZDPloXrPJm31O.jpg!l" alt=""/>
              </div>
              <div className="w-4/5">
                <p className="text-lg text-gray-700 truncate mb-1">权力下的冰与火：永不落幕的肯尼迪王朝权力下的冰与火：永不落幕的肯尼迪王朝</p>
                <p className="text-sm text-gray-500">美/达尔文·波特 美/丹福思·普林斯</p>
              </div>
            </div>
            <div className="border-b border-gray-300 border-dashed py-3">
              <div className="flex items-center w-full mb-4">
                <span className="text-xs text-gray-700">2020-06-15 19:43:13</span>
                <i className="cursor-pointer iconfont icon-copy ml-auto mr-2 px-1 hover:bg-gray-300"></i>
                <i className="cursor-pointer iconfont icon-share px-1 hover:bg-gray-300"></i>
              </div>
              <p>后来，老乔以109号鱼雷艇事件为题材，投资拍摄了一部电影，他希望通过宣传杰克在“二战”中的英勇表现提升肯尼迪家族的声望和杰克在选民中的形象。</p>
            </div>
          </div>
        </Drawer>

        {/* 分类和标签 */}
        <div className="cate-box mb-8">
          <ul className="flex text-base mb-8">
            {category.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => this.cateClick(index)}
                  className={`cate mr-4 cursor-pointer ${
                    index === cateIndex ? "active" : ""
                  }`}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
          <div className="flex flex-wrap mb-4">
            {category[cateIndex] &&
              category[cateIndex].list.map((item, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => this.tagClick(index)}
                    className={`tag bg-gray-300 text-xs mr-1 mb-1 px-2 rounded-sm h-5 leading-5 cursor-pointer ${
                      index === tagIndex ? "active" : ""
                    }`}
                  >
                    {item}
                  </span>
                );
              })}
          </div>
        </div>

        <div className="book-list">
          <div className="mb-8">
            <span className="text-3xl text-gray-700 font-medium">1000</span>
            <span className="text-3xl text-gray-400 font-medium">books</span>
          </div>

          <div className="flex flex-wrap">
            {books.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-full md:w-1/2 xl:w-1/4 relative rounded h-40 mb-8 p-2 text-xs"
                >
                  <div
                    className="opacity-25 blur-100 bg-cover bg-center h-full w-full"
                    style={{backgroundImage: `url(${item.pic})`,}}>
                  </div>
                  <div className="mb-2 px-4 pt-4 absolute inset-0 shadow mx-2">
                    <div className="flex">
                      <img className="block h-24 mr-2 rounded transform duration-300 hover:scale-110 test" src={item.pic} alt="" />
                      <div>
                        <p className="mb-2">{item.name}</p>
                        <p className="text-gray-600">{item.author}</p>
                      </div>
                    </div>
                    <div className="flex pt-2">
                      {
                        item.tags.map((val, index) => {
                          return <span key={index} className="mr-2 text-gray-600">{val}</span>
                        })
                      }
                      <i onClick={() => this.toggleDrawer(true)} className="iconfont icon-bookmark cursor-pointer bg-gray-400 px-2 rounded-lg mr-2 h-5 ml-auto hover:bg-gray-200"></i>
                      <Tooltip title="prompt text" placement="topRight">
                        <i className="iconfont icon-more cursor-pointer bg-gray-400 px-2 rounded-lg h-5 hover:bg-gray-200"></i>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
