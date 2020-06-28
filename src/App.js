import React, {Component} from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import {Route, Switch } from 'react-router-dom'
import Home from './pages/home/Index'
import Post from './pages/post/Index'
import Read from './pages/read/Index'

export default class App extends Component {
  render() {
    return (
      <div className="app-box">
        <Header></Header>

        {/* <div className="px-4 md:px-8 max-w-1200px mx-auto mt-12"> */}
        <div className="mt-12">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/post" component={Post}></Route>
            <Route path="/read" component={Read}></Route>
          </Switch>
        </div>
        
        <Footer></Footer>
      </div>
    );
  }
}
