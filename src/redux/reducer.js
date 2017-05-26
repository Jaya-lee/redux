import { combineReducers } from 'redux'

let comments = {
  1: ['hello1', 'world1'],
  2: ['hello2', 'world2','hello3','hello4']
}

function commentReducer(state= comments, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {...state, [action.postId]:[...state[action.postId],action.comment]}
    default:
      return state
  }
}

let posts = {
    1: {title:'Hello Redux',likes:3},
    2: {title:'Hello World',likes:6}
}

function postReducer(state = posts, action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
    const id=action.postId
      return {...state,[id]:{...state[id],likes:state[id].likes+1}}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  comments: commentReducer,
  posts: postReducer
})


export default rootReducer
