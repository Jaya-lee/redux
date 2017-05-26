import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PostBody from './PostBody'
import {Provider }from 'react-redux'
import store from './redux/store'

import Post from './router/Post'
class App extends Component {
  render() {
    return (
        <Router>
            <Provider store={store}>
              <div>
                    <Route exact path='/' component={PostBody}></Route>
                    <Route path='/:id' component={Post}></Route>
              </div>
          </Provider>
      </Router>
    )
  }
}
{/* <PostBody comment={this.state.all}/> */}
{/* <CommentBox num={this.handleNum}/> */}

export default App
