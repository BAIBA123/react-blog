import React, {Component} from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import DetailSkele from './skeleton/Detail'

export default class Detail extends Component{

  state = {
    loading: false,
    article: {}
  }

  getInit = async () => {
    this.setState({loading: true})
    const res = await axios.get('http://127.0.0.1:3000/article')
    this.setState({loading: false})

    const {article} = res.data
    this.setState({article})
  }

  componentDidMount() {
    this.getInit()
  }

  render () {
    const {article, loading} = this.state
    let ele

    if (loading) {
      ele = <DetailSkele></DetailSkele>
    } else {
      ele = (
        <div className="flex">
          <div className="left max-w-800px w-full">
            <div className="mb-10">
              <img className="h-48 md:h-72 xl:h-80 w-full rounded-md" src={article.pic} alt=""/>
            </div>

            <div className="flex items-center mb-8">
              <div className="mr-2">
                <img className="h-8 w-8 rounded-full mr-2" src={article.pic} alt=""/>
              </div>
              <div>
                <p>{article.author}</p>
                <p className="text-xs text-gray-600">{article.date} 读完约 {article.minutes} 分钟</p>
              </div>
            </div>

            <h1 className="text-3xl my-0">{article.title}</h1>
            <div className="mb-10">
              {
                article.tags && article.tags.map((item, index) => {
                  return <span className="px-3 rounded-lg bg-gray-300 mr-2 text-xs py-1" key={index}>{item}</span>
                })
              }
            </div>

            <div className="h-64 bg-gray-500 mb-10"></div>
            <p className="text-center text-gray-200 font-medium text-3xl mb-10">-THE END-</p>

            <div className="flex">
              <Link to={`/post/detail/${article.prev}`} className="mr-2 w-1/2 bg-gray-100 hover:bg-gray-300 p-3 transform -skew-x-6 rounded-md">
                <div className="transform skew-x-6">
                  <p>上一篇</p>
                  <p>三个游戏</p>
                </div>
              </Link>
              <Link to={`/post/detail/${article.next}`} className="w-1/2 bg-gray-100 hover:bg-gray-300 p-3 transform -skew-x-6 rounded-md">
                <div className="text-right transform skew-x-6">
                  <p>下一篇</p>
                  <p>三个游戏</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="right"></div>
        </div>
      )
    }

    return <div className="py-10 px-4 md:px-8 max-w-1200px mx-auto">{ele}</div>
    
  }
}