import React, { Component } from "react";
import '../style/animate.css'
import {CSSTransition} from 'react-transition-group'

export default class Drawer extends Component {

  toggleDrawer = (e) => {
    e.target.id === "drawerMask" && this.props.toggleDrawer(false);
  };

  render() {
    const { showDrawer } = this.props;

    return (
      <CSSTransition
        in={showDrawer}
        timeout={ 300 }
        classNames='drawer'
        unmountOnExit // 退出时卸载,移除元素
      >
        <div
          id="drawerMask"
          key="one"
          onClick={this.toggleDrawer}
          style={{ backgroundColor: "rgba(0,0,0,.4)" }}
          className="drawer-mask fixed inset-0 z-20"
        >
          <div className="scrollbar drawer absolute top-0 bottom-0 left-0 w-4/5 md:w-1/2 bg-white overflow-y-scroll">
            {this.props.children}
          </div>
        </div>
      </CSSTransition>
    );
  }
}
