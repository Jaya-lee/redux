import React from 'react'
import PostBody from './PostBody'
import CommentBox from './CommentBox'
import {Link} from 'react-router-dom'

const Post = ({ match }) => (
  <div>
      <Link className='back-home' to='/'>HOME</Link>
    <div className="top  clearfix">
      <PostBody id={match.params.id}/>
    </div>
    <div className="bottom clearfix">
      <CommentBox id={match.params.id}/>
    </div>
  </div>
)

export default Post
