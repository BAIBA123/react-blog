import React, {Component} from "react";
import Post from './components/Post'

var sectionStyle = {
  backgroundImage: `url('https://img-blog.csdnimg.cn/20190927151101105.png')`
};

export default class Home extends Component{
  
  render () {
    return (
      <div className="home-box">
        <div className="home-pic bg-no-repeat bg-cover bg-center mb-20 w-full h-40" style={sectionStyle}></div>
        <div className="px-4 md:px-8 max-w-1200px mx-auto">
          <Post></Post>
        </div>
      </div>
    )
  }
}