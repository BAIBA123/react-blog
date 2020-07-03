import React, {Component} from "react";
import {NavLink, Link} from 'react-router-dom'
import axios from 'axios'

export default class Header extends Component{
  state = {
    menuList: []
  }

  getInit = async () => {
    const res = await axios.get('http://127.0.0.1:3000/menu')
    this.setState({menuList: res.data.menuList})
  }

  componentDidMount() {
    this.getInit()
  }

  render () {
    const {menuList} = this.state

    return (
      <div className="header-box h-12 shadow fixed top-0 left-0 w-full z-10 bg-hazy-100">
        {/* 小屏 */}
        <div className="px-4 md:hidden flex items-center justify-between h-full">
          <i className="iconfont icon-Menu"></i>
          <Link to="/">
            <h2>mignge</h2>
          </Link>
          <i className="iconfont icon-search"></i>
        </div>
        
        {/* 大屏 */}
        <div className="px-8 hidden md:flex h-full items-center max-w-1200px mx-auto">
          <Link to="/">
            <img className="h-12" src="/logo.png" alt="" />
          </Link>
          <ul className="flex text-sm">
            {
              menuList.map((item, index) => {
                return (
                  <NavLink 
                    to={item.link} 
                    key={item.label} 
                    activeClassName="menu-active"
                    className="px-3 py-1 transform -skew-x-6 rounded-sm hover:bg-gray-300 cursor-pointer">
                    <span className="block transform skew-x-6 font-nav">{item.label}</span>
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