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

export function newPost(data){
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
            title: data.title,
            body: data.body,
            userId: 1
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(newPost => {
            dispatch({
                type : NEW_POST,
                data : newPost
            })
        })
    }
}