import React, {Component} from "react";
import Data from './components/Data'
import List from './components/List'
import Note from '../home/components/Note'
import axios from 'axios'

export default class Read extends Component{

  state = {
    category: [],
    books: []
  }

  getInit = async () => {
    const res = await axios.get('http://127.0.0.1:3000/category')
    const res2 = await axios.get('http://127.0.0.1:3000/books')
    const {category} = res.data
    const {books} = res2.data
    this.setState({category, books})
  }

  componentDidMount() {
    this.getInit()
  }

  render () {

    const {category, books} = this.state

    return (
      <div className="read-box py-10 px-4 md:px-8 max-w-1200px mx-auto">
        <Data></Data>
        <Note></Note>
        <List category={category} books={books}></List>
      </div>
    )
  }
}