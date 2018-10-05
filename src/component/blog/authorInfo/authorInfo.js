import React, { Component } from 'react';
import Ronaldo from '/home/abhishek/Desktop/blogfrontend/src/ronaldo.jpeg';
import { connect } from 'react-redux';
import axios from '../../../axiosInstance';
import {Link} from 'react-router-dom';

class AuthorInfo extends Component {

    state = {
        follow: false,
        like: false,
        likes: 0
    }


    componentWillMount = () => {
        let userName = localStorage.getItem('userName');
        let url = 'profile/following/' + userName;

        axios.get(url)
            .then(res => {
                console.log('following====>', res.data);

                if (res.data !== null) {
                    res.data.forEach(obj => {
                        if (obj.userName === this.props.Post.userName) {
                            this.setState({
                                ...this.state,
                                follow: true
                            })
                        }
                    });
                }

            })
            .catch(err => {
                alert(err);
            })
    }

    onLiked = () => {

        let activity = 'You liked Post ' + this.props.Post.title + ' on ' + new Date();


        if (localStorage.getItem('token') === null) {
            alert('You need to signin to like this post');
        } else {
            if (!this.state.like) {
                let url = '/post/like/' + this.props.Post._id;
                let userName = localStorage.getItem('userName');

                axios.put(url, {
                    userName: userName
                })
                    .then(response => {
                        console.log(response);
                        this.setState({
                            ...this.setState,
                            like: true,
                            likes: response.data.likes.length
                        })
                        this.props.Liked(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                
                    axios.put('/useractivity',{
                        userName : userName,
                        activity: activity
                    })
                    .then(res => {})
                    .catch(err => {alert(err);})
            }

        }
    }

    onFollow = () => {

        let activity = 'You Started following ' + this.props.Post.userName + ' on ' + new Date();


        if (localStorage.getItem('token') === null) {
            alert('You need to signin to follow ');
        } else {
            if (!this.state.follow) {
                let url = 'profile/follower/' + this.props.Post.userName;
                let userName = localStorage.getItem('userName');

                axios.put(url, {
                    userName: userName
                })
                    .then(res => {
                        this.setState({
                            ...this.state,
                            follow: true
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

        }
    }

    componentDidMount = () => {
        let data = window.location.href.split('/');
        let url = '/post/like/' + data[4];
        let userName = localStorage.getItem('userName');

        axios.get(url)
            .then(res => {
                res.data.forEach(obj => {
                    if (obj.userName === userName) {
                        this.setState({
                            ...this.state,
                            like: true,
                        })
                    }
                })
                this.setState({
                    ...this.state,
                    likes: res.data.length
                })
            })
            .catch(err => {
                alert(err);
            })

    }

    render() {
        let likename, follow;

        if (this.state.follow) {
            follow = 'FOLLOWING'
        } else {
            follow = 'FOLLOW'
        }

        if (!this.state.like) {
            likename = "LIKE"
        } else {
            likename = "LIKED"
        }

        let authorprofile = '/authorprofile/'+this.props.Post.userName;
        return (
            <div className="container-fluid">
                <div className="col-sm-2 text-center">
                    <img src={Ronaldo} className="img-responsive img-rounded" alt="Avatar" />
                </div>
                <div className="col-sm-10">
                    <h4><Link to={authorprofile}><b style={{color:'black'}}>{this.props.Post.authorName}</b></Link><small> {this.props.Post.date}</small></h4>
                    <button type="button" className="btn btn-default btn-sm" onClick={this.onLiked}>
                        <span className="glyphicon glyphicon-thumbs-up"></span> <b>{likename}</b> {this.state.likes}
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                        <b>Views</b> {this.props.Post.views}
                    </button>
                    <button type="button" className="btn btn-default btn-sm" onClick={this.onFollow}>
                        <b>{follow}</b>
                    </button>
                    <br />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        Post: state.blogReducer.Post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Liked: (Post) => dispatch({ type: "Liked", payload: Post })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorInfo);