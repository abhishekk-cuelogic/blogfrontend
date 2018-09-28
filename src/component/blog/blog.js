import React,{ Component } from 'react';
import AuthorInfo from './authorInfo/authorInfo';
import BlogInfo from './blogInfo/blogInfo';
import Comment from './comment/comment';
import CommentDisplay from './comment/commentDisplay';
import axios from '../../axiosInstance';
import { connect } from 'react-redux';


class Blog extends Component {

    componentWillMount = () => {
        this.props.clearState();
        let url = '/post/id/'+this.props.id;
        axios.get(url)
        .then(response => {
            this.props.getPost(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }


    render() {

        let commentDisplay;

        if(this.props.Post.comment !== undefined) {
            console.log("Blog====>comment",this.props.Post.comment);

            commentDisplay = this.props.Post.comment.map(obj =>{
                    return <CommentDisplay
                    userName={obj.userName}
                    comment={obj.commentData}
                    date={obj.date}
                    />
            })
        }



        return(
                <div className="container">
                    <div className="col-sm-9 col-sm-offset-1">
                        <AuthorInfo /><hr/>
                        <BlogInfo/>
                        <Comment></Comment>
                        {commentDisplay}
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
        clearState : (Post) => dispatch({type:"CLEAR"}),
        getPost : (Post) => dispatch({type:"GET_POST", payload:Post})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Blog);