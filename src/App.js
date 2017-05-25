import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PostBody from './Hello'
// import CommentBox from './Search'
import {Provider }from 'react-redux'
import store from './redux/store'
// import Baby from './router/baby'
// import Home from './router/home'
import Post from './router/post'
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
