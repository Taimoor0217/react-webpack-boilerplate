import React, { Component } from 'react';
import Posts from './posts.jsx'
export default class App extends Component{
    render(){
        return(
            <div>
                <h1> Posts</h1>
                <Posts/>
            </div>
        )
    }
}