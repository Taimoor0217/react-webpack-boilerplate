import React, { Component } from 'react';
import {connect} from 'react-redux'
import {newPost} from '../Actions/PostActions'
 class NewPost extends Component{
     constructor(props){
         super(props)
         this.state = {
             title : '',
             body : ''
         }
         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
     }
     handleChange(e){
         this.setState({
             [e.target.name] : e.target.value
         })
     }
     handleSubmit(e){
         e.preventDefault()
         this.props.newPost({
             title : this.state.title,
             body : this.state.body
         })
         this.setState({
            title : '',
            body : ''
         })
     }
     render(){
         return(
             <div>
                <h2>Create a new Post here</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>Title</label>
                    <br></br>
                    <input value = {this.state.title} name = 'title' onChange= {this.handleChange} type = 'text'></input>
                    <br></br>
                    <label>Body</label>
                    <br></br>
                    <textarea  value = {this.state.body} name = 'body' onChange= {this.handleChange}  id="" cols="33" rows="9"></textarea>
                    <br></br>                    
                    <button type="submit">Submit</button>

                </form>
             </div>
         )
     }
 }
 
 export default connect(null , {newPost})(NewPost)