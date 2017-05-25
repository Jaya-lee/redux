
import {combineReducers} from 'redux'
let posts=[{index:0,title:'Hello Redux'},
    {index:1,title:'Hello Baby'}]
function postReducer(state=posts,action){

    switch(action.type){

        case 'CHANGE_POST' : return state.slice(action.post,action.post+1)
        case 'ALL' : return posts
        default : return state
    }

}
let comments ={
    redux:['hello1','hello2'],
    baby:['hello3','hello4']
    }

function commentReducer(state=comments,action){
    switch(action.type){
        case 'ADD_COMMENTredux' : return {...state,redux:[...state.redux,action.comment]}

        case 'ADD_COMMENTbaby' : return {...state,baby:[...state.baby,action.comment]}

        default : return state
    }
}

let likes = {
    redux:0,
    baby:0
}
function likeReducer(state = likes,action){
    switch(action.type){
        case 'INCREMENT_LIKEredux' : return {...state,redux:state.redux+1}
        case 'INCREMENT_LIKEbaby' : return {...state,baby:state.baby+1}
        default : return state

    }
}
const rootReducer = combineReducers({
    comments:commentReducer,
    likes:likeReducer,
    posts:postReducer
})

export default rootReducer
