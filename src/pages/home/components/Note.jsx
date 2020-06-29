import React, {Component} from "react";
import axios from 'axios';
import NoteSkele from '../skeleton/Note'

export default class Note extends Component{
  state = {
    loading: false,
    note: {}
  }

  getInit = async () => {
    this.setState({loading: true})
    const res = await axios.get('http://127.0.0.1:3000/note')
    this.setState({loading: false})

    const {note} = res.data
    this.setState({note})
  }

  componentDidMount() {
    this.getInit()
  }

  render () {
    const {note, loading} = this.state;
    let noteEle;

    if(loading) {
      noteEle = (
        <NoteSkele></NoteSkele>
      )
    } else {
      noteEle = (
        <div>
          {/* 小屏 */}
          <div className="z-10 md:hidden">
            <p className="text-sm text-gray-600 mb-2">我在 {note.date} 读到：</p>
            <p className="mb-6 text-base">{note.content}</p>
            <div className="flex">
              <div className="w-1/6 mr-2">
                <img className="rounded-sm" src={note.pic} alt=""/>
              </div>
              <div>
                <p className="text-base">{note.book}</p>
                <p className="text-xs text-gray-500">{note.author}</p>
              </div>
            </div>
          </div>

          {/* 大屏 */}
          <div className="hidden md:flex">
            <div className="w-32 mr-10 flex-shrink-0">
              <img src={note.pic} alt=""/>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">我在 {note.date} 读到：</p>
              <p className="text-base mb-4">{note.content}</p>
              <p className="text-base">{note.book}</p>
              <p className="text-xs text-gray-600">{note.author}</p>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="p-6 bg-gray-100 relative">
        {/* 背景图 */}
        <div className="absolute inset-0 opacity-25 bg-center bg-cover z-0 blur-100" style={{backgroundImage: `url(${note.pic})`}}></div>
  
        {noteEle}
      </div>
    )
  }
}