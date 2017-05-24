
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

// let defaultState = {
//     comments:['hello1','hello2'],
//     likes:0
//     }
//
// function rootReducer(state = defaultState, action) {
//     switch(action.type){
//         case 'ADD_COMMENT' : return {...state,comments:[...state.comments,action.comment]}
//
//         case 'INCREMENT_LIKE' : return {...state,likes:state.likes+1}
//
//         default : return state;
//     }
//
// }

export default rootReducer
