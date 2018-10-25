import React,{Component} from 'react';
import axios from '../../../axiosInstance';
import { connect } from 'react-redux';
import Rating from './rating';
import Modal from '../../modal/modal';
import PostControl from '../../../services/postControlService';


class Comment extends Component {

    state ={
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

    submitComment = () => {
        let userName,url,commentData;

        let activity = 'You Commented on ' + this.props.Post.title + ' on ' + new Date();

        if(localStorage.getItem('userName') === null) {
            this.setState({
                ...this.state,
                response: 'You need to signin to comment on this post',
                show: true
            })
            this.fade();
        } else {
            userName = localStorage.getItem('userName');
            commentData = document.getElementById('comment').value;
            url = '/post/comment/'+this.props.Post._id;
            let token = localStorage.getItem('token');

            PostControl.addComment(url,userName,commentData,token)
            .then(response => {
                this.props.saveComment(response.data);
            })
            .catch(error => {
                alert(error);
            })


            axios.put('/useractivity',{
                userName : userName,
                activity: activity
            })
            .then(res => {})
            .catch(err => {alert(err);})

        }
    }



    render() {
        let message = null;

        if (this.state.show) {
            message = <Modal res={this.state.response}></Modal>
        }
        return(
            <div className="col-sm-12">
                {message}
                <div className="container-fluid">
                    <br/>
                   <h4><b>Rate This Blog</b></h4>
                   <Rating/><br/>
                   <h4><b>Leave a Comment</b></h4>
                </div>
                <form role="form">
                    <div className="form-group container-fluid">
                      <textarea className="form-control" rows="3" id="comment" required></textarea>
                    </div>
                    <div className="container-fluid">
                       <button type="button" className="btn btn-success" onClick={this.submitComment}>Submit</button>
                    </div>    
                </form>
                <br/><br/>
                <div className="container-fluid">
                   <p><b>Comments:</b></p><br/>
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
        saveComment : (Post) => dispatch({type:"SAVE_COMMENT", payload:Post})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comment);