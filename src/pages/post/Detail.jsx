import React, {Component} from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import DetailSkele from './skeleton/Detail'
import SubTitle from './components/detail/SubTitle'

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
        <div className="flex justify-center xl:justify-start">
          <div className="left w-800px w-full">
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

            <div className="a-content mb-20">
              <h3 id="a1">影印本</h3>
              <p>2019 年 3 月 3 日，偶然发现了清代所刊印《高郵州志》的存在，并在某文档网站下载到了几百页图片版的影印本，如获至宝。由于古籍不加标点，阅读困难，并且我也没有搜索到已点校的文献，都是影印本，所以在一周之后我做了一个决定，开始尝试对其进行人工点校，有一定的阻力，加之彼时本站还不够完善，以何种形式呈现点校的成果是一个问题，便搁置了。</p>
              <h3 id="a2">静态网站的契机</h3>
              <p> 来搭建一个文档型站点，猛地发现这正是我想要的模式。下班回到家中，便开始自己重新搭建，所以你会在仓库的 README 中发现来由。 来搭建一个文档型站点，猛地发现这正是我想要的模式。下班回到家中，便开始自己重新搭建，所以你会在仓库的 README 中发现来由。 来搭建一个文档型站点，猛地发现这正是我想要的模式。下班回到家中，便开始自己重新搭建，所以你会在仓库的 README 中发现来由。</p>
              <h3 id="a3">排版和点校方式</h3>
              <p>原本中的竖排版都被重新横排，这样既比较适合现代人的阅读习惯，也能很好的在电子设备上布局。条件允许的话，后期仍会尝试增加竖排的展示方式。原本中的竖排版都被重新横排，这样既比较适合现代人的阅读习惯，也能很好的在电子设备上布局。条件允许的话，后期仍会尝试增加竖排的展示方式。原本中的竖排版都被重新横排，这样既比较适合现代人的阅读习惯，也能很好的在电子设备上布局。条件允许的话，后期仍会尝试增加竖排的展示方式。</p>
            </div>

            <p className="text-center text-gray-200 font-medium text-3xl mb-20">-THE END-</p>

            <div className="flex mb-20">
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

            <div className="w-full h-80 bg-gray-300"></div>
          </div>
          <div className="right hidden xl:block w-300px">
            <SubTitle></SubTitle>
          </div>
        </div>
      )
    }

    return <div className="py-10 px-4 md:px-8 max-w-1200px mx-auto">{ele}</div>
    
  }
}