import React, {Component} from "react";

export default class Note extends Component{
  state = {
    pic: 'https://cover.read.duokan.com/mfsv2/download/s010/p01ErReOkrL7/yWDlGpOkesxIUz.jpg!l'
  }
  render () {
    const {pic} = this.state

    return (
      <div className="p-6 bg-gray-100 relative">
        {/* 背景图 */}
        <div className="absolute inset-0 opacity-25 bg-center bg-cover z-0 blur-100" style={{backgroundImage: `url(${pic})`}}></div>
        
        {/* 小屏 */}
        <div className="z-10 md:hidden">
          <p className="text-sm text-gray-600 mb-2">我在 2017-02-13 23:05:21 读到：</p>
          <p className="mb-6 text-base">从秦始皇开始“坐朝问道”，君臣都是坐着，共商国是。君坐臣立的规矩，由宋太祖赵匡胤开始。据传有一天赵匡胤临朝，文武群臣起立致敬，要坐下时才发现椅子没了，让太监撤走了。</p>
          <div className="flex">
            <div className="w-1/6 mr-2">
              <img className="rounded-sm" src={pic} alt=""/>
            </div>
            <div>
              <p className="text-base">千字文千字文</p>
              <p className="text-xs text-gray-500">南北朝/周兴嗣</p>
            </div>
          </div>
        </div>

        {/* 大屏 */}
        <div className="hidden md:flex">
          <div className="w-32 mr-10 flex-shrink-0">
            <img src={pic} alt=""/>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">我在 2020-01-10 22:21:33 读到：</p>
            <p className="text-base mb-4">不仅编程语言有这种现象，这实际上是一种普遍的历史趋势。随着技术的发展，每一代人都在做上一代人觉得很浪费的事情。30年前的人要是看到我们今天如此随意地使用长途电话，一定会感到震惊。</p>
            <p className="text-base">黑客与画家</p>
            <p className="text-xs text-gray-600">美/格雷厄姆</p>
          </div>
        </div>
      </div>
    )
  }
}