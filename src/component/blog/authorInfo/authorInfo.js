import React,{Component} from 'react';
import Ronaldo from '/home/abhishek/Desktop/blogfrontend/src/ronaldo.jpeg';
import { connect } from 'react-redux';
import axios from '../../../axiosInstance';

class AuthorInfo extends Component {

    onLiked = () => {
            if(localStorage.getItem('token') === null) {
                alert('You need to signin to like this post');
            } else {
                let url = '/post/like/'+this.props.Post._id;
                let userName = localStorage.getItem('userName');
               
                axios.put(url,{
                    userName : userName
                })
                .then( response =>{
                    console.log(response);
                    this.props.Liked(response.data);
                })
                .catch( error => {
                    console.log(error);
                })
            }
    }




    render() {
        let likes,likename,username;

        likename = "LIKE";

        if(this.props.Post.likes !== undefined){
            console.log('authInfo====>',this.props.Post);
             likes = this.props.Post.likes.length;
             username = localStorage.getItem('userName');

             this.props.Post.likes.forEach(obj => {
                 console.log('Inside for Ecah',obj.userName);
                 if(obj.userName === username) {
                    likename = 'LIKED';
                 }
             });
        }

        return(
            <div className="container-fluid">
                <div className="col-sm-2 text-center">
                    <img src={Ronaldo} className="img-responsive img-rounded" alt="Avatar" />
                </div>
                <div className="col-sm-10">
                    <h4><b>{this.props.Post.authorName}</b><small> {this.props.Post.date}</small></h4>
                    <button type="button" className="btn btn-default btn-sm" onClick={this.onLiked}>
                      <span className="glyphicon glyphicon-thumbs-up"></span> {likename} {likes} 
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                        Views {this.props.Post.views}
                    </button>
                    <br/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        Post : state.blogReducer.Post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Liked : (Post) => dispatch({type:"Liked", payload:Post})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthorInfo);