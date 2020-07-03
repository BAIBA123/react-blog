/* eslint-disable */
import React, { Component } from "react";
import Drawer from "../../components/Drawer";

export default class NotFound extends Component {
  state = {
    showDrawer: true,
  };

  initMap = () => {
    var map = new AMap.Map("currMap", {
      mapStyle: 'amap://styles/whitesmoke'
    });

    //异步同时加载多个插件
    AMap.plugin('AMap.Driving', function() {
      var driving = new AMap.Driving({
        // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
        policy: AMap.DrivingPolicy.LEAST_TIME
      })
      
      var startLngLat = [116.379028, 39.865042]
      var endLngLat = [116.427281, 39.903719]
      
      driving.search(startLngLat, endLngLat, function (status, result) {
        // 未出错时，result即是对应的路线规划方案
      })
    })
    
  };

  componentDidMount() {
    this.initMap();
  }

  render() {
    const { showDrawer } = this.state;

    return (
      <div className="test h-48">
        <Drawer showDrawer={showDrawer}>
          <div className="w-full h-full p-2">
            <div id="currMap" className="w-full h-full"></div>
          </div>
        </Drawer>
      </div>
    );
  }
}
