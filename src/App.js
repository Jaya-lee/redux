import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import {Provider }from 'react-redux'
import store from './redux/store'
import NoMatch from './Nomatch'
import Post from './Post'
import Home from './Home'
class App extends Component {
    // handleClick(){
    //     store.dispatch({type:'ADD'})
    //     store.subscribe(function(){
    //         console.log(store.getState());
    //     })
    // }
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
    // <div style={{width:'300px',height:'300px',background:'teal'}}
    //     onClick={this.handleClick.bind(this)}>
    // </div>
    )
  }
}
{/* <PostBody comment={this.state.all}/> */}
{/* <CommentBox num={this.handleNum}/> */}

export default App
