import React, { Component } from "react";
import axios from "axios";
import ListSkele from './skeleton/List'
import {Link} from 'react-router-dom'

export default class List extends Component {
  state = {
    loading: false,
    list: []
  };

  getInit = async () => {
    this.setState({loading: true})
    const res = await axios.get("http://localhost:3000/post");
    this.setState({loading: false})

    const { list } = res.data;
    this.setState({ list });
  };

  componentDidMount() {
    this.getInit();
  }

  render() {
    const { list, loading } = this.state;
    let ele;

    if (loading) {
      ele = <ListSkele></ListSkele>
    } else {
      ele = (
        <div className="flex flex-wrap">
          {list.map((item) => {
            return (
              <Link to={`/post/detail/${item.id}`} className="w-1/2 md:w-1/4 xl:w-1/5 px-2 mb-8" key={item.id}>
                <div className="shawod-lg mb-2">
                  <img className="rounded-md" src={item.pic} alt="" />
                </div>
                <p>{item.name}</p>
                <p className="text-xs text-gray-600">{item.date}</p>
              </Link>
            );
          })}
        </div>
      );
    }


    return <div className="py-10 px-4 md:px-8 max-w-1200px mx-auto">{ele}</div>;
  }
}
