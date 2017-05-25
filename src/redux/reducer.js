
import {combineReducers} from 'redux'
let comments =['hello1','hello2']

function commentReducer(state=comments,action){
    switch(action.type){
        case 'ADD_COMMENT' : return [...state,action.comment]
        default : return state
    }
}
let likes = 0
function likeReducer(state = likes,action){
    switch(action.type){
        case 'INCREMENT_LIKE' : return state+1
        default : return state

    }
}
const rootReducer = combineReducers({
    comments:commentReducer,
    likes:likeReducer
})

export default rootReducer
