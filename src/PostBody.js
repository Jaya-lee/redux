import React from 'react'
import { connect } from 'react-redux'
import store from './redux/store'

class PostBody extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    store.dispatch({type: 'INCREMENT_LIKES',postId:this.props.id})
  }
  render() {
    return(
      <div className="post-body">

        <li className='title'>{this.props.posts[this.props.id].title}</li>
            {/* {this.props.posts[this.props.id].title} */}
        <div onClick={this.handleClick} className="likes-num num">
          赞{this.props.posts[this.props.id].likes}
        </div>
        <div className="comment-num num">
          评论{this.props.comments[this.props.id].length}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    comments: state.comments,
    posts: state.posts
  }
)

export default connect(mapStateToProps)(PostBody)
