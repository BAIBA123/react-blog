import React, {Component} from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import {Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/home/Index'
import Post from './pages/post/Index'
import Read from './pages/read/Index'
import NotFound from './pages/404/Index'

export default class App extends Component {
  render() {
    return (
      <div className="app-box">
        <Header></Header>

        <div className="mt-12">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/post" component={Post}></Route>
            <Route path="/read" component={Read}></Route>
            <Route path="/404" component={NotFound}></Route>

            <Redirect exact from="/" to="/home"></Redirect>
            <Redirect from="*" to="/404"></Redirect>
          </Switch>
        </div>
        
        <Footer></Footer>
      </div>
    );
  }
}
