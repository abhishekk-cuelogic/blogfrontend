import React, { Component } from 'react';
import NavBar from '../navbar/navbar';
import axios from '../../axiosInstance';
import UserActivity from './useractivity';
import UserMessage from './usermessages';

class DashBoard extends Component {

    state = {
        followers : 0,
        following : 0,
        posts : 0,
        likes : 0
    }


    componentWillMount = () => {
        let userName = localStorage.getItem('userName');
        let followerUrl = '/profile/follower/'+userName;
        let followingUrl = '/profile/following/'+userName;
        let postUrl = '/post/getallpost/'+userName;

        axios.get(followerUrl)
        .then(res => {
            this.setState({
                ...this.state,
                followers : res.data.length
            })
        })
        .catch(err => {
            alert(err);
        })

        axios.get(followingUrl)
        .then(res => {
            this.setState({
                ...this.state,
                following : res.data.length
            })
        })
        .catch(err => {
            alert(err);
        })

        axios.get(postUrl)
        .then(res => {
            console.log('post data===>',res.data);
            let likes = 0;

            res.data.forEach(obj => {
               likes=likes+obj.likes.length;
            })

            this.setState({
                ...this.state,
                posts : res.data.length,
                likes : likes
            })
        })
        .catch(err => {
            alert(err);
        })
    }




    render() {
        const card = {
            boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            padding: '16px',
            textAlign: 'center',
            backgroundColor: '#444',
            color: 'white'
        }

        const column = {
            float: 'left',
            width: '25%',
            padding: '0 5px'
        }
        const row = {
            margin: '0 -5px'
        }

        return (
            <div>
                <NavBar />
                <br />

                <div style={row}>
                    <div style={column}>
                        <div style={card}>
                            <p><i className="glyphicon glyphicon-thumbs-up"></i></p>
                            <h3>{this.state.likes}</h3>
                            <p>No Of Likes</p>
                        </div>
                    </div>

                    <div style={column}>
                        <div style={card}>
                            <p><i className="glyphicon glyphicon-list-alt"></i></p>
                            <h3>{this.state.posts}</h3>
                            <p>No of Posts</p>
                        </div>
                    </div>

                    <div style={column}>
                        <div style={card}>
                            <p><i className="glyphicon glyphicon-user"></i></p>
                            <h3>{this.state.followers}</h3>
                            <p>Followers</p>
                        </div>
                    </div>

                    <div style={column}>
                        <div style={card}>
                            <p><i className="glyphicon glyphicon-user"></i></p>
                            <h3>{this.state.following}</h3>
                            <p>Following</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <UserActivity/>
                </div>

                 <div>
                    <UserMessage/>
                </div>
               
                
            </div>
        )
    }
}

export default DashBoard;
