import React from 'react';
import {Link} from 'react-router-dom';
import Modal from '../modal/modal';
import { loadavg } from 'os';
import PostControl from '../../services/postControlService';


class AllPosts extends React.Component {

    state = {
        response: '',
        show: false
    }

    fade = () => {
        setTimeout(() => {
            this.setState({
                ...this.state,
                show: false
            })
        }, 2000)
    }


    deletePost = (id) => {
        let url = '/post/'+id;
        let token=localStorage.getItem('token')

        const data = {
            token: token
          }

        PostControl.deleteblog(url,{data})
        .then(res => {
            this.setState({
                ...this.state,
                response: res.data,
                show: true
            })
            this.fade();
        })
        .catch(err => {
            this.setState({
                ...this.state,
                response: err,
                show: true
            })
            this.fade();
        })
        
    }



    render() {

        let message = null;

        if (this.state.show) {
            message = <Modal res={this.state.response}></Modal>
        }

        let img='http://localhost:2700/'+this.props.post.image;
        let blogUrl = '/blog/'+this.props.post._id;
        return (
            <div className="container">
                {message} 
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-3">
                        <div>
                            <img src={img} className="img-responsive" alt="Avatar"></img>
                        </div>
                    </div>
                    <div className="col-sm-9">
                    <Link to={blogUrl}><div className="text-left" style={{ color: 'black' }}>
                            <p>{this.props.post.date}</p>
                            <b><p>{this.props.post.title}</p></b>
                        </div></Link>
                        <button type="button" class="btn btn-default" onClick={()=>this.deletePost(this.props.post._id)}>
                            <span class="glyphicon glyphicon-trash"></span> DELETE
                        </button>
                    </div> 
                </div>
                </div>
        )
    }
}

export default AllPosts;