import React, {Component} from "react";
import {NavLink} from 'react-router-dom'

export default class Header extends Component{
  state = {
    menuList: [
      
      {
        label: '文章',
        link: '/post'
      },
      {
        label: '阅读',
        link: '/read'
      },
      {
        label: '库藏',
        link: '/store'
      },
      {
        label: '应用',
        link: '/app'
      },
    ]
  }

  render () {
    const {menuList} = this.state

    return (
      <div className="header-box h-12 shadow fixed top-0 left-0 w-full z-10 bg-hazy-100">
        <div className="px-4 md:hidden flex items-center justify-between h-full">
          <i className="iconfont icon-Menu"></i>
          <h3>mingge</h3>
          <i className="iconfont icon-search"></i>
        </div>
        <div className="px-8 hidden md:flex h-full items-center max-w-1200px mx-auto">
          <h2 className="mr-10">mignge</h2>
          <ul className="flex text-sm">
            {
              menuList.map((item, index) => {
                return (
                  <NavLink 
                    to={item.link} 
                    key={item.label} 
                    activeClassName="menu-active"
                    className="px-3 py-1 transform -skew-x-6 rounded-sm hover:bg-gray-300 cursor-pointer">
                    <span className="block transform skew-x-6">{item.label}</span>
                  </NavLink>
                )
              })
            }
          </ul>
          <i className="iconfont icon-search ml-auto cursor-pointer hover:bg-gray-300 px-2 py-1 rounded"></i>
        </div>
      </div>
    )
  }
}