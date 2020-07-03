import React, {Component} from "react";
import {CSSTransition} from 'react-transition-group'
import '../style/animate.css'

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
    const {show} = this.state
    
    return (
      <CSSTransition
        in={show}
        timeout={ 1000 }
        classNames='top'
        unmountOnExit
      >
        <div 
          onClick={this.top}
          className="fixed xl:left-1/2 ml-600px flex items-center justify-center bottom-0 right-0 mr-10 mb-10 border cursor-pointer h-12 w-12 bg-white rounded-full shadow-md">
          <i className="iconfont icon-arrow-up"></i>
        </div>
      </CSSTransition>
    )
  }
}