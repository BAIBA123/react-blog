import React, {Component} from "react";
import Data from './components/Data'
import List from './components/List'
import Note from '../home/components/Note'
import axios from 'axios'

export default class Read extends Component{

  state = {
    category: []
  }

  getInit = async () => {
    const res = await axios.get('http://127.0.0.1:3000/category')
    const {category} = res.data
    this.setState({category})
  }

  componentDidMount() {
    this.getInit()
  }

  render () {

    const {category} = this.state

    return (
      <div className="read-box py-10 px-4 md:px-8 max-w-1200px mx-auto">
        <Data></Data>
        <Note></Note>
        <List category={category}></List>
      </div>
    )
  }
}