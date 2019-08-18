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
        default:
            return state
    }
}