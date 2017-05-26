import React, { Component } from 'react'
import {connect} from 'react-redux'
import store from './redux/store'

import {Link} from 'react-router-dom'

class PostBody extends Component {

render() {
let paths = Object.keys(this.props.comments)
// console.log(paths);
    return (
        <div className='all'>
        {
            this.props.posts.map( item =>

              <div className='post-body' key={item.index}>
                  <Link className='title'
                     to={`/${paths[item.index]}`}
                     >{item.title}</Link>
                  <div>
                      <div className='num likes-num'
                          onClick={()=>store.dispatch({type:`INCREMENT_LIKE${paths[item.index]}`})}>喜欢{this.props.likes[paths[item.index]]}</div>
                      <div className='num comment-num'>评论
                          {this.props.comments
                              [paths[item.index]].length}</div>
                  </div>
              </div>
          )
      }
      </div>
    )
  }
}
const mapStateToProps =(state) =>({ //此时state里面是状态树store 必须返回一个对象
    comments:state.comments,
    likes:state.likes,
    posts:state.posts
})
export default connect(mapStateToProps)(PostBody)
