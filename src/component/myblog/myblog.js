import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import axios from '../../axiosInstance';
import {Link} from 'react-router-dom';

class MyBlog extends Component {

    state = {
        posts: []
    }

    componentWillMount = () => {
        let userName = localStorage.getItem('userName');
        let url = '/post/getallpost/' + userName;

        axios.get(url)
            .then(res => {
                this.setState({
                    ...this.state,
                    posts: res.data
                })
            })
            .catch(err => {
                alert(err);
            })
    }

    deleteBlog = (id,title,index) => {
        let url = '/post/'+id;
        let activity = 'You Deleted blog ' + title + ' on ' + new Date();
        let userName = localStorage.getItem('userName');
        console.log('index',index);
        console.log('state',this.state.posts);

        let allposts = [...this.state.posts];

        axios.delete(url)
        .then(res => {
            alert(res.data);
            allposts.splice(index,1);
            this.setState({
                posts : allposts
            })

        })
        .catch(err => {
            alert(err);
        })

        axios.put('/useractivity',{
            userName : userName,
            activity: activity
        })
        .then(res => {})
        .catch(err => {alert(err);})
    }

    render() {

        console.log('render====>', this.state.posts);

        let posts = null;

        if (this.state.posts !== undefined) {
            posts=this.state.posts.map((obj,index) => {
                let img = 'http://localhost:2700/'+obj.image
                let blogUrl = '/blog/'+obj._id;
                let editUrl = '/editblog/'+obj._id
                return <div><div className="row ">
                <div className="col-sm-3" style={{color:'black'}}>
                    <div>
                    <img src={img} className="img-responsive" alt="Avatar"></img>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div>
                        <b><p>{obj.catagory}</p></b>
                        <b><p>{obj.date}</p></b>
                        <Link to={blogUrl}><h4>{obj.title}</h4></Link><br/>
                        <button type="button" class="btn btn-default" onClick={()=>this.deleteBlog(obj._id,obj.title,index)}>
                            <span class="glyphicon glyphicon-trash"></span> DELETE
                        </button>
                        <Link to={editUrl}><button type="button" class="btn btn-default">
                            <span class="glyphicon glyphicon-pencil"></span> EDIT
                        </button></Link>
                    </div>
                </div>
            </div>
            <br/><hr/>
            </div>
                        
            })
        }

        return (
            <div>
                <Navbar />
                <div class="container">
                    <div class="row">
                        {posts}
                    </div>
                </div>
            </div>

        )
    }
}

export default MyBlog;