import React from 'react'
import store from './redux/store'
import { connect } from 'react-redux'

class CommentBox extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const content = this.textInput.value
    store.dispatch({ type: 'ADD_COMMENT',comment:content,postId:this.props.id})
    this.refs.commentForm.reset()
  }

  render() {
    let commentList = this.props.comments[this.props.id].map((item) => (
      <div className="comment" key={Math.random()}>{item}</div>
    ))
    console.log(this.props.id);
    return(
      <div className="comment-box">
        {  commentList }
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

export default connect(mapStateToProps)(CommentBox)
