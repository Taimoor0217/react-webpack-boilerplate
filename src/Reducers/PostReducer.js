import {GET_POSTS , NEW_POST} from '../Actions/types'
const initialState = {
    AllPosts : [],
    newPost : {}
}
export default function(state = initialState , action){
    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                AllPosts : action.data,
            }
        case NEW_POST:
            return{
                ...state,
                AllPosts : [action.data , ...state.AllPosts]
            }
        default:
            return state
    }
}