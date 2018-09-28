import React,{Component} from 'react';
import axios from '../../../axiosInstance';
import { connect } from 'react-redux';


class Comment extends Component {

    submitComment = () => {
        let userName,url,commentData;
        if(localStorage.getItem('userName') === null) {
            alert('You need to signin to comment on this post');
        } else {
            userName = localStorage.getItem('userName');
            commentData = document.getElementById('comment').value;
            url = '/post/comment/'+this.props.Post._id;

            axios.put(url,{
                userName: userName,
                commentData : commentData
            })
            .then(response => {
                console.log("comment Response======>",response.data);
                this.props.saveComment(response.data);
            })
            .catch(error => {
                alert(error);
            })

        }
    }



    render() {
        return(
            <div className="col-sm-12">
                <div className="container-fluid">
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