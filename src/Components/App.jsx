import React, { Component } from 'react';
import Posts from './posts.jsx'
import NewPost from './NewPost.jsx'
export default class App extends Component{
    render(){
        return(
            <div>
                <NewPost/>
                <Posts/>
            </div>
        )
    }
}