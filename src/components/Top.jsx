import React, {Component} from "react";

export default class Top extends Component{

  state = {
    show: false
  }

  top = () => {
    document.getElementById('top-anchor').scrollIntoView({block: 'center', behavior: 'smooth'})
  }

  scrollFn = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.screenTop
    this.setState({show: scrollTop > 10})
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollFn)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollFn)
  }

  render () {
    let ele
    const {show} = this.state

    if (show) {
      ele = (
        <div 
          onClick={this.top}
          className="fixed xl:left-1/2 ml-600px flex items-center justify-center bottom-0 right-0 mr-10 mb-10 mr-4 border cursor-pointer h-12 w-12 bg-white rounded-full shadow-md">
          <i className="iconfont icon-arrow-up"></i>
        </div>
      )
    } else {
      ele = ''
    }

    return <div>{ele}</div>
  }
}