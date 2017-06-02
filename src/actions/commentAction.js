import axios from 'axios'

const fetchComments =()=>(
    dispatch =>{
        axios.get('http://redux-hello.haoduoshipin.com/comments')
        .then( res => dispatch({type:'COMMENT',comments:res.data.comments}))
    }
)

 const addComment = (comment,postId) =>(
     dispatch =>{
        dispatch({type:'ADD_COMMENT',comment,postId})
    }
)
export {fetchComments,addComment}
