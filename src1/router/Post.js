import React, { Component } from 'react'
import {connect} from 'react-redux'
import store from '../redux/store'

import PostBody from '../PostBody'
import CommentBox from '../CommentBox'
import {Link,Route} from 'react-router-dom'

class Post extends Component{

    componentWillMount(){
        let num=
        Object.keys(this.props.comments).indexOf(this.props.match.params.id)
        store.dispatch({type:'CHANGE_POST',post:num})
        // console.log(this.props);
    }
    handleClick(){
        store.dispatch({type:'ALL'})
    }
    render(){
    return (
          <div>
              <Link className=' back-home'
                  to='/'
                  onClick={this.handleClick.bind(this)}>HOME</Link>
                 <PostBody/>
              <div className='bottom clearfix'>
                  <Route path={'/:id'} component={CommentBox}></Route>
              </div>
          </div>

    )
}
}
const mapStateToProps =(state) =>({ 
    comments:state.comments,
    likes:state.likes,
    posts:state.posts
})
export default connect(mapStateToProps)(Post)
