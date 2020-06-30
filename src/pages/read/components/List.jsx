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
        <div className="cate-box">
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
      </div>
    )
  }
}