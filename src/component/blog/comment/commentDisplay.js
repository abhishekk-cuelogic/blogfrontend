import React,{Component} from 'react';
import Img from '/home/abhishek/Desktop/blogfrontend/src/img.jpg';
import axios from '../../../axiosInstance';
import Modal from '../../modal/modal';
import { connect } from 'react-redux';


class CommentDisplay extends Component {

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

    deleteComment = (id,postId) => {
        let url = '/post/comment/'+postId+'/'+id;
        let token=localStorage.getItem('token');

        axios.put(url,{
            commentId:id,
            token:token
        })
        .then(res=>{
            console.log(res);
            this.props.deleteComment(res.data.resdata);
            this.setState({
                ...this.state,
                response: res.data.message,
                show: true
            })
            this.fade();
        })
        .catch(err=>{})
    }

    render() {
        let message = null;

        if (this.state.show) {
            message = <Modal res={this.state.response}></Modal>
        }
        let comp = null;
        if(localStorage.getItem('userName') === 'admin@gmail.com') {
            comp = <button type="button" className="btn btn-primary" onClick={()=>this.deleteComment(this.props.id,this.props.postId)}>Delete</button>    
        }
        console.log("commentDisplay======>",this.props.comment);
        return(
            <div className="col-sm-12">
                {message}
                <div className="container-fluid">
                    <div className="col-sm-2 col-sm-offset-1 text-center">
                        <img src={Img} className="img-responsive img-circle" alt="Avatar" />
                    </div>
                    <div className="col-sm-9">
                        <h5><b>{this.props.userName}</b><small> {this.props.date}</small></h5>
                        <p>{this.props.comment}</p>
                        <div>
                            {comp}
                            <br/>
                        </div>
                    </div>
                </div>
            </div>           
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteComment : (post) => dispatch({type:'DELETE_COMMENT',payload:post})
    }
}


export default connect(null,mapDispatchToProps)(CommentDisplay);