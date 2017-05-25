import React, { Component } from 'react'
import {connect} from 'react-redux'
import store from './redux/store'

class PostBody extends Component {
    constructor(){
        super()
        this.handleClick=this.handleClick.bind(this)
    }
handleClick(){

    store.dispatch({type:'INCREMENT_LIKE'})
}
render() {
    return (
      <div className='post-body'>
          <span className='title'>Hello Redux</span>
          <div>
              <div className='num likes-num'
                  onClick={this.handleClick}>喜欢{this.props.likes}</div>
              {/* <div className='num comment-num'>评论{this.props.comment}</div> */}
              <div className='num comment-num'>评论{this.props.comments.length}</div>
          </div>
      </div>
    )
  }
}
//将store的值映射为一个props
const mapStateToProps =(state) =>({ //此时state里面是状态树store 必须返回一个对象
    comments:state.comments,
    likes:state.likes
})
export default connect(mapStateToProps)(PostBody)
