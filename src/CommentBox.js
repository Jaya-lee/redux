import React from 'react'
import { connect } from 'react-redux'
import {fetchComments,addComment} from './actions/commentAction'
class CommentBox extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillMount(){
        this.props.fetchComments()
  }
  handleSubmit(e) {
    e.preventDefault()
    const content = this.textInput.value
    // store.dispatch({ type: 'ADD_COMMENT',comment:content,postId:this.props.id})
    this.props.addComment(content,this.props.id)
    this.refs.commentForm.reset()
  }

  render() {
     
    return(
      <div className="comment-box">
         { this.props.comments.filter( item =>
            item.postId === this.props.id).map(item =>
                <div className="comment" key={Math.random()}>{item.commentBody}</div>
            )
        }
        <form ref="commentForm" onSubmit={this.handleSubmit}   className="comment-form">
          <input ref={(value) => { this.textInput = value} } type="text" className="input" />
          <button type="submit" className="submit-btn" >提交</button>
        </form>
        <div className="underline"></div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  comments: state.comments
})

export default connect(mapStateToProps,{fetchComments,addComment})(CommentBox)
