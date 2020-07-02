import React, {Component} from "react";
import "animate.css"
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class Drawer extends Component{

  toggleDrawer = (e) => {
    e.target.id === 'drawerMask' && this.props.toggleDrawer()
  }

  render () {

    const {showDrawer} = this.props

    return (
      <ReactCSSTransitionGroup
        transitionEnter={true}
        transitionLeave={true}
        transitionEnterTimeout={2500}
        transitionLeaveTimeout={1500}
        transitionName="animated"
      >
        <div id="drawerMask"
          key="one" 
          onClick={this.toggleDrawer} 
          style={{backgroundColor: 'rgba(0,0,0,.4)'}} 
          className={`fixed inset-0 z-20 ${showDrawer ? 'block': 'hidden'}`}>
          <div className="animated fadeIn  drawer absolute top-0 bottom-0 left-0 w-4/5 md:w-1/2 bg-white overflow-y-scroll">

          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}