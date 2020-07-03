import React, {Component} from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Top from './components/Top'
import {Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/home/Index'
import PostList from './pages/post/List'
import PostDetail from './pages/post/Detail'
import Read from './pages/read/Index'
import NotFound from './pages/404/Index'
import Test from './pages/test/Index'
import PageTop from './components/PageTop'

export default class App extends Component {

  componentDidUpdate() {
    console.log(this.refs.app)
  }

  render() {
    return (
      <div className="app-box" ref="app">
        <div id="top-anchor"></div>
        <Header></Header>

        <div className="mt-12">
          <PageTop className="mt-12">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/post/list" component={PostList}></Route>
              <Route exact path="/post/detail/:id" component={PostDetail}></Route>
              <Route exact path="/read" component={Read}></Route>
              <Route exact path="/404" component={NotFound}></Route>
              <Route exact path="/404" component={NotFound}></Route>
              <Route exact path="/test" component={Test}></Route>

              <Redirect exact from="/*" to="/404"></Redirect>
            </Switch>
          </PageTop>
        </div>
        <Top></Top>
        <Footer></Footer>
      </div>
    );
  }
}
