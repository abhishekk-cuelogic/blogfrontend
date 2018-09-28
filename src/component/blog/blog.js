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
            this.props.savePost(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }


    render() {
        return(
                <div className="container">
                    <div className="col-sm-9 col-sm-offset-1">
                        <AuthorInfo /><hr/>
                        <BlogInfo/>
                        <Comment></Comment>
                        <CommentDisplay></CommentDisplay>
                        <CommentDisplay></CommentDisplay>
                    </div>
                </div>       
        )
    }
}

const mapDispatchToProps = dispatch => {

    return {
        clearState : (Post) => dispatch({type:"CLEAR"}),
        savePost : (Post) => dispatch({type:"SAVE_POST", payload:Post})
    }
}

export default connect(null,mapDispatchToProps)(Blog);