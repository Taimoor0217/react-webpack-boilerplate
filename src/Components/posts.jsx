import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getPosts} from '../Actions/PostActions'
class Posts extends Component{
    componentDidMount() {
        this.props.getPosts()
    }
    render(){
        return(
            <div>
                <h1>Posts</h1>
                {this.props.Posts.map(function(post , index){
                    return(
                        <div key = {index+1}>
                            <h3>{index+1} {post.title}</h3>
                            <p>{post.body}</p>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = state =>({
    Posts : state.Posts.AllPosts,
}) 
export default connect(mapStateToProps , {getPosts})(Posts)