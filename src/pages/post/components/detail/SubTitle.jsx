import React, {Component} from "react";

export default class SubTitle extends Component{

  state = {
    currId: '',
    target: []
  }

  init = () => {
    let target = Array.from(document.getElementsByTagName('h3'));
    this.setState({target})
  }

  scrollFn = () => {
    let scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
    this.state.target.forEach(item => {
      scrollTop > item.offsetTop - 50 && this.setState({currId: item.id}) 
    })
  }

  componentDidMount() {
    this.init()
    window.addEventListener('scroll', this.scrollFn)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollFn)
  }

  render () {
    let ele
    const {target, currId} = this.state

    ele = target.map(item => {
      return (
        // 给li添加点击事件会导致bug
        <li 
          key={item.id} 
          className={`subtitle-li pl-4 ${currId === item.id ? 'active' : '' }`}>
          <a href={`#${item.id}`}>{item.innerHTML}</a>
        </li>
      )
    })

    return (
      <div className="fixed pl-8">
        <p className="text-gray-300 text-base font-medium mb-4">CONTENT</p>
        <ul>
          {ele}
        </ul>
      </div>
    )
  }
}