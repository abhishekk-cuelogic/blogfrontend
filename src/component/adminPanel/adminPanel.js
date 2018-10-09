import React,{ Component } from 'react';
import NavBar from '../navbar/navbar';
import AllUsers from './AllUsers';
import AllPosts from './AllPosts';
import axios from '../../axiosInstance';


class AdminPanel extends Component {

    state = {
        profiles: [],
        posts:[],
        userShow:false,
        postShow:false
    }

    componentDidMount = () => {

        axios.get('/profile')
            .then(res => {
                console.log(res);
                this.setState({
                    ...this.state,
                    profiles: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
        
        axios.get('/post')
        .then(res=>{
            console.log('post===>',res);
            this.setState({
                ...this.state,
                posts:res.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }

    userShow = () => {
        this.setState({
            ...this.state,
            userShow : true,
            postShow:false
        })
    }

    postShow = () => {
        this.setState({
            ...this.state,
            userShow : false,
            postShow:true
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
            marginLeft:'30%',
        }

        let allusers = null;

        allusers=this.state.profiles.map(obj => {
            return <div><AllUsers profile={obj} /><br/><hr/></div>
        })

        let allposts = null;

        allposts=this.state.posts.map(obj => {
            return <div><AllPosts post={obj}/><br/><hr/></div>
        })

        let show = null;
        let title=null;

        if(this.state.userShow) {
            show = allusers
            title='AllUsers'
        }

        if(this.state.postShow) {
            show=allposts
            title='AllPosts'
        }

        return (
            <div>
                <NavBar />
                <br />
                <div style={row}>
                    <div style={column}>
                        <div style={card}>
                            <p><i className="glyphicon  glyphicon-user"></i></p>
                            <h3>{this.state.profiles.length}</h3>
                            <p>No Of Users</p>
                            <button type="button" class="btn btn-default btn-block" onClick={this.userShow}>
                                 View
                            </button>
                        </div>
                    </div>

                    <div style={column}>
                        <div style={card}>
                            <p><i className="glyphicon glyphicon-list-alt"></i></p>
                            <h3>{this.state.posts.length}</h3>
                            <p>No of Posts</p>
                            <button type="button" class="btn btn-default btn-block" onClick={this.postShow}>
                                View
                            </button>
                        </div>
                    </div>
                </div>
                <div class="container">
                <br /><br />
                <table class="table">
                    <thead>
                        <tr>
                            <th><h3>{title}</h3></th>
                        </tr>
                    </thead><br/>
                    {show}<hr/>
                </table>
            </div>
                </div>
        )

    }
}

export default AdminPanel;