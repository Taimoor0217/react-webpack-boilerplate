import {GET_POSTS , NEW_POST} from './types'
export function getPosts(){
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            dispatch({
                type : GET_POSTS,
                data : data
            }) 
        })
    }
}