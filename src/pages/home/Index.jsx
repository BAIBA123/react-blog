import React, { Component } from "react";
import Post from "./components/Post";
import axios from "axios";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import 'antd/dist/antd.css';
import PartTitle from "./components/PartTitle";
import MyNote from "./components/Note"
import MyProject from './components/Project'
import MyLink from './components/Link'

export default class Home extends Component {
  state = {
    mainPics: [],
    post: [],
    projects: [],
    links: []
  };

  getInit = async () => {
    const res = await axios.get("http://127.0.0.1:3000/home");
    const {post, mainPics, projects, links} = res.data
    this.setState({ post, mainPics, projects, links });
    
    // 获取数据后，初始化swiper
    this.swiperInit()
  };

  swiperInit = () => {
    new Swiper(".swiper-container", {
      loop: true, 
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };

  componentDidMount() {
    this.getInit();
  }

  render() {
    const {mainPics, links, projects} = this.state

    return (
      <div className="home-box">
        {/* swiper */}
        <div className="swiper-container mb-20">
          <div className="swiper-wrapper h-56 md:h-112 xl:h-144">
            {
              mainPics.map((item, index) => {
                return (
                  <div 
                    key={index} 
                    className="swiper-slide bg-no-repeat bg-cover bg-center" 
                    style={{'backgroundImage': `url(${item})`}}>
                  </div>
                )
              })
            }
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
        
        <div className="px-4 md:px-8 max-w-1200px mx-auto">
          {/* 文章 */}
          <div className="mb-10">
            <PartTitle title={{ en: "UPDATES", zh: "最新动态" }}></PartTitle>
            <Post data={this.state.post}></Post>
          </div>

          {/* 笔记 */}
          <div className="mb-10">
            <PartTitle title={{ en: "NOTES", zh: "阅读笔记" }}></PartTitle>
            <MyNote></MyNote>
          </div>

          {/* 项目 */}
          <div className="mb-10">
            <PartTitle title={{ en: "PROJECTS", zh: "我的项目" }}></PartTitle>
            <MyProject projects={projects}></MyProject>
          </div>

          {/* 友链 */}
          <div className="mb-10">
            <PartTitle title={{ en: "LINKS", zh: "友情链接" }}></PartTitle>
            <MyLink links={links}></MyLink>
          </div>
        </div>
      </div>
    );
  }
}
