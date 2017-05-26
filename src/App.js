import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import {Provider }from 'react-redux'
import store from './redux/store'
import NoMatch from './Nomatch'
import Post from './Post'
import Home from './Home'
class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <Router>

              <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/post/:id' component={Post}></Route>
                    <Route component={NoMatch}></Route>
              </Switch>

      </Router>
       </Provider>
    )
  }
}
{/* <PostBody comment={this.state.all}/> */}
{/* <CommentBox num={this.handleNum}/> */}

export default App
