import React, { Component } from "react";
import Post from "./components/Post";
import axios from "axios";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

var sectionStyle = {
  backgroundImage: `url('https://img-blog.csdnimg.cn/20190927151101105.png')`,
};

export default class Home extends Component {
  state = {
    mainPics: ['https://img-blog.csdnimg.cn/20190927151101105.png', 'https://img-blog.csdnimg.cn/20190927151101105.png'],
    post: []
  };

  getInit = async () => {
    const res = await axios.get("http://127.0.0.1:3000/home");
    this.setState({ post: res.data.post });
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
    this.swiperInit();
  }

  render() {
    const {mainPics} = this.state
    console.log(mainPics+'11')

    return (
      <div className="home-box">
        {/* swiper */}
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              mainPics.map((item, index) => {
                return (
                  <div 
                  key={index} 
                  className="swiper-slide bg-no-repeat bg-cover bg-center mb-20 w-full h-56 md:h-112 xl:h-144" 
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
          <Post data={this.state.post}></Post>
        </div>
      </div>
    );
  }
}
